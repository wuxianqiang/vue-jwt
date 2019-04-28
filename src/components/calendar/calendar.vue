<template>
  <div class="calendar">
    <h1 class="calendar__notice">1. 日历</h1>
    <div class="calendar__wrapper">
      <div class="calendar__header">
        <span @click="handlePrevMonth">
          <i class="el-icon-arrow-left"></i>
        </span>
        <span class="calendar__title">
          <span class="calendar__title--left">
            {{ currentYear }}年
          </span>
          <span class="calendar__title--right">
            {{ currentMonth }}月
          </span>
        </span>
        <span @click="handleNextMonth">
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
      <div class="calendar__body">
        <ul class="calendar__day">
          <li
            v-for="(item, index) in titleList"
            :key="index"
            class="calendar__day--item">
            {{ item }}
          </li>
        </ul>
        <ul class="calendar__day">
          <li
            v-for="(item, index) in timeList"
            :key="index"
            class="calendar__day--item"
            @click="handleSelectDay(item)">
            {{ item.date }}
          </li>
        </ul>
      </div>
    </div>
    <h1 class="calendar__notice">2. render函数</h1>
    <counter content="通知：明天<中午>在<9层会议室>开会"></counter>
  </div>
</template>

<script>
  import counter from './counter'

  export default {
    components: {
      counter
    },

    props: {
      defaultMonth: { // 默认月份
        type: Number,
        default: new Date().getMonth() + 1
      },

      defaultYear: { // 默认年份
        type: Number,
        default: new Date().getFullYear()
      },

      defalutDate: { // 默认日期
        type: Number,
        default: new Date().getDate()
      }
    },

    data () {
      return {
        currentMonth: this.defaultMonth, // 需要改变月份
        currentYear: this.defaultYear, // 需要改变年份
        selectDate: { // 选择的值
          year: this.defaultYear,
          month: this.defaultMonth,
          date: this.defalutDate
        },
        titleList: ['一', '二', '三', '四', '五', '六', '日']
      }
    },

    computed: {
      timeList () {
        const y = this.currentYear
        const m = this.currentMonth
        // 这个月一共有多少天
        const t = new Date(y, m, 0).getDate()
        // 上一个月的最后一天是星期几
        const w = this.getWeekDay(`${y}/${m}/${t}`)
        const ary = []
        // 日期排版是从星期1开始
        for (let i = 0; i < (t + w); i++) {
          if (i < w) {
            ary.push({ date: '' })
          } else {
            ary.push({ date: i - w + 1 })
          }
        }
        const num = 42 - ary.length
        for (let i = 0; i < num; i++) {
          ary.push({ date: '' })
        }
        return ary
      }
    },

    methods: {
      getWeekDay (time) {
        // 上一个月的最后一天是星期几
        const date = new Date(time)
        date.setDate(0)
        return date.getDay()
      },

      handleSelectDay (value) {
        // 选择日历
        if (value.date) {
          this.selectDate = {
            year: this.currentYear,
            month: this.currentMonth,
            date: value.date
          }
          console.log(this.selectDate)
        }
      },

      handlePrevMonth () {
        // 切换上一月
        if (this.currentMonth === 1) {
          this.currentMonth = 12
          this.currentYear--
        } else {
          this.currentMonth--
        }
      },

      handleNextMonth () {
        // 切换下一月
        if (this.currentMonth === 12) {
          this.currentMonth = 1
          this.currentYear++
        } else {
          this.currentMonth++
        }
      }
    }
  }
</script>

<style scoped  lang="less">
.calendar {
  padding: 50px;
  &__header {
    display: flex;
    flex-direction: row;
    width: 350px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin-bottom: 20px;
  }
  &__day {
    width: 350px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    &--item {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      flex: 0 0 50px;
      font-size: 18px;
      border-bottom: 1px solid #999;
    }
  }

  &__title {
    padding: 10px;
    &--left {
      display: inline-block;
      width: 70px;
    }
    &--right {
      display: inline-block;
      width: 70px;
      text-align: right;
    }
  }

  &__notice {
    margin: 50px 0;
  }
}
</style>
