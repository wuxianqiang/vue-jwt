<template>
  <div class="copy-input">
    <input
      type="text"
      class="copy-input__text"
      ref="input"
      readonly
      v-model="link">
      <i class="el-icon-document copy-input__icon" @click="handleClick" @mouseleave="handleLeave"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '点击复制',
      link: 'https://github.com/wuxianqiang/vue-jwt.git'
    }
  },
  methods: {
    handleClick () {
      this.$refs.input.select()
      document.execCommand('copy')
      this.$prompt.success('复制成功 ！')
    },
    handleLeave () {
    }
  }
}
</script>

<style lang="less" scoped>
.copy-input {
  display: inline-block;
  border: 1px solid #d1d5da;
  border-radius: 5px;
  width: 318px;
  height: 28px;
  display: flex;
  &__text {
    flex: 1;
    height: 100%;
    outline: none;
    border: none;
    background: none;
    padding: 0 5px;
    border-right: 1px solid #d1d5da;
  }
  &__icon {
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
</style>
