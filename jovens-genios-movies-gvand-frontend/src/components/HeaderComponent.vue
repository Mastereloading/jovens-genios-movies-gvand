<template>
  <div>
    <v-toolbar
      class="toolbar"
      elevation="2"
    >
    <v-toolbar-title>MJG Movies</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>aaaa</v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>bbb</v-toolbar-items>
    <v-toolbar-items>ccccc</v-toolbar-items>
    <v-toolbar-items>Oi</v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import colors from '@/styles/colors'

export default defineComponent({
    name: 'HeaderComponent',
    data () {
      return {
        colors: colors
      }
    }
})
</script>

<style scoped>
  .toolbar {
    background-color: v-bind('colors.blue')
  }
</style>