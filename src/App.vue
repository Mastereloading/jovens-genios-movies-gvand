<template>
    <v-app>
    <v-main>
      <header-component />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderComponent from '../src/components/HeaderComponent.vue'

export default Vue.extend({
  name: 'App',

  components: {
    HeaderComponent
  }
});
</script>
