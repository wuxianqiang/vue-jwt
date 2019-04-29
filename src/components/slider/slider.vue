<template>
  <div
    class="slider"
    :style="sliderSize"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <div
      :style="wrapperWidth"
      class="slider-wrapper"
      ref="slider">
      <slot>
        <div
          :style="itemWidth"
          :key="index"
          v-for="(item, index) in list"
          class="slider-item">
          <a href="javascript:;">
            <img :src="item.img" alt="logo" :width="width" :height="height">
          </a>
        </div>
        <div :style="itemWidth" class="slider-item">
          <a href="javascript:;">
            <img :src="list[0].img" alt="logo" :width="width" :height="height">
          </a>
        </div>
      </slot>
    </div>
    <ul class="slider-dot" v-if="hasDot">
      <li
        :key="index"
        v-for="(item, index) in list"
        class="slider-dot__item">
        <a
          :class="{'slider-dot__active': activeIndex === index}"
          href="javascript:;"
          class="slider-dot__link"
          @click="handleClickDot(index)">
        </a>
      </li>
    </ul>
    <template v-if="isActive">
      <a
        href="javascript:;"
        class="slider-arrow__item slider-arrow__left"
        @click="handleClickLeft">
        <i class="el-icon-arrow-left slider-arrow__icon"></i>
      </a>
      <a
        href="javascript:;"
        class="slider-arrow__item slider-arrow__right"
        @click="handleClickRight">
        <i class="el-icon-arrow-right slider-arrow__icon"></i>
      </a>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    // 宽度
    width: {
      type: Number,
      default: 520
    },
    // 高度
    height: {
      type: Number,
      default: 280
    },
    // 焦点
    hasDot: {
      type: Boolean,
      default: true
    },
    // 间隔
    timeout: {
      type: Number,
      default: 4000
    },
    // 列表
    list: {
      type: Array,
      default () {
        return [
          {
            img: '//img.alicdn.com/tps/i4/TB1PbnMGMHqK1RjSZFgSuu7JXXa.jpg_240x240q90.jpg'
          },
          {
            img: '//img.alicdn.com/tps/i4/TB1N2B5SmzqK1RjSZFpSuukSXXa.jpg_240x240q90.jpg'
          },
          {
            img: '//img.alicdn.com/tps/i4/TB1DHBYLFYqK1RjSZLeSuvXppXa.jpg_240x240q90.jpg'
          }
        ]
      }
    },
    // 自动
    autoPlay: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      page: 0,
      isActive: false
    }
  },

  computed: {
    sliderSize () {
      return {width: `${this.width}px`, height: `${this.height}px`}
    },
    wrapperWidth () {
      return {width: `${(this.list.length + 1) * this.width}px`}
    },
    itemWidth () {
      return {width: `${this.width}px`}
    },
    activeIndex () {
      return this.page === this.list.length ? 0 : this.page
    }
  },

  mounted () {
    this.playSlider()
  },

  beforeDestroy () {
    this.puseSlider()
  },

  methods: {
    playSlider () {
      this.timerOne = setTimeout(() => {
        window.requestAnimationFrame(this.moveSlider)
      }, this.timeout)
    },
    puseSlider () {
      clearTimeout(this.timerOne)
      clearTimeout(this.timerTwo)
      clearTimeout(this.timerThree)
    },
    moveSlider () {
      let slider = this.$refs.slider
      if (this.page === this.list.length) {
        if (!slider) return
        slider.style.transition = `all 0s`
        slider.style.transform = `translate3d(0,0,0)`
        this.page = 0
        this.timerTwo = setTimeout(() => {
          this.sliderAnimation()
        }, 20)
        return
      }
      this.sliderAnimation()
    },
    sliderAnimation () {
      this.page += 1
      this._animateFn()
      if (this.autoPlay) {
        this.timerThree = setTimeout(() => {
          window.requestAnimationFrame(this.moveSlider)
        }, this.timeout)
      }
    },
    handleMouseEnter () {
      this.isActive = true
      this.puseSlider()
    },
    handleMouseLeave () {
      this.isActive = false
      this.puseSlider()
      this.playSlider()
    },
    handleClickDot (index) {
      this.puseSlider()
      if (this.activeIndex !== index) {
        this.page = index
        let slider = this.$refs.slider
        this._animateFn()
      }
    },
    handleClickRight () {
      this.puseSlider()
      let slider = this.$refs.slider
      if (this.page === this.list.length) {
        slider.style.transition = `all 0s`
        slider.style.transform = `translate3d(0,0,0)`
        this.page = 0
        this.timerTwo = setTimeout(() => {
          this.page += 1
          this._animateFn()
        }, 20)
        return
      }
      this.page += 1
      this._animateFn()
    },
    handleClickLeft () {
      this.puseSlider()
      let slider = this.$refs.slider
      if (this.page === 0) {
        slider.style.transition = `all 0s`
        slider.style.transform = `translate3d(${-this.list.length * this.width}px,0,0)`
        this.page = this.list.length
        this.timerTwo = setTimeout(() => {
          this.page -= 1
          this._animateFn()
        }, 20)
        return
      }
      this.page -= 1
      this._animateFn()
    },
    _animateFn () {
      let slider = this.$refs.slider
      if (slider) {
        slider.style.transition = `all 0.5s`
        slider.style.transform = `translate3d(${-this.width * this.page}px,0,0)`
      }
    }
  }
}
</script>


<style lang="less" scoped>
.slider {
  display: inline-block;
  width: 520px;
  height: 280px;
  overflow: hidden;
  position: relative;
  &-wrapper {
    height: 100%;
    display: flex;
  }
  &-item {
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
  }
  &-arrow {
    &__left {
      left: 0;
    }
    &__item {
      position: absolute;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      width: 20px;
      height: 30px;
      background: rgba(0, 0, 0, .3);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__right {
      right: 0;
    }
    &__icon {
      font-size: 18px;
      color: #fff;
    }
  }
  &-dot {
    position: absolute;
    left: 50%;
    bottom: 15px;
    display: flex;
    transform: translate3d(-50%, 0, 0);
    background: rgba(255, 255, 255, .3);
    border-radius: 10px;
    

    &__item {
      margin: 5px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #fff;
    }

    &__link {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    &__active {
      background: #FF5000;
    }
  }
}
</style>
