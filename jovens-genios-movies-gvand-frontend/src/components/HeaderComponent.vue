<template>
  <div>
    <v-toolbar
    color="blue"
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

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeaderComponent'
})
</script>

<style scoped>
  /* div {
    background-color: red
  }
  .oi {
    background-color: red
  } */
</style>