<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <RouterView />
</template>
