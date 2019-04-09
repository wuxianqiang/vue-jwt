<template>
  <el-submenu :index="data.path">
    <template slot="title">
        {{ data.name }}
    </template>
    <template v-for="c in data.children">
      <ReSubMenu :key="c.auth" v-if="c.children" :data="c"></ReSubMenu>
      <el-menu-item :index="c.path" v-else :key="c.auth">
        {{ c.name }}
      </el-menu-item>
    </template>
  </el-submenu>
</template>

<script>
export default {
  props:{
    data:{
      type: Object,
      default: () => ({})
    }
  },
  name: 'ReSubMenu',
  created () {
    // console.log(this.data)
  }
}
</script>
