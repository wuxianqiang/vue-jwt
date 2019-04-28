<template>
  <div class="slider">
    <div :style="wrapperWidth" class="slider-wrapper" ref="slider">
      <slot>
        <div :style="itemWidth" class="slider-item" style="background: red">
          1
        </div>
        <div :style="itemWidth" class="slider-item" style="background: pink">
          2
        </div>
        <div :style="itemWidth" class="slider-item" style="background: green">
          3
        </div>
        <div :style="itemWidth" class="slider-item" style="background: red">
          1
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 520
    },
    list: {
      type: Array,
      default: () => ([1,2,3])
    }
  },

  data () {
    return {
      page: 0
    }
  },

  computed: {
    wrapperWidth () {
      return {width: `${(this.list.length + 1) * this.width}px`}
    },
    itemWidth () {
      return {width: `${this.width}px`}
    }
  },

  mounted () {
    setTimeout(() => {
      window.requestAnimationFrame(this.moveSlider);
    }, 3000);
  },

  methods: {
    moveSlider () {
      let slider = this.$refs.slider
      if (this.page > this.list.length - 1) {
        slider.style.transition = `all 0s`
        slider.style.transform = `translate3d(0,0,0)`
        this.page = 0
        setTimeout(() => {
          this.sliderAnimation()
        }, 20);
        return
      }
      this.sliderAnimation()
    },
    sliderAnimation () {
      this.page += 1
      let slider = this.$refs.slider
      slider.style.transition = `all 0.5s`
      slider.style.transform = `translate3d(${-520 * this.page}px,0,0)`
      setTimeout(() => {
        window.requestAnimationFrame(this.moveSlider);
      }, 3000);
    }
  }
}
</script>


<style lang="less" scoped>
.slider {
  display: inline-block;
  width: 520px;
  height: 280px;
  border:  1px solid red;
  overflow: hidden;
  &-wrapper {
    height: 100%;
  }
  &-item {
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
  }
}
</style>
