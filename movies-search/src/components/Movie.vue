<template>
  <div>
    <h2 class="text-coolGray-500 font-black">{{ movieTitle }}</h2>
    <div class="my-2">
      <img width="200" :alt="altText" :src="moviePoster" />
    </div>
    <p>Year: {{ movieYear }}</p>
  </div>
</template>

<script>
  import { computed, ref } from "vue";
  export default {
    name: "Movie",
    props: ["movie"],
    setup(props) {
      const movies = ref(props.movie);
      const movieYear = movies.value.Year;
      const movieTitle = movies.value.Title;
      const moviePoster = movies.value.Poster;

      const altText = computed(() => `The movie titled: ${movies.value.Title}`);
      return { movieYear, movieTitle, moviePoster, altText };
    },
  };
</script>

<style scoped>
  img {
    min-height: 300px;
  }
</style>
