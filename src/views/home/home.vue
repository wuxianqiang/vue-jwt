<template>
  <div>
    <calendar v-model="time"></calendar>
  </div>
</template>

<script>
import Calendar from '@/components/calendar/calendar'

export default {
  components: {
    Calendar
  },

  data () {
    return {
      time: new Date()
    }
  }
}
</script>
