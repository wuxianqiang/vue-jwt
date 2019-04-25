<template>
  <div class="statistics">
    <div class="statistics-notice">
      <h1 class="statistics-title">Vue.js 是什么</h1>
      <p>
        Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
        与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。
        Vue 的核心库只关注视图层，
        不仅易于上手，还便于与第三方库或既有项目整合。
        另一方面，当与现代化的工具链以及各种支持类库结合使用时，
        Vue 也完全能够为复杂的单页应用提供驱动。
      </p>
    </div>
    <div class="statistics-wrapper">
      <iframe
        src="https://npmcharts.com/compare/vue?minimal=true"
        frameborder="0"
        height="425"
        width="100%">
      </iframe>
    </div>
    <div class="statistics-chart">
      <template v-for="(item, index) in list">
        <div class="statistics-analysis" :key="item.id">
          <div class="statistics-analysis__wrapper">
            <svg aria-hidden="true" class="statistics-analysis__icon" :style="{fill: item.fill}">
              <path fill-rule="evenodd" :d="item.path">
              </path>
            </svg>
          </div>
          <div>
            <div>{{ item.title }}</div>
            <div class="statistics-analysis__count">{{ item.count }}</div>
          </div>
        </div>
        <div  :key="index" class="statistics-chart__line" v-if="index < list.length - 1"></div>
      </template>
    </div>
    <div class="statistics-chart">
      <div class="statistics-chart__item">
        <iframe
          src="https://npmcharts.com/compare/react?minimal=true"
          frameborder="0"
          height="400"
          width="100%">
        </iframe>
      </div>
      <div class="statistics-chart__line"></div>
      <div class="statistics-chart__item">
        <iframe
          src="https://npmcharts.com/compare/angular?minimal=true"
          frameborder="0"
          height="400"
          width="100%">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { geStatistics } from '@/api/api'

export default {
  data () {
    return {
      list: []
    }
  },

  created () {
    this._geStatistics()
  },

  methods: {
    async _geStatistics () {
      let { data: { list } } = await geStatistics()
      this.list = list
    }
  }
}
</script>

<style lang="less" scoped>
  .statistics {
    &-notice {
      padding: 20px;
      background: #fff;
      border-radius: 5px;
      font-size: 18px;
      margin-bottom: 30px;
    }

    &-title {
      font-size: 18px;
      margin-bottom: 20px;
      font-weight: 900;
    }

    &-wrapper {
      padding: 20px;
      background: #fff;
      border-radius: 5px;
      margin-bottom: 30px;
    }

    &-analysis {
      flex: 1;
      background: #fff;
      height: 100px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: center;

      &__icon {
        width: 15px;
        height: 16px;
        transform: scale(3.5);
        transform-origin: top left;
      }

      &__wrapper {
        width: 60px;
        height: 60px;
        margin-right: 15px;
      }

      &__count {
        margin-top: 10px;
        font-size: 24px;
        color: #5e5e62;
      }
    }

    &-chart {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__line {
        width: 30px;
        flex: 0 0 30px;
      }

      &__item {
        padding: 20px;
        background: #fff;
        flex: 1;
      }
    }
  }
</style>