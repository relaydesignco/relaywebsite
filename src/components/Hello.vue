<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential <span>Links</span></h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

    <ul>
      <li v-for="user in users">
        {{user.firstname}}
      </li>
    </ul>

    <input type="text" v-model="input_val">
    <span v-text="input_val"></span>
    <button class="btn btn-primary" v-on:click="counter++">You've clicked this button {{counter}} times!</button>

  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: [
      { firstname:'jane', lastname:'harris' },
      { firstname:'bob', lastname:'harris' },
      { firstname:'bill', lastname:'bobert' }
      ],
      input_val: 'hey!',
      counter:0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
  span {
    font-weight: bold;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
