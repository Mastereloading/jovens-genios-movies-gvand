<template>
  <div>
    <HeaderComponent :genreData="genres" />
    <ul>
        <li v-for="genre in genres || []" :key="genre.name">
          <GenreComponent :genreData="genre" />
        </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import gql from "graphql-tag"
import { useQuery } from '@vue/apollo-composable'

import HeaderComponent from '../components/HeaderComponent.vue'
import GenreComponent from '../components/GenreComponent.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    HeaderComponent,
    GenreComponent
  },
  data () {
    const ALL_GENRES = gql`
      query Genres {
        genres(options: { limit: 5 }) {
          name
        }
      }
    `;

    const { result } = useQuery(ALL_GENRES)
    const genres = computed(() => result.value?.genres ?? [])

    return {
      genres: genres
    }
  }
})
</script>
