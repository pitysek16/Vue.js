<template>
    <header class="header">
        <b-navbar type="dark" variant="dark">
            <b-container>
                <b-navbar-brand href="#">MovieDB</b-navbar-brand>
                <b-nav-form>
                    <b-form-input class="mr-sm-2 search-input" placeholder="Search" v-model="searchValue" debounce="500"></b-form-input>
                </b-nav-form>
            </b-container>
        </b-navbar>
    </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Header',
    data: () => ({
        searchValue: ''
    }),
    watch: {
        searchValue: 'onSearchValueChanged'
    },
    methods: {
        ...mapActions('movies', ['searchMovies', 'fetchMovies', 'toogleSearchState']),
        onSearchValueChanged(value) {
            if(value) {
                this.searchMovies(value);
                this.toogleSearchState(true);
            } else {
                this.fetchMovies();
                this.toogleSearchState(false);
            }
           
        }
    }
}
</script>

<style scoped>
.header {
    margin-bottom: 30px
}
.navbar {
    background-color: rgba(0, 0, 0, 0.7) !important;
}
.search-input{
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(0, 0, 0, 0.6);
}
.search-input:focus{
    box-shadow: none;
    color: #fff;
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(0, 0, 0, 0.6);
}
</style>