<template>
  <div class="home">
    <layout></layout>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import { getUser } from '../api/user.js'
import Layout from './Layout'

export default {
  components: {
    Layout
  },
  name: 'home',
  created () {
    // this.$socket.init()
  },
  destroyed () {
    // this.$socket.disconnect()
  },
  methods: {
    async _getUser () {
      let res = await getUser();
      console.log(res);
    }
  }
}
</script>
