<template>
  <div>
    <v-avatar
    color="primary"
    size="56"
    >MJG</v-avatar>
    <h1>Home</h1>
    <genre-component />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import GenreComponent from '../components/GenreComponent.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      GenreComponent
    },
  })
</script>
