<template>
    <div class="moviecard">
        <img class="movieimage" :src="movieData.poster" :alt="movieData.title" />
        <div class="moviecard--scrollup">
            <h3 class="title">{{ movieData.title }}</h3>
            <p class="details">{{ movieData.year }} - {{ movieData.runtime }} minutes</p>
            <div class="rating">
                <v-icon
                    class="star five"
                    x-large
                >
                    mdi-star
                </v-icon>
                <v-icon
                    class="star four"
                    x-large
                >
                    mdi-star
                </v-icon>
                <v-icon
                    class="star three"
                    x-large
                >
                    mdi-star
                </v-icon>
                <v-icon
                    class="star two"
                    x-large
                >
                    mdi-star
                </v-icon>
                <v-icon
                    class="star one"
                    x-large
                >
                    mdi-star
                </v-icon>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import colors from '@/styles/colors'
import image from '@/assets/movies/movie.jpg'

export default defineComponent({
    name: 'MovieCardComponent',
    props: {
        movieData: Object
    },
    data () {
        return {
            colors: colors,
            movieBlank: [
                {
                    duration: '00 minutos',
                    year: '0000',
                    rating: '0',
                    image: image
                }
            ]
        }
    }
})
</script>

<style scoped>
    .title {
        margin: 5px 10px 5px 10px;
        color: #F8F8F8;
        font-size: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .details {
        text-align: center;
        color: #F8F8F8;
        opacity: 0;
    }
    .rating {
        transform: rotateY(180deg);
        position: absolute;
        left: 30px;
        right: 30px;
        bottom: 15px;
    }
    .rating:hover .star {
        color: #F8F8F8;
    }
    .star.one {
        color: v-bind('movieData.imdbRating >= 1 ? "yellow" : "#F8F8F8"');
    }
    .star.two {
        color: v-bind('movieData.imdbRating >= 3 ? "yellow" : "#F8F8F8"');
    }
    .star.three {
        color: v-bind('movieData.imdbRating >= 5 ? "yellow" : "#F8F8F8"');
    }
    .star.four {
        color: v-bind('movieData.imdbRating >= 7 ? "yellow" : "#F8F8F8"');
    }
    .star.five {
        color: v-bind('movieData.imdbRating >= 9 ? "yellow" : "#F8F8F8"');
    }
    .star.one:hover {
        color: yellow;
    }
    .star.two:hover, .star.two:hover ~ .star.one {
        color: yellow;
    }
    .star.three:hover, .star.three:hover ~ .star.two, .star.three:hover ~ .star.one {
        color: yellow;
    }
    .star.four:hover, .star.four:hover ~ .star.three, .star.four:hover ~ .star.two, .star.four:hover ~ .star.one {
        color: yellow;
    }
    .star.five:hover, .star.five:hover ~ .star.four, .star.five:hover ~ .star.three, .star.five:hover ~ .star.two, .star.five:hover ~ .star.one {
        color: yellow;
    }
    .moviecard {
        height: 240px;
        width: 180px;
        position: relative;
        border-radius: 5px 5px 0px 0px;
        box-shadow: 3px 3px 8px black;
    }
    .movieimage {
        height: 240px;
        width: 180px;
        position: absolute;
        z-index: 1;
        border-radius: 5px 5px 0px 0px;
    }
    .moviecard--scrollup {
        text-align: center;
        top: 160px;
        width: 180px;
        height: 80px;
        position: absolute;
        z-index: 2;
        background-color: rgba(64, 64, 64, 0.875);
        transition: all ease 0.2s;        
    }
    .moviecard--scrollup:hover {
        top: 60px;
        height: 180px;
        transition: all ease 0.2s;
    }
    .moviecard--scrollup:hover .details {
        opacity: 1;
    }
</style>