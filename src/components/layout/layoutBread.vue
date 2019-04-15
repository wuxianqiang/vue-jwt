<template>
  <div class="bread">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="(item, index) in $route.matched">
        <el-breadcrumb-item :to="{ path: item.meta.url || item.path }" :key="index" v-if="item.meta&&item.meta.bread">
          {{ item.meta.bread }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
    <div></div>
  </div>
</template>

<script>
export default {
  created () {
  }
}
</script>

<style lang="less">
.bread {
  background: #0a844b;
  color: #fff;
  padding: 5px;
  .el-breadcrumb__inner {
    color: #fff !important;
    font-size: 12px;
  }
}
</style>
