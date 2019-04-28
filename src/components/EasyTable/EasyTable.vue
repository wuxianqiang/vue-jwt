<template>
  <div class="easy-table">
    <div class="easy-table_thead" ref="box">
      <table class="easy-table__box">
        <colgroup class="easy-table__wrapper">
          <col
            v-for="(item, index) in titleList"
            :key="index"
            :width="item.width ? item.width : ''"
            class="easy-table__col"/>
        </colgroup>
        <thead>
          <tr>
            <th
              ref="th"
              v-for="(item, index) in titleList"
              :key="index" class="easy-table__th">
              <span>{{item.text}}</span>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="easy-table_tbody">
      <table class="easy-table__box">
        <colgroup>
          <col
            v-for="(item, index) in titleList"
            :key="index"
            :width="thWidth[index]"
            class="easy-table__col"
          />
        </colgroup>
        <thead>
          <tr
            class="easy-table__tr"
            v-for="(value, index) in dataList"
            :key="index"
            :class="{'easy-table__dark': (index+1)%2===0}">
            <td
              v-for="(title, index) in titleList"
              :key="index"
              class="easy-table__td">
              <span>
                <!-- 可以处理文本 -->
                <span v-if="title.filter">
                  {{title.filter(value)}}
                </span>
                <span v-else >
                  <slot :name="title.key" :row="value">
                    {{value[title.key]}}
                  </slot>
                </span>
              </span>
              <span v-if="title.key==='html'">
                <!-- 可以帮到HTML -->
                <span
                  v-for="(item, index) in title.htmlArray"
                  :key="index"
                  v-html="item.htmlString"
                  @click="()=>item.clickEvent(value)"
                >
                </span>
              </span>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleList: {
      type: Array,
      default: (() => [])
    },
    dataList: {
      type: Array,
      default: (() => [])
    }
  },
  data () {
    return {
      thWidth: []
    }
  },
  methods: {
    _formatWidth () {
      let thWidth = []
      let el = this.$refs.th
      if (!el) return
      for (const th of el) {
        thWidth.push(th.offsetWidth)
      }
      this.thWidth = thWidth
    }
  },
  mounted () {
    this._formatWidth()
  }
}
</script>

<style lang="less" scoped>
.easy-table {
  text-align: left;
  font-size: 14px;
  color: #606266;
  word-break: break-all;
  &__td {
    padding: 12px;
    border-right: 1px solid #E7E7E7;
    border-bottom: 1px solid #E7E7E7;
    
  }
  &__th {
    padding: 12px;
    border-right: 1px solid #E7E7E7;
    background: rgba(233, 233, 233, 0.6);
  }
  &__dark {
    background: #fafafa;
  }
  &__tr {
    transition: all 0.3s;
    &:hover {
      background: rgba(233, 233, 233, 0.6);
    }
  }
  &__box {
    table-layout: fixed;
    width: 100%;
    border-left: 1px solid #E7E7E7;
    border-top: 1px solid #E7E7E7;
  }
}
</style>