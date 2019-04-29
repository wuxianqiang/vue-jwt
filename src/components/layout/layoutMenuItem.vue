<template>
  <el-submenu :index="data.path">
    <template slot="title">
      <i :class="data.icon"></i>
      {{ data.name }}
    </template>
    <template v-for="c in data.children">
      <ReSubMenu :key="c.auth" v-if="c.children" :data="c"></ReSubMenu>
      <el-menu-item :index="c.path" v-else :key="c.auth">
        <i :class="c.icon"></i>
        {{ c.name }}
      </el-menu-item>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'ReSubMenu',
  props:{
    data:{
      type: Object,
      default: () => ({})
    }
  }
}
</script>
