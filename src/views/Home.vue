<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/login">登录</router-link> |
      <router-link to="/profile">我的</router-link>
      <router-view/>
    </div>
    首页
  </div>
</template>

<script>
// @ is an alias to /src
import { getUser } from '../api/user.js'

export default {
  name: 'home',
  created () {
    this.$socket.init()
  },
  destroyed () {
    console.log('销毁组件')
    this.$socket.disconnect()
  },
  methods: {
    async _getUser () {
      let res = await getUser();
      console.log(res);
    }
  }
}
</script>
