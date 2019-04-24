<template>
  <div class="statistics">
    <div class="statistics-notice">
      <h1 class="statistics-title">JavaScript Tutorials and Insights</h1>
      <p>Learn JavaScript with insight and tutorials from top JavaScript experts, and keep up with the latest trends and developments in the JavaScript community</p>
    </div>
    <div class="statistics-wrapper">
      <h1 class="statistics-title">统计报表</h1>
      <statistics></statistics>
    </div>
    <div class="statistics-article">
      <div class="statistics-wrapper statistics-left">
        <h2 class="statistics-title">热门话题</h2>
        <ul>
          <li
            class="statistics-list"
            v-for="(item, index) in list"
            :key="index"
            :class="{'statistics-list__active': index !== list.length - 1}">
            <div class="statistics-list__img">
              <img :src="item.src" alt="react" width="40" height="40">
            </div>
            <div>
              <h3 class="statistics-list__title">{{ item.title }}</h3>
              <p class="statistics-list__text">{{ item.text }}</p>
              <p>{{ item.content }}</p>
            </div>
            <div class="statistics-list__star">
              128K
            </div>
          </li>
        </ul>
      </div>
      <div class="statistics-wrapper statistics-right">
        <h2 class="statistics-title">热门话题</h2>
        <ul>
          <li
            class="statistics-list"
            v-for="(item, index) in list"
            :key="index"
            :class="{'statistics-list__active': index !== list.length - 1}">
            <div class="statistics-list__img">
              <img :src="item.src" alt="react" width="40" height="40">
            </div>
            <div>
              <h3 class="statistics-list__title">{{ item.title }}</h3>
              <p class="statistics-list__text">{{ item.text }}</p>
              <p>{{ item.content }}</p>
            </div>
            <div>
              128K
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Statistics from '@/components/statistics/statistics'

export default {
  components: {
    Statistics
  },

  data () {
    return {}
  },

  created () {
    this.list = [
      {
        src: 'https://lite-cdn.codementor.io/static/images/categories/lang_react_color.png',
        title: 'React',
        text: '用于构建用户界面的 JavaScript 库',
        content: 'React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图。'
      },
      {
        src: 'https://lite-cdn.codementor.io/static/images/categories/lang_angular_color.png',
        title: 'Angular',
        text: '用于构建用户界面的 JavaScript 库',
        content: 'React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图。'
      },
      {
        src: 'https://lite-cdn.codementor.io/static/images/categories/lang_js_color@2x.png',
        title: 'JavaScript',
        text: '用于构建用户界面的 JavaScript 库',
        content: 'React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图。'
      },
      {
        src: 'https://lite-cdn.codementor.io/static/images/categories/lang_nodejs_color.png',
        title: 'Node.js',
        text: '用于构建用户界面的 JavaScript 库',
        content: 'React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图。'
      }
    ]
  }
}
</script>

<style lang="less" scoped>
  .statistics {
    &-notice {
      padding: 20px;
      background: #fff;
      border-radius: 5px;
      font-size: 20px;
      margin-bottom: 30px;
    }

    &-title {
      font-size: 36px;
      margin-bottom: 20px;
    }

    &-wrapper {
      padding: 20px;
      background: #fff;
      border-radius: 5px;
      margin-bottom: 30px;
    }

    &-list {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__img {
        width: 84px;
        height: 84px;
        flex: 0 0 84px;
        margin-right: 10px;
        background: #eee;
        display: flex;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
      }

      &__active {
        margin-bottom: 15px;
      }

      &__title {
        font-size: 18px;
        line-height: 36px;
      }

      &__text {
        line-height: 24px;
        font-size: 14px;
      }

      &__star {
        width: 90px;
        flex: 0 0 90px;
        margin-left: 10px;
      }
    }

    &-article {
      width: 100%;
      display: flex;
    }

    &-left {
      margin-right: 18px;
      flex: 1;
    }

    &-right {
      margin-left: 18px;
      flex: 1;
    }
  }
</style>