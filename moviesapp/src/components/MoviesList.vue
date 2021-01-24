<template>
   <b-container>
       <h1 class="list-title"> {{ listTitle }} </h1>
       <b-row>
            <template v-if="isExist">
                <b-col cols="3" v-for="(movie, key) in list" :key="key">
                    <MovieItem :movie="movie" @mouseover.native="onMouseOver(movie.Poster)" @removeItem="onRemoveItem" @showModal="onShowMovieInfo"/>
                </b-col>
            </template>
            <template v-else>
                <div>
                    <h2>There are no films</h2>
                </div>
            </template>
       </b-row>
        <b-modal body-class="movie-modal-body" :id="movieInfoModalId" size="xl" hide-footer hide-header>
            <ModalInfoContent :movie="selectedMovie"/>
        </b-modal>
   </b-container>
</template>

<script>
import MovieItem from './MovieItem';
import ModalInfoContent from './InfoModal';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MoviesList',
    components: {
        MovieItem,
        ModalInfoContent
    },
    props: {
        list: {
            type: Object,
            default: () => ({})
        }
    },
    data: () => ({
        movieInfoModalId: 'movie-info',
        selectedMovieId: ''
    }),
    computed: {
        ...mapGetters('movies', ['isSearch']),
        isExist() {
            return Boolean(Object.keys(this.list).length);
        },
        listTitle() {
            return this.isSearch ? 'Search result' : 'IMDB Top 250';
        },
        selectedMovie() {
            return this.selectedMovieId ? this.list[this.selectedMovieId] : null;
        }
    },
    methods: {
        ...mapActions('movies', ['removeMovie']),
        ...mapActions(['showNotify']),
        onMouseOver(poster) {
            this.$emit("changePoster", poster)
        },
        async onRemoveItem({ id, title }){
            const isConfirmed = await this.$bvModal.msgBoxConfirm(`Are you sure you want to delete ${title}?`)

            if(isConfirmed) {
                this.removeMovie(id);
                this.showNotify({
                  msg: 'Movie deleted successful', title: 'Success', variant: 'success'
                })
            }
        },
        onShowMovieInfo(id) {
           this.selectedMovieId = id;
           this.$bvModal.show(this.movieInfoModalId)
        }
    }
}
</script>

<style scoped>
.list-title {
    font-size: 50px;
    padding: 30px 0;
    color: aliceblue;
}
</style>

<style>
.movie-modal-body {
    padding: 0!important
}
</style>