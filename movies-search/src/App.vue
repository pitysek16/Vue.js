<template>
  <div class="grid grid-cols-1 font-sans">
    <Header title="Search films with Vue 3" />
    <Search :search="state.search" @search="handleSearch" />
    <SearchText v-if="!state.search" />
    <NoMovies v-if="state.movies === undefined && state.search" />

    <div v-if="!state.loading" class="grid grid-cols-4 gap-4 m-auto w-5/6">
      <Movie
        v-for="movie in state.movies"
        :movie="movie"
        :key="movie.imdbID"
        class="my-3"
      />
    </div>
    <Loader v-else />
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Search from "@/components/Search";
  import SearchText from "@/components/SearchText";
  import Movie from "@/components/Movie";
  import NoMovies from "@/components/NoMovies";
  import Loader from "@/components/Loader";
  import { useMovieApi } from "@/plugins/movies-fetch";

  export default {
    name: "App",
    components: { Header, Search, Movie, SearchText, NoMovies, Loader },
    setup() {
      const state = useMovieApi();

      return {
        state,
        handleSearch(searchTerm) {
          state.loading = true;
          state.search = searchTerm;
        },
      };
    },
  };
</script>

<style></style>
