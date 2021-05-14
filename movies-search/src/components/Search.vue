<template>
  <div class="m-auto my-8">
    <form class="search">
      <input
        type="text"
        :value="movieTitle"
        @keyup="inputChange"
        class="border-2 border-gray-400 mx-2 p-2 rounded-md"
      />
      <input
        @click.prevent="buttonSubmit"
        type="submit"
        value="Search"
        class="bg-blue-900 hover:bg-blue-500 px-6 py-2 text-white font-semibold rounded-lg shadow-md focus:outline-none"
      />
    </form>
  </div>
</template>

<script>
  import { ref } from "vue";
  export default {
    name: "Search",
    props: ["search"],
    setup(props, { emit }) {
      const movieTitle = ref(props.search);

      return {
        movieTitle,
        buttonSubmit() {
          emit("search", movieTitle.value);
        },
        inputChange(event) {
          movieTitle.value = event.target.value;
        },
      };
    },
  };
</script>

<style></style>
