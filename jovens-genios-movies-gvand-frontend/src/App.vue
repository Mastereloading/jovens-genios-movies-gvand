<template>
  <div>
    <v-app>
      <v-main>
        <header-component />
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
  import HeaderComponent from '../src/components/HeaderComponent.vue'
  import colors from './styles/colors'

  export default {
    name: 'App',

    components: {
      HeaderComponent
    },

    data() {
      return {
        colors: colors
      }
    }
  }
</script>

<style scoped>
  div {
    flex: 1
  }
</style>
