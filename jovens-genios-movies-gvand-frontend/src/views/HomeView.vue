<template>
  <div>
    <ul>
        <li v-for="genre in genres || []" :key="genre.name">
          <GenreComponent :genreData="genre" />
        </li>
    </ul>
  </div>
</template>

<script>
import MovieCardComponent from '@/components/MovieCardComponent.vue'
import { defineComponent } from 'vue'
import GenreComponent from '../components/GenreComponent.vue'
import gql from "graphql-tag"
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    GenreComponent,
    MovieCardComponent
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
