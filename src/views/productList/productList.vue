<template>
  <div>
    <slider :list="list" :width="490" :height="200" :hasDot="false">
      <!-- 最外层的元素必须设置固定的宽高，这里设置的宽高必须作为slide的属性输入 -->
      <div v-for="(item, index) in list" :key="index" class="slie-container">
        <img :src="item.img" alt="logo" width="240" height="182">
        <img :src="item.img2" alt="logo" width="240" height="182">
      </div>
      <!-- 需要多添加第一张才能无缝轮播 -->
      <div class="slie-container">
        <img :src="list[0].img" alt="logo" width="240" height="182">
        <img :src="list[0].img2" alt="logo" width="240" height="182">
      </div>
    </slider>

    <slider :list="list" :width="520" :height="280">
      <div v-for="(item, index) in list" :key="index" class="slide-page">
        <img :src="item.img3" alt="logo" width="520" height="280">
      </div>
      <div class="slide-page">
        <img :src="list[0].img3" alt="logo" width="520" height="280">
      </div>
    </slider>

    <slider :list="list" :width="520" :height="280">
    </slider>
  </div>
</template>

<script>
import Slider from '@/components/slider/slider'

export default {
  components: {
    Slider
  },

  data () {
    return {
      list: [
        {
          img: '//img.alicdn.com/tps/i4/TB1PbnMGMHqK1RjSZFgSuu7JXXa.jpg_240x240q90.jpg',
          img2: '//img.alicdn.com/tps/i4/TB1a.TvSwTqK1RjSZPhSutfOFXa.jpg_240x240q90.jpg',
          img3: 'https://img.alicdn.com/simba/img/TB13_CcP7voK1RjSZFwSuwiCFXa.jpg'
        },
        {
          img: '//img.alicdn.com/tps/i4/TB1N2B5SmzqK1RjSZFpSuukSXXa.jpg_240x240q90.jpg',
          img2: 'https://aecpm.alicdn.com/simba/img/TB1X6uHLVXXXXcCXVXXSutbFXXX.jpg',
          img3: 'https://img.alicdn.com/simba/img/TB16UXzMY2pK1RjSZFsSuuNlXXa.jpg'
        },
        {
          img: '//img.alicdn.com/tps/i4/TB1DHBYLFYqK1RjSZLeSuvXppXa.jpg_240x240q90.jpg',
          img2: '//img.alicdn.com/tps/i4/TB1gyDdOgHqK1RjSZFkSut.WFXa.jpg_240x240q90.jpg',
          img3: '//img.alicdn.com/tfs/TB1pV79SyLaK1RjSZFxXXamPFXa-520-280.jpg_q90_.webp'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.slie-container {
  width: 490px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
}
.slide-page {
  width: 520px;
  height: 280px;
}
</style>
