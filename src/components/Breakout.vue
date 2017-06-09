<template>
  <canvas id="breakout" ref="breakout" class="game-stage" v-bind:style="{ width: width + 'px', height: height + 'px' }"></canvas>
</template>


<script>
  import SAT from 'sat'
  
  /*
  Rectanglular Collidable object for Paddle, Bricks
  */
  class BoxObject {
    constructor(x, y, width, height, pixelRatio, color, context, canvas) {
      this.ctx = context;
      this.cvs = canvas;
      this.pixelRatio = pixelRatio;      
      this.color = color; 
      this.velocity = new SAT.Vector(0, 0); // negative goes left, positive goes right
      this.box = new SAT.Box(new SAT.Vector(x, y), width, height);
    }

    update() {
      // move the object
      this.box.pos.add(this.velocity);
      
      // clamp to horizontal bounds
      this.box.pos.x = Math.max(Math.min(this.box.pos.x, this.cvs.width), 0);
    }

    draw() {  
      // rect is drawn from upper left corner
      this.ctx.beginPath(); 
      this.ctx.rect(this.box.pos.x, this.box.pos.y, this.box.w, this.box.h);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.closePath();
    }
  }

  /*
   Paddle class
  */
  class Paddle extends BoxObject {
    constructor(x, y, width, height, pixelRatio, color, context, canvas) {
      super(x, y, width, height, pixelRatio, color, context, canvas);
      this.mouseX = 0;
      // listen for mouse move; bind 'this' via arrow function
      document.addEventListener('mousemove', (e) => this.mouseMove(e));
    }

    mouseMove(e) {
      // we can't reliably access mouse coordinates w/o listening for event.
      // this is our hack to remember where the mouse is when it's not moving.
      this.mouseX = e.pageX * this.pixelRatio;  
    }

    update() {
      // change velocity depending on which side mouse is on; position center on mouse pointer
      this.velocity.x = this.mouseX - this.box.pos.x - this.box.w/2;
      super.update();
    }

  }

  /*
   Brick class
  */
  class Brick extends BoxObject {
    constructor(x, y, width, height, pixelRatio, color, context, canvas) {
      super(x, y, width, height, pixelRatio, color, context, canvas);
      this.visible = true;
    }

    draw() {  
      if (!this.visible) {
        return; 
      }
      super.draw();
    }

    collide() {
      this.visible = false;
    }

  }

  /*
   Ball class
  */
  class Ball {
    constructor(x, y, ballRadius, moveSpeed, pixelRatio, color, context, canvas) {
      this.ctx = context;
      this.cvs = canvas;
      this.pixelRatio = pixelRatio;      
      this.color = color; 
      this.velocity = new SAT.Vector(0, 0); // negative goes left, positive goes right
      this.ballRadius = ballRadius;
      this.moveSpeed = moveSpeed;
      this.circle = new SAT.Circle( new SAT.Vector(x, y), this.ballRadius);
    }

    update() {

        // move the ball
        this.circle.pos.add(this.velocity);
        
        // change direction if we're hitting the ceiling
        if (this.circle.pos.y + this.velocity.y <= this.ballRadius) {
            this.velocity.y = -this.velocity.y;
        }

        // change direction if we're hitting a wall
        if (this.circle.pos.x + this.velocity.x > this.cvs.width - this.ballRadius || this.circle.pos.x + this.velocity.x < this.ballRadius) {
            this.velocity.x = -this.velocity.x;
        }

    }

    draw() {
        // draw the ball
        this.ctx.beginPath();
        this.ctx.arc(this.circle.pos.x, this.circle.pos.y, this.ballRadius, 0, Math.PI*2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

  }


  /*
  Main game component
  */
  export default {
    name: 'breakout',
    data () {
      return {
        active: false,
        brickWidth: 10,
        brickHeight: 4,
        bricks: [], 
        cvs: null,
        ctx: null,
        width: 0,
        height: 0,
        primaryColor: "#2d9bd6"
      }
    },
    methods: {
      startGame: function(e) {
        // easy refs for canvas and context; have to be registered after rendering
        this.cvs = this.$refs.breakout;
        this.ctx = this.cvs.getContext("2d");

        // prep for hi-dpi display: double size of canvas, then scale to 50% w/ css
        this.pixelRatio = this.getPixelRatio(this.ctx);
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.cvs.width = w * this.pixelRatio;
        this.cvs.height = h * this.pixelRatio;
        this.width = w;
        this.height = h;

        // brick wall settings depend on pixelRatio
        this.brickColumns = 4;
        this.brickRows = 3;
        this.brickPadding = 5 * this.pixelRatio;
        this.brickWidth = (this.cvs.width / this.brickColumns) - this.brickPadding;
        this.brickHeight = this.brickWidth / 2;

        // create the bricks
        this.bricks = [];
        for (let x=0; x<this.brickColumns; x++) {
          this.bricks[x] = [];
          for (let y=0; y<this.brickRows; y++) {
            // center anchor position, not top left
            let xPos = (x * (this.brickPadding + this.brickWidth));
            let yPos = (y * (this.brickPadding + this.brickHeight));
            this.bricks[x][y] = new Brick(xPos, yPos, this.brickWidth, this.brickHeight, this.pixelRatio, this.primaryColor, this.ctx, this.cvs);
          };
        };
        
        // create the paddle
        let paddleHeight = 15 * this.pixelRatio;
        let paddleWidth = 100 * this.pixelRatio;
        let paddleX = this.cvs.width/2 - paddleWidth;
        let paddleY = this.cvs.height - paddleHeight;
        this.paddle = new Paddle(paddleX, paddleY, paddleWidth, paddleHeight, this.pixelRatio, this.primaryColor, this.ctx, this.cvs);

        // create the ball
        let ballRadius = 8 * this.pixelRatio;
        let moveSpeed = 4 * this.pixelRatio;
        this.ball = new Ball(this.cvs.width/2, this.cvs.height - paddleHeight - ballRadius/2, ballRadius, moveSpeed, this.pixelRatio, this.primaryColor, this.ctx, this.cvs);
        
        // listen for click to start the game
        document.addEventListener('click', (e) => this.mouseClick(e));

        // kick off the update-animation loop
        setInterval(this.update, 10);
        
      },

      mouseClick: function(e) {
        if (!this.active) {
          this.active = true; // game has now started
          this.ball.velocity = new SAT.Vector(this.ball.moveSpeed, -this.ball.moveSpeed);
        }
      },

      update: function() {
          // physics updates -- move ball, paddle, bricks around, detect collisions
          this.paddle.update();
          this.ball.update();
        
          // resolve collisions
          this.collisionDetection();

          // after all objects positions are updated, draw them
          this.draw();

      },

      collisionDetection: function() {
        // check the ball's coords against the paddle
        let response = new SAT.Response();
        let collided = SAT.testPolygonCircle(this.paddle.box.toPolygon(), this.ball.circle, response);
        if (collided === true) {          
            // change direction
            this.ball.velocity.y = -this.ball.velocity.y;
            // push ball back outside of paddle collision
            // this.ball.circle.pos.y -= (response.overlapV.y + this.ball.ballRadius/2);
        }

        // check the ball's position against each brick 
        for (let x=0; x<this.brickColumns; x++) {
          for (let y=0; y<this.brickRows; y++) {
            let brick = this.bricks[x][y];
            let brickCollided = SAT.testPolygonCircle(brick.box.toPolygon(), this.ball.circle);
            if (brickCollided === true) {
              brick.collide();
            }
          }
        }
      },
      
      draw: function() {
        // clear the canvas
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
        
        // draw the paddle and ball
        this.paddle.draw();
        this.ball.draw();

        // draw the bricks
        for (let x=0; x<this.brickColumns; x++) {
          for (let y=0; y<this.brickRows; y++) {
            this.bricks[x][y].draw();
          }
        }

      },

      getPixelRatio: function(context) {
        // needed for high-dpi displays
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
      }
      
    },
    mounted () {
      this.startGame();
    },
    destroyed () {
    }
  }
</script>


<style scoped lang="scss">

  @import "../assets/_variables.scss";

  .game-stage {
    background: #eee;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .brick { 
    background: $brand-primary;
    height: 4px;
    width: 10px;
  }
  
</style>
