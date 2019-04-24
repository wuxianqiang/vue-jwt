<template>
  <div class="home">
    <div class="home-header">
      <!-- <layout-bread></layout-bread>
      <layout-menu></layout-menu> -->
      <div class="home-header__logo">
        Futani
      </div>
      <div class="home-header__nav">
        <icon href="#iconxitongguanlitianchong"></icon>
      </div>
    </div>
    <div class="home-container">
      <div class="home-container__menu">
        <div class="home-container__info">
          
        </div>
        <div>
          <layout-menu></layout-menu>
        </div>
      </div>
      <div class="home-container__content">
        <layout-bread></layout-bread>
        <div class="home-container__view">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getUser } from '../api/user.js'
import LayoutMenu from './layoutMenu'
import LayoutBread from './layoutBread'
import Icon from '@/components/Icon/Icon'

export default {
  components: {
    LayoutMenu,
    LayoutBread,
    Icon
  },
  name: 'home',
  created () {
    // this.$socket.init()
  },
  destroyed () {
    // this.$socket.disconnect()
  },
  methods: {
    // async _getUser () {
    //   let res = await getUser();
    //   console.log(res);
    // }
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

  &-header {
    height: 80px;
    flex: 0 0 80px;
    background: #2c2f43;
    display: flex;

    &__logo {
      width: 300px;
      height: 100%;
      flex: 0 0 300px;
      background: #232638;
      color: #fff;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      text-align: center;
      line-height: 80px;
    }

    &__nav {
      padding: 0 40px;
      display: flex;
      align-items: center;
    }
  }

  &-container {
    flex: 1;
    overflow: auto;
    background: #f5f5f7;
    display: flex;

    &__menu {
      width: 300px;
      background: #2c2f43;
    }

    &__info {
      width: 300px;
      height: 210px;
      background: #3f435a;
    }

    &__content {
      background: #eceef2;
      overflow: auto;
      flex: 1;
    }

    &__view {
      padding: 40px 30px;
    }
  }
}
</style>