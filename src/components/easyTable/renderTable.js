export default {
  functional: true,
  render (h, context) {
    return context.props.render.call(context.parent.$parent, h, context.props.column)
  }
}
