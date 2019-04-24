<template>
  <div>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="href" ></use>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    }
  },

  created() {
    console.log(this.href)
  }
}
</script>

<style lang="less" scoped>
  .icon {
    width: 30px;
    height: 30px;
    fill: #8d8ca0;
  }
</style>