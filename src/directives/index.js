export const phone = {
  update (el, bindings, vnode) {
    let ctx = vnode.context
    el.value = ctx[bindings.expression]
  },
  inserted (el) {
    el.focus()
  },
  bind (el, bindings, vnode) {
    let ctx = vnode.context;
    el.addEventListener('input', (e) => {
      let val = e.target.value.replace(/[^\d]/g, '')
      if (val.length > 11) {
        val = val.slice(0, 11)
      }
      ctx[bindings.expression] = val
      el.value = val
    })
    el.value = ctx[bindings.expression]
  }
}
