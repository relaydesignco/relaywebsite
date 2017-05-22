<template>
  <div class="site-header" v-on:mouseover="active=true" v-on:mouseout="endNav">
		<header>
			<img src="/static/logo.svg" class="logo" alt="Relay Design Co." />
		</header>
		<div class="navbar">
      <button class="toggle">-</button>
			<ul id="navlist" ref="navlist">
				<li v-for="link in links" v-on:mouseover="mouseover" v-bind:class="{ active: link.active }">
					<router-link :to="{ path: link.url }">{{link.title}}</router-link>
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
    	  links: [
    			{ title:'Home', url:'/', active: false },
          { title:'Projects', url:'/projects', active: false },
          { title:'Services', url:'/services', active: false },
    			{ title:'Company', url:'/company', active: false },
    			{ title:'Contact', url:'/contact', active: false }
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
    	}
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

    // @media only screen and (min-width: $screen-md-min) {
    //   width: 160px;
    // }
  }

  // .Home .logo {
  //     @media only screen and (min-width: $screen-sm-min) {
  //       margin-top: 11em;
  //       margin-bottom: 1.6em;
  //       width: 180px;
  //     }
  // }

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
    width: 50px;
    height: 50px;
    color: white;
    background-color: $brand-primary;
    border: 0;

    &:after {
      content: '';
      position: absolute;
      top: 22px;
      left: 6px;
      width: 38px;
      height: 6px;
      background-color: white;
    }

    @media only screen and (min-width: $screen-md-min) {
      display: none;
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
