<template>
  <svg :style="cls" aria-hidden="true">
    <use :xlink:href="href" ></use>
  </svg>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '30'
    },
    height: {
      type: String,
      default: '30'
    },
    fill: {
      type: String,
      default: '#8d8ca0'
    }
  },

  computed: {
    cls () {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        fill: this.fill
      }
    }
  }
}
</script>
