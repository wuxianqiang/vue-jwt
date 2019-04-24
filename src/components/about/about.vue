<template>
  <div class="about">
    <a class="link  link-add">复制</a>
    <copy-input></copy-input>
  </div>
</template>

<script>
import CopyInput from '@/components/CopyInput/CopyInput'

export default {
  components: {
    CopyInput
  },
  data () {
    return {
      value11: [],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    }
  }
}
</script>

