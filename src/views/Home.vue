<template>
  <div class="home">
    <div class="home-header">
      <layout-bread></layout-bread>
      <layout-menu></layout-menu>
    </div>
    <div class="home-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { getUser } from '../api/user.js'
import LayoutMenu from '@/components/layout/layoutMenu'
import LayoutBread from '@/components/layout/layoutBread'

export default {
  components: {
    LayoutMenu,
    LayoutBread
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

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &-container {
    flex: 1;
    overflow: auto;
    background: #f5f5f7;
  }
}
</style>