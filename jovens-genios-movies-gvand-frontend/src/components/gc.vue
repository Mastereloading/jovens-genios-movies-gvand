<script setup>
import gql from "graphql-tag"
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'

const ALL_MOVIES = gql`
    query Movies($where: MovieWhere) {
        movies(options: { limit: 10 }, where: $where) {
            title
            plot
            poster
            year
            runtime
            imdbRating
        }
    }
`;

const { result } = useQuery(ALL_MOVIES, { where: { genres_SOME: { name: genreData.name }}})
const movies = computed(() => result.value?.movies ?? [])

</script>

<template>
    <div class="movieRow">
        <h2>{{ genreData.name }}</h2>
        <div class="movieRow--listarea">
            <div
                class="movieRow--left"
                @click="handleLeftArrow()"
            >
                <v-icon
                    color="#F8F8F8"
                    x-large
                >
                    mdi-arrow-left
                </v-icon>
            </div>
            <div
                class="movieRow--right"
                @click="handleRightArrow()"
            >
                <v-icon
                    x-large
                    color="#F8F8F8"
                >
                    mdi-arrow-right
                </v-icon>
            </div>
            <ul class="movieRow--list">
                <li v-for="movie in movies  || []" :key="movie.title">
                    <MovieCardComponent class="movieRow--item" :movieData="movie" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import MovieCardComponent from '../components/MovieCardComponent.vue'

export default defineComponent({
    name: 'GenreComponent',
    components: {
        MovieCardComponent
    },
    props: {
        genreData: Object
    },
    methods: {
        handleLeftArrow() {
            console.log('LEFT')

            this.marginList = this.marginList + Math.round(window.innerWidth / 2)
            
            if (this.marginList >= 0) {
                this.marginList = 0
            }

            console.log(this.marginList)
        },
        handleRightArrow() {
            console.log('RIGHT')

            this.marginList = this.marginList - Math.round(window.innerWidth / 2)

            if ((window.innerWidth - 1980) > this.marginList) {
                this.marginList = (window.innerWidth - 1980) - 30 
            }

            console.log(this.marginList)
        }
    },
    data () {
        return {
            marginList: 0,
            listWidthLength: 10 * 210
        }
    }
})
</script>

<style scoped>
    ul li {
        display: inline;
    }
    .movieRow {
        margin-bottom: 30px;
    }
    .movieRow h2 {
        margin: 0px 0px 0px 30px;
    }
    .movieRow h3 {
        margin: 0px 0px 10px 30px;
    }
    .movieRow--listarea {
        overflow-x: hidden;
        margin: 0px 15px 0px 30px;
    }
    .movieRow--list {
        width: v-bind('listWidthLength + "px"');
        margin-left: v-bind('marginList + "px"');
        transition: all ease 2.5s;
    }
    .movieRow--item {
        display: inline-block;
        margin: 0px 15px 0px 0px;

    }
    .movieRow--left, .movieRow--right {
        z-index: 3;
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        width: 50px;
        height: 240px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
    }
    .movieRow--left {
        left: 0;
        background-color: rgba(43, 43, 43, 0.6);
    }
    .movieRow--right {
        right: 0;
        background-color: rgba(43, 43, 43, 0.6);
    }
    .movieRow--listarea:hover .movieRow--left, .movieRow--listarea:hover .movieRow--right {
        opacity: 1;
        transition: all ease 0.5s;
    }
</style>