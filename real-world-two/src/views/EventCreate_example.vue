<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.name }}</p>
    <p>There are {{ cateLength }} categories</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    cateLength() {
      return this.$store.getters.catLength
    },
    ...mapState(['user', 'categories'])
  }

  /*
  computed: mapState(['user', 'categories'])
  */
  /* computed: mapState({
    user: 'user',
    categories: 'categories'
  }) */
  /* computed: mapState({
    userNmae: state => state.user.name,
    userId: state => state.user.id,
    categories: state => state.categories
  }) */
  /*computed: {
    userName() {
      return this.$store.state.user.name
    },
    userId() {
      return this.$store.state.user.id
    }
  }*/
}
</script>

<style></style>
