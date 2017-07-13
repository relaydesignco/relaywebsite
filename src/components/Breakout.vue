<template>
  <div class="game-wrap">
    <button class="closeButton" @click="closeGame">X</button>
    <div v-show="menuActive" class="menu">
      <h1>You {{ didWin ? 'WON' : 'LOST' }}!</h1>
      <h3>Your Score</h3>
      <h2>{{ score }}</h2>
      <button @click="startGame">Play Again</button>
      <button @click="closeGame">Close Game</button>
    </div>  
    <canvas id="breakout" ref="breakout" class="game-stage" v-bind:style="{ width: width + 'px', height: height + 'px' }"></canvas>
  </div>
</template>


<script>
  import SAT from 'sat'
  import Ball from '../classes/Ball.js'
  import Paddle from '../classes/Paddle.js'
  import Brick from '../classes/Brick.js'


  export default {
    name: 'breakout',
    data () {
      return {
        active: false,
        menuActive: false,
        didWin: false,
        bricks: [],
        brickColumns: 8,
        brickRows: 4,
        height: 0,
        width: 0,
        score: 0,
        primaryColor: '#2d9bd6'
      }
    },
    methods: {

      startGame: function (e) {
        // hide the menu if it's open
        this.menuActive = false;

        // create the bricks
        this.bricks = [];
        const yOffset = 20;
        for (let x = 0; x < this.brickColumns; x++) {
          this.bricks[x] = [];
          for (let y = 0; y < this.brickRows; y++) {
            // center anchor position, not top left
            const xPos = (x * (this.brickPadding + this.brickWidth)) + this.leftOffset;
            const yPos = (y * (this.brickPadding + this.brickHeight)) + yOffset;
            this.bricks[x][y] = new Brick(xPos, yPos, this.brickWidth, this.brickHeight, this.pixelRatio, this.primaryColor, this.ctx, this.cvs);
          }
        }

        // create the paddle
        this.paddle = new Paddle(this.paddleX, this.paddleY, this.paddleWidth, this.paddleHeight, this.pixelRatio, this.primaryColor, this.ctx, this.cvs);

        // create the ball
        this.ball = new Ball(this.cvs.width / 2, this.cvs.height - this.paddleHeight - (this.ballRadius * 2), this.ballRadius, this.moveSpeed, this.pixelRatio, this.primaryColor, this.ctx, this.cvs);

        // listen for click to start the game
        // have to wait a second before listening so we don't catch the click that revealed the game
        // store bound handler so we can remove the listener later
        setTimeout(() => { document.addEventListener('click', this.bindHandler) }, 100);

        // kick off the update-animation loop; store result so we can stop it later
        this.intervalHandler = setInterval(this.update, 10);
      },

      mouseClick: function (e) {
        // start the game on first click
        if (!this.active) {
          this.active = true; // game has now started
          this.ball.velocity = new SAT.Vector(this.ball.moveSpeed, -this.ball.moveSpeed);

          // don't need event listener anymore
          document.removeEventListener('click', this.bindHandler);
        }
      },

      update: function () {
        // physics updates -- move ball, paddle, bricks around, detect collisions
        this.paddle.update();
        this.ball.update();

        // resolve collisions
        this.collisionDetection();

        // after all objects positions are updated, draw them
        this.draw();

        // check if the game is over
        if (this.ball.circle.pos.y >= this.cvs.height + (this.ballRadius * 2) + this.ball.velocity.y) {
          this.endGame(false);
        }

        // check if game has been won
        let won = true;
        for (let x = 0; x < this.brickColumns; x++) {
          for (let y = 0; y < this.brickRows; y++) {
            const brick = this.bricks[x][y];
            if (brick.visible) {
              won = false;
              return;
            }
          }
        }
        if (won) {
          this.didWin = true;
          this.endGame(true);
        }
      },

      collisionDetection: function () {
        // check the ball's position against the paddle
        const response = new SAT.Response();
        const collided = SAT.testPolygonCircle(this.paddle.box.toPolygon(), this.ball.circle, response);
        if (collided === true) {
          // change direction
          this.ball.velocity.y = -this.ball.velocity.y;

          // push ball back outside of paddle collision
          this.ball.circle.pos.y -= (response.overlapV.y + this.ball.ballRadius / 2);

          // adjust velocity based on how far from center of paddle the ball is
          const diff = this.ball.circle.pos.x - (this.paddle.box.pos.x + this.paddle.box.w / 2);
          this.ball.velocity.x += diff * 0.1; // add % of offset value to x velocity
        }

        // check the ball's position against each brick
        for (let x = 0; x < this.brickColumns; x++) {
          for (let y = 0; y < this.brickRows; y++) {
            const brick = this.bricks[x][y];
            const brickCollided = SAT.testPolygonCircle(brick.box.toPolygon(), this.ball.circle);
            if (brickCollided === true) {
              brick.collide();
            }
          }
        }
      },

      draw: function () {
        // clear the canvas
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);

        // draw the paddle and ball
        this.paddle.draw();
        this.ball.draw();

        // draw the bricks
        for (let x = 0; x < this.brickColumns; x++) {
          for (let y = 0; y < this.brickRows; y++) {
            this.bricks[x][y].draw();
          }
        }
      },

      getPixelRatio: function (context) {
        // needed for high-dpi displays
        const backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
      },

      endGame: function (win) {
        // pause game
        clearInterval(this.intervalHandler);
        this.active = false;
        this.menuActive = true;
        this.ball.velocity = new SAT.Vector(0, 0);
      },

      closeGame: function (event) {
        this.$store.commit('REMOVEGAME');
      }

    },

    mounted () {
      // easy refs for canvas and context; have to be registered after mounting and rendering
      this.cvs = this.$refs.breakout;
      this.ctx = this.cvs.getContext('2d');

      // prep for hi-dpi display: double size of canvas, then scale to 50% w/ css
      this.pixelRatio = this.getPixelRatio(this.ctx);
      const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//      const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const h = 400;
      this.cvs.width = w * this.pixelRatio;

      this.cvs.height = h * this.pixelRatio;
      this.width = w; // for the reactive styling
      this.height = h; // for the reactive styling

      this.gameWidth = this.cvs.width >= 960 * this.pixelRatio ? 960 * this.pixelRatio : this.cvs.width;
      this.leftOffset = (this.cvs.width - this.gameWidth) / 2;

      // brick wall settings depend on pixelRatio
      this.brickPadding = 5 * this.pixelRatio;
      this.brickWidth = (this.gameWidth / this.brickColumns) - this.brickPadding;
      this.brickHeight = this.cvs.height * 0.1;

      // setup the ball
      this.ballRadius = 9 * this.pixelRatio;
      this.moveSpeed = 5 * this.pixelRatio;

      // setup the paddle
      this.paddleHeight = this.brickHeight / 3;
      this.paddleWidth = 100 * this.pixelRatio;
      this.paddleX = this.cvs.width / 2 - this.paddleWidth;
      this.paddleY = this.cvs.height - this.paddleHeight;

      // prep events
      this.bindHandler = this.mouseClick.bind(this);

      // load the level
      this.startGame();
    },

    destroyed () {
      // in case we close before endGame, clear all handlers
      if (this.intervalHandler) {
        clearInterval(this.intervalHandler);
      }
      document.removeEventListener('click', this.bindHandler);
    }

  }
</script>


<style scoped lang="scss">
  @import "../assets/_variables.scss";

  .game-wrap {
    overflow: hidden;
    display: block;
  }

  .game-stage {
    background: #eee;
    position: relative;
    z-index: 1;
  }

  .brick {
    background: $brand-primary;
  }

  button {
    background: $brand-primary;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 30px;
    text-align: center;

    &.closeButton {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 9999;
      width: 40px;
      height: 40px;
    }

  }

  .menu {
    background-color: $brand-primary;
    color: white;
    font-family: $font-family-secondary;
    position: absolute;
    z-index: 900;
    width: 400px;
    height: 300px;
    left: 50%;
    margin-left: -200px;
    margin-top: 50px;
    padding: 20px; 
    text-align: center;
    border: 3px solid #eee;

    h1, h2, h3 {
      line-height: 1.2;
      color: white;
      margin: 0;
    }

    button {
      margin: .5em;
      font-size: 1em;
      padding: .25em;
      border: 1px solid white;
    }
  }

</style>
