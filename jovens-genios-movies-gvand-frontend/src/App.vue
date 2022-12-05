<template>
  <div>
    <v-app>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
  import colors from './styles/colors'

  export default {
    name: 'App',
    data() {
      return {
        colors: colors
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  div {
    font-family: 'Roboto', sans-serif;
    background-color: v-bind('colors.white')
  }
</style>
