<script setup>
import gql from "graphql-tag"
import { useQuery } from '@vue/apollo-composable'
import { watchEffect, computed } from 'vue'

const ALL_MOVIES = gql`
  query{
    people {
      name
    }
  }
`;
const { result } = useQuery(ALL_MOVIES);
const people = computed(() => result.value?.people ?? []);
watchEffect(() => {
  console.log(people)
})

</script>

<template>
  <div class="apollo">
    <h3>Hello</h3>
    <li v-for="p in people" :key="people.name">
      {{ p.name }}
    </li>
  </div>
</template>
