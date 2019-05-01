let Vue;
const install = (_Vue, options = {}) => {
  Vue = _Vue;
  Vue.directive('top', (el, bindings) => {
    let position = calculation(bindings.value)
    let container = window;
    Vue.nextTick(() => {
      if (options.el) {
        container = document.querySelector(options.el) || window;
      }
      let height = calculation(options.distance)
      container.height = height
      container.el = el
      container.addEventListener('scroll', handleScroll)
      handleClick(container, el, position, options.duration, options.interval);
    })
  })
}

function handleScroll () {
  this.el.style.display = this.scrollTop > this.height ? 'block' : 'none'
}

function calculation (num = 0) {
  let reg = /^(\d+)(px|page)?$/;
  let res = 0;
  if (reg.test(num)) {
    let [, count, unit = 'px'] = reg.exec(num);
    if (unit === 'px') {
      res = count;
    } else if (unit === 'page') {
      res = count * document.documentElement.clientHeight;
    }
  }
  return res
}

function handleClick (container, el, position = 0, duration = 300, interval = 10) {
  el.addEventListener('click', () => {
    container.removeEventListener('scroll', handleScroll)
    let distance = container.scrollTop;
    let step = (distance / duration) * interval;
    let timer = setInterval(() => {
      let curTop = container.scrollTop;
      curTop -= step;
      if (curTop <= position) {
        clearInterval(timer);
        container.scrollTop = position;
        container.addEventListener('scroll', handleScroll)
        return;
      }
      container.scrollTop = curTop;
    }, interval)
  })
}

export default {
  install
}
