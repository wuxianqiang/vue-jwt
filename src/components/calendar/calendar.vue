<template>
  <div class="calendar">
    <div>
      <div class="calendar__header">
        <div>
          <span> {{time.year}} 年</span>
          <span> {{time.month+1}} 月</span>
          <span> {{time.day}} 日</span>
        </div>
        <div>
          <span @click="prevMonth" class="calendar__header--prev">上个月</span>
          <span @click="currentMonth" class="calendar__header--current">今天</span>
          <span @click="nextMonth" class="calendar__header--next">下个月</span>
        </div>
      </div>
      <div class="calendar__content">
        <!-- 循环行和列,99乘法表 -->
        <div>
          <ul class="calendar__content--week">
            <li
              v-for="(week, index) in weekDays"
              :key="index"
              class="calendar__content--day"
            >
              {{week}}
            </li>
          </ul>
        </div>
        <div class="calendar__content--wrapper">
          <div
            v-for="(i, index) in 6"
            :key="index"
            class="calendar__content--raw">
            <span
              v-for="(j, index) in 7"
              :key="index"
              :class="{
                hook: !isCurrentMonth(visibeDays[(i-1)*7+(j-1)]),
                today: isToday(visibeDays[(i-1)*7+(j-1)]),
                select: isSelect(visibeDays[(i-1)*7+(j-1)])
              }"
              class="calendar__content--column"
              @click="chooseDate(visibeDays[(i-1)*7+(j-1)])">
              {{ visibeDays[(i-1)*7+(j-1)].getDate() }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getYearMonthDay, getDate } from './utils'
export default {
  props: {
    value: {
      type: Date,
      default: () => new Date()
    }
  },


  data () {
    return {
      // 日历操作面板是否可见
      isVisiable: false,
      time: '',
      weekDays: ['日', '一', '二', '三', '四', '五', '六']
    }
  },

  computed: {
    formatDate () {
      let { year, month, day } = getYearMonthDay(this.value)
      return `${year}-${month+1}-${day}`
    },

    visibeDays () {
      // 2018-5-18
      // 2018-5-1 获取第1天
      let time = getDate(this.time.year, this.time.month, this.time.day)
      let { year, month } = getYearMonthDay(time)
      let currentFirstDay = new Date(year, month, 1)
      // 获取星期几
      let week = currentFirstDay.getDay()
      // 一天多少小时
      let startDay = currentFirstDay - week * 60 * 60 * 1000 * 24
      // 多少天就累加多少
      let arr = []
      for(let i = 0; i < 42; i++) {
        arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24 ))
      }
      return arr
    }
  },

  created () {
    this.time = getYearMonthDay(this.value)
  },

  methods: {
    isCurrentMonth (date) {
      // 是不是当前月份
      let time = getDate(this.time.year, this.time.month, this.time.day)
      let {year, month} = getYearMonthDay(time)
      let {year: y, month: m} = getYearMonthDay(date)
      return year === y && month === m
    },
    isToday (date) {
      // let {year, month, day} = getYearMonthDay(new Date())
      let {year, month, day} = this.time
      let {year: y, month: m, day: d} = getYearMonthDay(date)
      return year === y && month === m && day === d
    },
    chooseDate (date) {
      this.time = getYearMonthDay(date)
      this.$emit('input', date)
    },
    isSelect (date) {
      let time = getDate(this.time.year, this.time.month, this.time.day)
      let {year, month, day} = getYearMonthDay(time)
      let {year: y, month: m, day: d} = getYearMonthDay(date)
      return year === y && month === m && day === d
    },
    prevMonth () {
      let d = getDate(this.time.year, this.time.month, 1)
      d.setMonth(d.getMonth() - 1)
      this.time = getYearMonthDay(d)
    },
    nextMonth () {
      let d = getDate(this.time.year, this.time.month, 1)
      d.setMonth(d.getMonth() + 1)
      this.time = getYearMonthDay(d)
    },
    currentMonth () {
      this.time = getYearMonthDay(new Date())
    },
    prevYear () {
      let d = getDate(this.time.year, this.time.month, 1)
      d.setFullYear(d.getFullYear() - 1)
      this.time = getYearMonthDay(d)
    },
    nextYear () {
      let d = getDate(this.time.year, this.time.month, 1)
      d.setFullYear(d.getFullYear() + 1)
      this.time = getYearMonthDay(d)
    }
  }
}
</script>

<style lang="stylus" scoped>
* {
  margin 0
  padding 0
}
.calendar
  background #fff
  padding 20px
  &__header
    display flex
    align-items center
    justify-content space-between
    font-size 12px
    user-select none
    &--prev
      border 1px solid #dcdfe6
      border-top-left-radius 3px
      border-bottom-left-radius 3px
      padding 5px
      cursor pointer
    &--current
      border-top 1px solid #dcdfe6
      border-bottom 1px solid #dcdfe6
      padding 5px
      cursor pointer
    &--next
      border 1px solid #dcdfe6
      border-top-right-radius 3px
      border-bottom-right-radius 3px
      padding 5px
      cursor pointer
  &__content
    &--raw
      display flex
      height 85px;
    &--column
      flex 1
      display flex
      align-items center
      justify-content center
      cursor pointer
      border-bottom 1px solid #ebeef5
      border-right 1px solid #ebeef5
      font-size 24px
      &:hover
        background #f2f8fe
    &--wrapper
      border-top 1px solid #ebeef5
      border-left 1px solid #ebeef5
    &--week
      display flex
      height 85px
    &--day
      flex 1
      flex 1
      display flex;
      align-items center
      justify-content center
.hook
  color #c0c4cc
.today
  background #f2f8fe
  color #1989fa
.select
  background #f2f8fe
</style>
