<template>
  <div>
    <p class="about-title" @click="handleClick">仓库地址：</p>
    <copy-input></copy-input>
  </div>
</template>

<script>
import CopyInput from '@/components/copyInput/copyInput'

export default {
  components: {
    CopyInput
  },
  methods: {
    handleClick () {
    }
  }
}
</script>

<style lang="less" scoped>
.about-title {
  line-height: 36px;
  font-size: 18px;
}
</style>
