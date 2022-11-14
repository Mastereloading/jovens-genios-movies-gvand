<template>
  <v-app>
    <v-main>
      <header-component />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from '../src/components/HeaderComponent.vue'
import colors from '../src/styles/colors'

export default defineComponent({
  name: 'App',
  
  components: {
    HeaderComponent
  },

  data () {
    return {
      aaa: '#FF00FF',
      colors
    }
  }
})
</script>
