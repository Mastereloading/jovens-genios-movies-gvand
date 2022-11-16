<template>
    <div>
        <h1>
            Genero do filme
        </h1>
        <h3>
            Pequena descriçao e detalhes do genero do filme
        </h3>
        <h1>
            ---------------------------------------------------------------------
        </h1>
        <MovieCardComponent />
        <MovieCardComponent />
        <MovieCardComponent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MovieCardComponent from '../components/MovieCardComponent.vue'

export default defineComponent({
    name: 'GenreComponent',

    components: {
        MovieCardComponent
    },
})
</script>

<style>

</style>