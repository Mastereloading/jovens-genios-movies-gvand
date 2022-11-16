<template>
  <div>
    <v-avatar
    color="primary"
    size="56"
    >MJG</v-avatar>
    <h1>Home</h1>
    <genre-component />
    <!-- <query /> -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// import Query from '../neo4j/Query.vue'
import GenreComponent from '../components/GenreComponent.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    GenreComponent,
    // Query
  }
})
</script>

<style scoped>
  div {
    background-color: yellow;
  }
</style>