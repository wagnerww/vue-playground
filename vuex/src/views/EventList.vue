<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
  </div>
</template>

<script>
import EventService from '../services/EventService'
import EventCard from '@/components/EventCard.vue'

export default {
  components: { EventCard },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log('error ', error)
      })
  }
}
</script>
<style></style>
