<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header__logo">
        Hello!
      </div>
      <div class="home-header__nav">
        <icon href="#iconxitongguanlitianchong"></icon>
      </div>
    </div>
    <div class="home-container">
      <div class="home-container__menu">
        <div class="home-container__info">
          <div class="home-container__user">
            <img src="./avatar.jpg" alt="" width="70" height="70" class="home-container__user--img">
            <el-dropdown trigger="click" class="home-container__user--name">
              <span class="el-dropdown-link">
                Admin<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-circle-close-outline">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="home-container__icon">
            <icon href="#iconyinzhang" width="40" height="40"></icon>
            <icon href="#iconfangke" width="40" height="40"></icon>
            <icon href="#iconfaxian" width="40" height="40"></icon>
            <icon href="#icontupian" width="40" height="40"></icon>
          </div>
        </div>
        <div>
          <layout-menu></layout-menu>
        </div>
      </div>
      <div class="home-container__content" id="content">
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
import Icon from '@/components/icon/icon'

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
      padding: 30px;
      box-sizing: border-box;
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

    &__user {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &--img {
        border-radius: 50%;
      }
      &--name {
        color: #eceef2;
      }
      .el-dropdown {
        font-size: 18px;
      }
    }

    &__icon {
      margin-top: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>

<style lang="less">
.el-dropdown-menu {
  background-color: #2c2f43 !important;
  border-color: #2c2f43 !important;
}

.popper__arrow::after {
  border-color: #2c2f43 !important;
}

.el-dropdown-menu__item:hover {
  background-color: #232638 !important;
  color: #fff !important;
}

</style>
