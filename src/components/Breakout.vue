<template>
  <canvas id="breakout" ref="breakout" class="game-stage" v-bind:style="{ width: width + 'px', height: height + 'px' }"></canvas>
</template>


<script>

  class Paddle {
    constructor(x, y, width, height, color, pixelRatio, context, canvas) {
      this.ctx = context;
      this.cvs = canvas;
      this.center = { 'x': x, 'y': y };
      this.velocity = 0; // negative goes left, positive goes right
      this.width = width;
      this.height = height;
      this.color = color;
      this.maxSpeed = 10;
      this.sensitivity = width/2;
      this.mouseX = 0;
      this.pixelRatio = pixelRatio || 0;
      
      // listen for mouse move 
      // bind 'this' via arrow function
      document.addEventListener('mousemove', (e) => this.mouseMove(e) );
      
    }

    mouseMove(e) {
      // we can't reliably access mouse coordinates w/o listening for event.
      // this is our hack to remember where the mouse is when it's not moving.
      this.mouseX = e.pageX * this.pixelRatio;  
    }

    update() {
      // change velocity depending on which side mouse is on
      this.velocity = this.mouseX - this.center.x;
     
      // move the paddle
      this.center.x += this.velocity;

      // clamp to horizontal bounds
      this.center.x = Math.min(this.center.x, this.cvs.width - this.width);
      this.center.x = Math.max(this.center.x, 0);
    }

    draw() {  
      this.ctx.beginPath();
      this.ctx.rect(this.center.x, this.cvs.height-this.height, this.width, this.height);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.closePath();
    }

  }


  class Brick {
    constructor(x, y, width, height, color, context, canvas) {
      this.ctx = context;
      this.cvs = canvas;
      this.center = { 'x': x, 'y': y };
      this.width = width;
      this.height = height;
      this.color = color;
    }

    update() {

    }

    draw() {  
      this.ctx.beginPath();
      this.ctx.rect(this.center.x, this.center.y, this.width, this.height);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.closePath();
    }

  }


  class Ball {
    constructor(x, y, ballRadius, moveSpeed, color, context, canvas) {
      this.ctx = context;
      this.cvs = canvas;
      this.center = { 'x': x, 'y': y };
      this.ballRadius = ballRadius;
      this.moveSpeed = moveSpeed;
      this.velocity = { 'x': moveSpeed, 'y': moveSpeed };
      this.color = color;
    }

    update() {
        // move the ball
        this.center.x += this.velocity.x;
        this.center.y += this.velocity.y;

        // change direction if we're about to hit the ceiling/floor
        if(this.center.y + this.velocity.y < this.ballRadius || this.center.y + this.velocity.y > this.cvs.height - this.ballRadius) {
            this.velocity.y = -this.velocity.y;
        }

        // change direction if we're about to hit a wall
        if(this.center.x + this.velocity.x > this.cvs.width - this.ballRadius || this.center.x + this.velocity.x < this.ballRadius) {
            this.velocity.x = -this.velocity.x;
        }

    }

    draw() {
        // draw the ball
        this.ctx.beginPath();
        this.ctx.arc(this.center.x, this.center.y, this.ballRadius, 0, Math.PI*2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

  }

  export default {
    name: 'breakout',
    data () {
    	return {
    	  active: false,
        rows: 4,
        columns: 10,
        brickWidth: 10,
        brickHeight: 4,
        bricks: [], 
        cvs: null,
        ctx: null,
        width: 0,
        height: 0
    	}
    },
    methods: {

    	startGame: function(e) {

        this.primaryColor = "#2d9bd6";

        // easy refs for canvas and context
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

        // brick wall settings
        this.brickColumns = 10;
        this.brickRows = 2;
        this.brickPadding = 5 * this.pixelRatio;
        this.brickWidth = (this.cvs.width / this.brickColumns) - this.brickPadding;
        this.brickHeight = this.brickWidth / 2;

        // create the paddle
        this.paddle = new Paddle(80, 80, 50 * this.pixelRatio, 6 * this.pixelRatio, this.primaryColor, this.pixelRatio, this.ctx, this.cvs);

        // create the ball
        let ballRadius = 8 * this.pixelRatio;
        let moveSpeed = 2 * this.pixelRatio;
        this.ball = new Ball(100, 100, ballRadius, moveSpeed, this.primaryColor, this.ctx, this.cvs);
        
        // create the bricks
        this.bricks = [];
        for (let x=0; x<this.brickColumns; x++) {
          this.bricks[x] = [];
          for (let y=0; y<this.brickRows; y++) {
            this.bricks[x][y] = new Brick(x * (this.brickPadding + this.brickWidth), y * (this.brickPadding + this.brickHeight), this.brickWidth, this.brickHeight, this.primaryColor, this.ctx, this.cvs);
          };
        };

        // kick off the update-animation loop
        setInterval(this.update, 10);
        
    	},

      update: function() {
          // physics updates -- move ball, paddle, bricks around, detect collisions
          this.paddle.update();
          this.ball.update();
        
          for (let x=0; x<this.brickColumns; x++) {
            for (let y=0; y<this.brickRows; y++) {
              this.bricks[x][y].update();
            }
          }

          // after all objects positions are updated, draw them
          this.draw();

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
