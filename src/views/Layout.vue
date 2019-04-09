<template>
  <div class="home">
    <el-menu
      :router="true"
      mode="horizontal"
      :default-active="$route.path">
      <template v-for="m in menuList">
        <template v-if="m.children">
          <template v-for="item in m.children">
            <template v-if="item.children">
              <ReSubMenu :data="item" :key="item.auth"></ReSubMenu>
            </template>
            <template v-else>
              <el-menu-item :index="item.path" :key="item.auth">
                {{ item.name }}
              </el-menu-item>
            </template>
          </template>
        </template>
        <el-menu-item :index="m.path" :key="m.auth" v-else>
          {{ m.name }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import ReSubMenu from './ReSubmenu'
import { mapState } from 'vuex';
export default {
  components: {
    ReSubMenu
  },
  computed: {
    ...mapState(['menuList'])
  },
  created () {
    console.log(this.$route.path)
  }
}
</script>
