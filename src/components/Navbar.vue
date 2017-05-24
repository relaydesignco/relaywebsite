<template>
  <div class="site-header">
		<header>
			<router-link to="/"><img src="/static/logo.svg" class="logo" alt="Relay Design Co." /></router-link>
		</header>
		<div class="navbar" v-bind:class="{ 'flyout': flyout, 'scrolled': scrolled }"  v-on:mouseover="active=true" v-on:mouseout="endNav">
      <button type="button" class="toggle tcon tcon-plus tcon-plus--minus" v-bind:class="{ 'tcon-transform': flyout }" v-on:click="toggleFlyout" aria-label="add item">
        <span class="tcon-visuallyhidden">add item</span>
      </button>
			<ul id="navlist" ref="navlist">
				<li v-for="link in links" v-on:mouseover="mouseover" v-bind:class="{ active: link.active }">
					<router-link :to="{ path: link.url }" v-on:click.native="flyout = false">{{link.title}}</router-link>
				</li>
			</ul>
			<transition v-on:enter="enter">
				<span id="bar" ref="bar" v-show="active"></span>
			</transition>
			</div>
  </div>
</template>


<script>
  import Velocity from 'velocity-animate';

  export default {
    name: 'navbar',
    data () {
    	return {
    	  active: false,
        flyout: false,
        scrolled: false,
    	  links: [
    			{ title:'Home', url:'/', active: false },
          { title:'Projects', url:'/projects', active: false },
          { title:'Services', url:'/services', active: false },
    			{ title:'Company', url:'/company', active: false },
    			{ title:'Contact', url:'/contact', active: false },
    	  ],
    	  animQueue: "custom"
    	}
    },
    methods: {
    	endNav: function(e) {
    	  // turn off bar, reset inactive state for all links
    	  this.active = false;
    	  for (var i = 0; i < this.links.length; i++) {
      		this.links[i].active = false;
    	  };
    	},
    	mouseover: function(e) {
    	  // find which link in the list we're hovering over,
    	  // then set as active
    	  for (var i = 0; i < this.links.length; i++) {
      		if (this.links[i].title == e.target.innerHTML) {
      		  this.links[i].active = true;
      		}
    	  }
    	},
    	enter: function (el, done) {
    	  // on entering the transition, left the left position of the bar
    	  // and queue its animation (use queue to prevent stutter)

        let activeLink = this.$el.querySelector('.active') || this.$el.querySelector('.navbar li:first-child');

    	  if (activeLink) {
      		let leftPos = activeLink.offsetLeft + 16;
      		Velocity(el, { left: leftPos + 'px' }, { queue: this.animQueue, complete:done });
      		Velocity.Utilities.dequeue(el, this.animQueue);
    	  };
      },
      toggleFlyout: function (e) {
        this.flyout = !this.flyout;
      },
      closeFlyout: function (e) {
        console.log('hello');
        this.flyout = false;
      },
      handleScroll () {
        this.scrolled = window.scrollY > 50;
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style lang="scss">

  @import "../assets/_variables.scss";

  .logo {
    margin: 2em 0 0;
    width: 140px;
    height: auto;
  }

  .site-header {
  	position: relative;
    width: 85%;
  	max-width: $page-max-width;
  	margin: 0 auto;

    @media only screen and (min-width: $screen-md-min) {
      width: 100%;
    }
  }

  .toggle {
    position: fixed;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    color: white;
    background-color: $brand-primary;
    border: 0;
    z-index: 9100;
    transition: .3s;

    @media only screen and (min-width: $screen-md-min) {
      right: -100%;

      .scrolled & {
        right: 0;
      }
    }
  }

  .tcon {
    appearance: none;
    border: none;
    cursor: pointer;
    transition: .3s;
    user-select: none;
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;

    > * {
      display: block;
    }

    &:hover,
    &:focus {
      outline: none; // see issue #36 https://github.com/grayghostvisuals/transformicons/issues/36
    }
    &::-moz-focus-inner {
      border: 0;
    }
  }

  .tcon-plus {

    &::before,
    &::after {
      content: "";
      border-radius: 1px;
      display: block;
      width: 60%;
      height: 14%;
      position: absolute;
      top: 43%;
      left: 20%;
      transition: .3s;
      background: white;
    }

    &:after {
      // transform: rotate(90deg);
    }
  }

  .tcon-plus--minus {
    &.tcon-transform {
      &::before {
        transform: rotate(45deg) translate(0, 0);
      }

      &::after {
        transform: rotate(135deg) translate(0, 0);
      }
    }
  }

  .tcon-visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;

    &:active,
    &:focus {
      clip: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      position: static;
      width: auto;
    }
  }

  .navbar {

  	@media only screen and (min-width: $screen-md-min) {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
  	}

  	ul {
      display: none;
      margin: 0;
      padding: 0;
      list-style: none;

  		@media only screen and (min-width: $screen-md-min) {
        display: block;
        text-align: right;

        .scrolled & {
          display: none;
        }
  		}
  	}

  	li {
  		display: inline-block;
  		text-align: left;
  		padding: 0 16px;
  		margin: 0;
  		letter-spacing: .05em;

  		@media only screen and (min-width: $screen-md-min) {
    		font-size: 14px;
  		}

  		a {
    		display: inline-block;
    		text-decoration: none;
    		font-weight: bold;
    		color: $text-color;
    		transition: color .2s;
    		padding: 30px 0;

    		&:hover {
    			color: $brand-primary;
    		}
  		}
  	}

    &.flyout {

      ul {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        padding: 2em;
        background: $brand-primary;
        text-align: left;
        z-index: 9000;

        @media only screen and (min-width: $screen-md-min) {
          width: 50%;
        }

        li {
          display: block;

          a {
            padding: .5em 0;
            font-size: 2.5em;
            color: white;
            font-weight: bold;

            @media only screen and (min-width: $screen-sm-min) {
              padding: .5em 1em;
              font-size: 3em;
            }
          }
        }
      }
    }

  	#bar {
      display: none;

      @media only screen and (min-width: $screen-md-min) {
        display: block;
        width: 20px;
        height: 3px;
        background: $brand-primary;
        position: absolute;
        bottom: 12px;
        left: 0;
      }
  	}
  }

</style>
