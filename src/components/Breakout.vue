<template>
  <canvas id="breakout" class="game-stage" width="480" height="320"></canvas>
</template>


<script>
  import Velocity from 'velocity-animate';


  class Brick {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      console.log("Brick! " + x + ", " + y);
      this.draw();
    }

    draw() {
      let el = document.createElement('div');
      el.classList.add('brick');
      document.querySelector('.game-stage').appendChild(el);
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
        bricks: []
    	}
    },
    methods: {
    	startGame: function(e) {
    	  // turn off bar, reset inactive state for all links
    	  this.active = true;
        this.bricks = [];
        for (let x=0; x<this.columns; x++) {
          this.bricks[x] = [];
          for (let y=0; y<this.rows; y++) {
            this.bricks[x][y] = new Brick(x, y, this.brickWidth, this.brickHeight);
          };
        };
        // console.log(this.bricks);
    	}
    },
    created () {
      // window.addEventListener('scroll', this.handleScroll);
      this.startGame();
    },
    destroyed () {
      // window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>


<style scoped lang="scss">

  @import "../assets/_variables.scss";

  .game-stage {
    background: #eee;
    width: 100%;
    height: 500px;
    position: relative;
  }

  .brick { 
    background: $brand-primary;
    height: 4px;
    width: 10px;
  }
  
</style>
