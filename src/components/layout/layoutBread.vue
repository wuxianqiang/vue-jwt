<template>
  <div class="bread">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="(item, index) in $route.matched">
        <el-breadcrumb-item
          :to="{ path: item.meta.url || item.path }"
          :key="index"
          v-if="item.meta&&item.meta.bread">
          {{ item.meta.bread }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
    <div></div>
  </div>
</template>

<style lang="less" scoped>
.bread {
  padding: 20px 0 0 20px;
}
</style>
