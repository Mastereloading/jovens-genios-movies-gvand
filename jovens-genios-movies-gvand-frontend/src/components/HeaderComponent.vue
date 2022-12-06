<template>
  <div>
    <v-toolbar
      class="toolbar"
      elevation="2"
    >
    <v-toolbar-title>MJG Movies - {{ userData?.name }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <ul>
        <li v-for="genre in genres || []" :key="genre.name">
          <v-toolbar-items>{{genreData.name}}</v-toolbar-items>
          <v-spacer></v-spacer>
        </li>
    </ul>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon @click="logout">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import colors from '@/styles/colors'

const userData = JSON.parse(sessionStorage.getItem("userData"))

export default defineComponent({
    name: 'HeaderComponent',
    props: {
        genreData: Object
    },
    methods: {
      logout() {
        sessionStorage.clear()
        this.$router.push("/")
      },
    },
    data () {
      return {
        colors: colors,
        userData: userData
      }
    }
})
</script>

<style scoped>
  .toolbar {
    justify-content: center;
    height: 75px;
    background-color: #232323;
    color: v-bind('colors.white');
  }
</style>