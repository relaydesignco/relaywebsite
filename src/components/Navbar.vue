<template>
  <div class="navbar" v-on:mouseover="active=true" v-on:mouseout="endNav">
    <ul id="navlist" ref="navlist">
      <li v-for="link in links" v-on:mouseover="mouseover" v-bind:class="{ active: link.active }">
        <a :href="link.url">{{link.title}}</a>
      </li>
    </ul>
    <transition v-on:enter="enter">
      <span id="bar" ref="bar" v-show="active"></span>
    </transition>
  </div>
</template>

<script>
import Velocity from 'velocity-animate';

export default {
  name: 'navbar',
  data () {
    return {
      active: false,
      activeLinkIndex: NaN,
      links: [
        { title:'projects', url:'http://google.com', active: false },
        { title:'services', url:'http://google.com', active: false },
        { title:'company', url:'http://google.com', active: false },
        { title:'contact', url:'http://google.com', active: false }
      ],
      barLeft: 0,
      animQueue: "custom"
    }
  },
  methods: {
    endNav: function(e) {
      // turn off bar, reset inactive state for all links
      this.active=false;
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
          this.activeLinkIndex = i;
        }
      }
    },
    enter: function (el, done) {
      // on entering the transition, left the left position of the bar
      // and queue its animation (use queue to prevent stutter)
      if (this.activeLinkIndex != NaN) {
        let leftPos = this.activeLinkIndex * 25;
        Velocity(el, { left: leftPos + '%' }, { queue: this.animQueue, complete:done });
        Velocity.Utilities.dequeue(el, this.animQueue);
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">

$brand-primary: #0A9EE7;
$nav-color: #7C7C7C;

.navbar {
    display: block;
    position: relative;
    max-width: 400px;
    margin: 1em auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  width: 25%;
  text-align: left;
  padding: 0;
  margin: 0;

  a {
    display: block;
    text-decoration: none;
    color: $nav-color;
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    padding: 20px 0;

    &:hover {
      color: $brand-primary;
    }

  }
}

#bar {
  width: 20px;
  height: 3px;
  background: $brand-primary;
  position: absolute;
  bottom: 0;
  left: 0;
}

</style>
