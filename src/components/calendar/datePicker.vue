<template>
  <div class="calendar" v-click-outside>
    <input
      type="text"
      :value="formatDate"
    >
    <div v-if="isVisiable">
      <div class="calendar__header">
        <span @click="prevMonth">&lt;</span>
        <span>&lt;&lt;</span>
        <span> {{time.year}} 年</span>
        <span> {{time.month+1}} 月</span>
        <span> {{time.day}} 日</span>
        <span>&gt;&gt;</span>
        <span @click="nextMonth">&gt;</span>
      </div>
      <div class="calendar__content">
        <!-- 循环行和列,99乘法表 -->
        <ul class="calendar__content--raw">
          <li
            v-for="(week, index) in weekDays"
            :key="index"
            class="calendar__content--column">
            {{week}}
          </li>
        </ul>
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
      <div class="calendar__footer">
        今天
      </div>
    </div>
  </div>
</template>

<script>
import { getYearMonthDay, getDate } from './utils'
export default {
  directives: {
    clickOutside: { // 指令的生命周期
      bind (el, bindings, vnode) {
        let handler = e => {
          if (el.contains(e.target)) {
            // 包含元素
            // 触发当前上下文的focus方法
            // 显示
            if (!vnode.context.isVisiable) {
              vnode.context.focus()
            }
          } else {
            // 不包含元素
            if (vnode.context.isVisiable) {
              vnode.context.blur()
            }
          }
        }
        el.handler = handler
        document.addEventListener('click', handler)
      },
      unbind (el) {
        document.removeEventListener('click', el.handler)
      }
    }
  },

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
      let { year, month } = getYearMonthDay(this.value)
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
    focus () {
      this.isVisiable = true
    },
    blur () {
      this.isVisiable = false
    },
    isCurrentMonth (date) {
      // 是不是当前月份
      let {year, month} = getYearMonthDay(this.value)
      let {year: y, month: m} = getYearMonthDay(date)
      return year === y && month === m
    },
    isToday (date) {
      let {year, month, day} = getYearMonthDay(new Date())
      let {year: y, month: m, day: d} = getYearMonthDay(date)
      return year === y && month === m && day === d
    },
    chooseDate (date) {
      this.time = getYearMonthDay(date)
      this.$emit('input', date)
      this.blur()
    },
    isSelect (date) {
      let {year, month, day} = getYearMonthDay(this.value)
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
  background pink
  text-align left
  &__content {
    border 1px solid red
    &--raw {
      display flex
      height 85px;
    }
    &--column {
      flex 1
      display flex;
      align-items center
      justify-content center
      cursor pointer
      &:hover {
        background #fff
      }
    }
  }
.hook {
  color #eee
}
.today {
  background #fff
}
.select {
  background red;
}
</style>
