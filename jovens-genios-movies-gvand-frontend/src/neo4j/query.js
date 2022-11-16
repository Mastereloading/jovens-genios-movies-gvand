import gql from "graphql-tag"
import { useQuery } from '@vue/apollo-composable'
import { watchEffect, computed } from 'vue'

export const getAllPeopleName = () => {
  const GET_ALL_PEOPLE_NAME = gql`
    query {
      people {
        name
      }
    }
  `

  const { result } = useQuery(GET_ALL_PEOPLE_NAME)
  const people = computed(() => result.value?.people ?? [])
  watchEffect(() => {
    console.log(people)
  })
}

