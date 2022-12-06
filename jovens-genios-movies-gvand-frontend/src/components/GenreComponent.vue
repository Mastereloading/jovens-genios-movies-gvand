<template>
    <div class="movieRow">
        <h1>{{ genreData.name }}</h1>
        <div class="movieRow--listarea">
            <div class="movieRow--arrows">
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
import { defineComponent, computed } from 'vue'
import MovieCardComponent from '../components/MovieCardComponent.vue'
import gql from "graphql-tag"
import { useQuery } from '@vue/apollo-composable'

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

            this.marginList = this.marginList + Math.round(this.screenSize / 2)
            
            if (this.marginList >= 0) {
                this.marginList = 0
            }

            console.log(this.marginList)
        },
        handleRightArrow() {
            console.log('RIGHT')

            this.marginList = this.marginList - Math.round(this.screenSize / 2)

            if ((this.screenSize - 1980) > this.marginList) {
                this.marginList = (this.screenSize - 1980) - 30 
            }

            console.log(this.marginList)
        }
    },
    data () {
        const ALL_MOVIES = gql`
            query Movies($where: MovieWhere) {
                movies(options: { limit: 10 }, where: $where) {
                    title
                    plot
                    poster
                    year
                    runtime
                    imdbRating
                    directors {
                        name
                    }
                }
            }
        `;

        const { result } = useQuery(ALL_MOVIES, { where: { genres_SOME: { name: this.genreData.name }}})
        const movies = computed(() => result.value?.movies ?? [])

        return {
            movies: movies,
            screenSize: window.innerWidth,
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
    .movieRow h1 {
        color: #232323;
        font-size: 38px;
        margin: 5px 0px 5px 30px;
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
    .movieRow--arrows {
        position: absolute;
        left: 0px;
        width: 100%;
        display: inline-block;
    }
    .movieRow--left, .movieRow--right {
        top: -10px;
        z-index: 3;
        background-color: rgba(32, 32, 32, 0.875);
        position: absolute;
        width: 60px;
        height: 260px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
    }
    .movieRow--left {
        left: 0;
    }
    .movieRow--right {
        right: 0;
    }
    .movieRow--listarea:hover .movieRow--left, .movieRow--listarea:hover .movieRow--right {
        opacity: 1;
        transition: all ease 0.5s;
    }
    .movieRow--listarea:hover .movieRow--left {
        opacity: v-bind("marginList == 0 ? 0 : 1");
    }
    .movieRow--listarea:hover .movieRow--right {
        opacity: v-bind("marginList == (screenSize - 1980) - 30 ? 0 : 1")
    }
</style>