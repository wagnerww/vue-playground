<template>
  <div>
    <h1>Events Listing {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ nae: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
    </template>
    <router-link
      :to="{ nae: 'event-list', query: { page: page + 1 } }"
      rel="next"
      >Next Page</router-link
    >
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: { EventCard },
  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: 2,
      page: this.page
    })
  },
  computed: {
    page() {
      return +this.$route.query.page || 1
    },
    ...mapState(['event', 'user'])
  }
}
</script>
<style></style>
