<template>
  <div class="menu">
    <el-menu
      :router="true"
      :default-active="$route.path"
      background-color="#2c2f43"
      text-color="#b5b4c2"
      active-text-color="#fff">
      <template v-for="m in menuList">
        <template v-if="m.children">
          <template v-for="item in m.children">
            <template v-if="item.children">
              <ReSubMenu :data="item" :key="item.auth"></ReSubMenu>
            </template>
            <template v-else>
              <el-menu-item :index="item.path" :key="item.auth">
                <i :class="item.icon"></i>
                {{ item.name }}
              </el-menu-item>
            </template>
          </template>
        </template>
        <el-menu-item :index="m.path" :key="m.auth" v-else>
          <i :class="m.icon"></i>
          {{ m.name }}
        </el-menu-item>
      </template>
    </el-menu>
    <div class="red">ss</div>
  </div>
</template>

<script>
import ReSubMenu from './layoutMenuItem'
import { mapState } from 'vuex';
export default {
  components: {
    ReSubMenu
  },
  computed: {
    ...mapState(['menuList'])
  },
  created () {
  }
}
</script>

<style lang="less">
  .el-menu-item.is-active {
    background-color: #232638 !important;
  }
  .menu-icon {
    width: 24px;
    height: 18px;
    color: #fff !important;
    font-size: 18px;
  }
</style>