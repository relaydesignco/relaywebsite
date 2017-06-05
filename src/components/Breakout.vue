<template>
  <canvas id="breakout" ref="breakout" class="game-stage" width="1920" height="800"></canvas>
</template>


<script>

  class Paddle {
    constructor(x, y, width, height, color, context, canvas) {
      this.ctx = context;
      this.cvs = canvas;
      this.center = { 'x': x, 'y': y };
      this.velocity = 0; // x velocity from -1 to 1
      this.acceleration = 1.3;
      this.width = width;
      this.height = height;
      this.color = color;
      this.maxSpeed = 10;
      this.sensitivity = 10;
      
      // listen for mouse move 
      // bind 'this' via arrow function
      document.addEventListener('mousemove', (e) => this.mouseMove(e) );
      
    }

    mouseMove(e) {
      // mouse is to the left of the paddle
      if (this.center.x - e.clientX > this.sensitivity ) {
        this.velocity = -1;
      } else if (this.center.x - e.clientX < -this.sensitivity ) {
        this.velocity = 1;
      }
    }

    update() {

      // don't bother calculating new position if we're not moving
      if (this.velocity == 0) {
        return;
      }

      // if we're moving in a direction, accelerate if the button is still pressed down
      this.velocity =  Math.min(this.maxSpeed, this.velocity + (this.velocity * this.acceleration))

      // move the paddle
      this.center.x += this.velocity;

      // clamp to horizontal bounds
      this.center.x = Math.min(this.center.x, this.cvs.width - this.width/2);
      this.center.x = Math.max(this.center.x, this.width/2);

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
            console.log("hit Y");
        }

        // change direction if we're about to hit a wall
        if(this.center.x + this.velocity.x > this.cvs.width - this.ballRadius || this.center.x + this.velocity.x < this.ballRadius) {
            this.velocity.x = -this.velocity.x;
            console.log("hit X");
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
        ctx: null
    	}
    },
    methods: {

    	startGame: function(e) {
        this.cvs = this.$refs.breakout;
        this.ctx = this.cvs.getContext("2d");
        this.pixelRatio = this.getPixelRatio(this.ctx);
        this.brickWidth = this.cvs.width / 20;
        this.brickHeight = this.brickWidth / 2;
        this.brickColumns = 15;
        this.brickRows = 4;
        this.primaryColor = "#2d9bd6";

        // create the paddle
        this.paddle = new Paddle(80, 80, 50 * this.pixelRatio, 6 * this.pixelRatio, this.primaryColor, this.ctx, this.cvs);

        // create the ball
        let ballRadius = 8 * this.pixelRatio;
        let moveSpeed = 2 * this.pixelRatio;
        this.ball = new Ball(100, 100, ballRadius, moveSpeed, this.primaryColor, this.ctx, this.cvs);
        
        // create the bricks
        this.bricks = [];
        for (let x=0; x<this.brickColumns; x++) {
          this.bricks[x] = [];
          for (let y=0; y<this.brickRows; y++) {
            this.bricks[x][y] = new Brick(x, y, this.brickWidth, this.brickHeight, this.primaryColor, this.ctx, this.cvs);
          };
        };

        // kick off the update-animation loop
        setInterval(this.update, 10);
        
    	},

      update: function() {
          // physics updates -- move ball and bricks around
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
    width: 100%;
    max-width: 100%; 
    height: auto;
    position: absolute;
    top:0;
    left: auto;
  }

  .brick { 
    background: $brand-primary;
    height: 4px;
    width: 10px;
  }
  
</style>
