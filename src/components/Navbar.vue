<template>
  <div class="navbar">
    <ul>
      <li v-for="link in links" v-on:mouseover="mouseover" v-on:mouseout="mouseout" v-bind:class="{ active: link.active }">
        <a :href="link.url">{{link.title}}</a>
      </li>
    </ul>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
    >
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
      barLeft: 10,
    }
  },
  methods: {
    mouseover: function(e) {
      // console.log(this);
      // document.querySelectorAll('li:hover').class = "active";
      // console.log(document.querySelectorAll('li:hover'));
      // console.log(this.$el);
      // this.$el.class = "active";
      // this.active = true;
      // e.target.active = true;
      // console.log(e.target.innerHTML);
      this.active = true;
      for (var i = 0; i < this.links.length; i++) {
        if (this.links[i].title == e.target.innerHTML) {
          this.links[i].active = true;
          this.activeLinkIndex = i;
        } else {
          this.links[i].active = false;
        }
      }
    },
    mouseout: function() {
      this.active = false;
      this.activeLink = '';
      for (var i = 0; i < this.links.length; i++) {
        this.links[i].active = false;
      }
      // this.activeLinkIndex = NaN;
    },
    beforeEnter: function (el) {
      // el.style.left = 0;
      // ...
    },
    // the done callback is optional when
    // used in combination with CSS
    enter: function (el, done) {
      // ...
      console.log("Entering");
      // let mouseX = e.clientX;
      // let barX = this.$refs.bar.getBoundingClientRect().left;
      // let minDistance = 1;
      // let distance = Math.round(barX - mouseX);
      // console.log(distance);
      // if (distance > minDistance) {
      //   this.barLeft -= 10%;
      // } else if (distance < -minDistance) {
      //   this.barLeft += 10%;
      // }
      if (this.activeLinkIndex != NaN) {
        let leftPos = this.activeLinkIndex * 25;
        Velocity(el, { left: leftPos + '%' }, { complete: done })
      }
    },
    afterEnter: function (el) {
      // ...
    },
    enterCancelled: function (el) {
      // ...
    },
    // --------
    // LEAVING
    // --------
    beforeLeave: function (el) {
      // ...
    },
    // the done callback is optional when
    // used in combination with CSS
    leave: function (el, done) {
      // ...
      console.log("Leaving");
      // Velocity(el, { left: 0 }, { complete: done })
    },
    afterLeave: function (el) {
      // ...
    },
    // leaveCancelled only available with v-show
    leaveCancelled: function (el) {
      // ...
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">

.navbar {
    position: relative;
    max-width: 400px;
    margin: 1em auto;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content:space-around;
}

li {
  a {
    padding: 10px;
    text-decoration: none;
  }
}

#bar {
  width: 20px;
  height: 4px;
  background: blue;
  position: absolute;
  bottom: 0;
  left: 0;
}

// /* Enter and leave animations can use different */
// /* durations and timing functions.              */
// .bar-slide-enter-active {
//   transition: all .3s ease;
// }
// .bar-slide-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .bar-slide-enter, .bar-slide-leave-to {
//   transform: translateX(10px);
//   opacity: 0;
// }

</style>
