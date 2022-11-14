<template>
  <v-avatar
    color="primary"
    size="56"
  >MJG</v-avatar>
  <h1>Home</h1>
  <genre-component />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GenreComponent from '../components/GenreComponent.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    GenreComponent
  },
})

</script>
