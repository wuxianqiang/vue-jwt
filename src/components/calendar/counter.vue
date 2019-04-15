<script>
export default {
  functional: true,
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  render (h, ctx) {
    let content = ctx.props.content
    let list = []
    let index = 0
    content.replace(/<(.+?)>/g, (...args) => {
      list.push(['span', content.slice(index, args[2])], ['span', { class: 'text' }, args[1]])
      index = args[2] + args[0].length
    })
    list.push(['span', content.slice(index)])
    return h('div', list.map(item => h(...item)))
  }
}
</script>

<style lang="less" scoped>
.text {
  color: red;
  line-height: 48px;
}
</style>
