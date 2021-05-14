<template>
  <div class="bg-blue-400 py-5 px-16">
    <h1 class="text-center text-white font-black text-2xl">{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: ["title"],
    setup() {},
  };
</script>

<style></style>
