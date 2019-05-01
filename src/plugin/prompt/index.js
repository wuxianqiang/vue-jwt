let Vue;

const prompt = {
  style () {
    return {
      position: 'fixed',
      left: '50%',
      top: 0,
      height: '18px',
      'line-height': '18px',
      'min-width': '200px',
      'z-index': 10,
      padding: '10px',
      color: '#fff',
      background: '#f56c6c',
      transform: 'translate3d(-50%, -18px, 0)',
      transition: 'all 0.4s'
    }
  },
  createElement (text, params, icon) {
    let div = document.createElement('div')
    div.innerHTML = `<i class="${icon}" style="margin-right: 10px"></i> ${text}`
    let cssText = ''
    let style = Object.assign(this.style(), params)
    for (const key in style) {
      cssText += `${key}:${style[key]};`
    }
    div.style.cssText = cssText
    document.body.appendChild(div)
    setTimeout(() => {
      div.style.transform = 'translate3d(-50%, 18px, 0)'
    }, 20);
    setTimeout(() => {
      div.style.transform = 'translate3d(-50%, -36px, 0)'
      div.addEventListener('transitionend', () => {
        document.body.removeChild(div)
      })
    }, 3000);
  },
  error (text) {
    this.createElement(text, {background: '#f56c6c'}, 'el-icon-close')
  },
  success (text) {
    this.createElement(text, {background: '#67c23a'}, 'el-icon-check')
  }
}

const install = (_Vue) => {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      this.$prompt = prompt
    },
  })
}

export default {
  install
}
