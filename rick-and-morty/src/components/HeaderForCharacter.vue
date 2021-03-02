<template>
  <div class="text-center pb-5 header bg-grey">
    <Menu />
    <h1>{{ character.name }}</h1>
  </div>
</template>

<script>
  import Menu from "@/components/Menu";
  export default {
    name: "Header",
    props: {
      character: {
        type: Object,
        required: true,
      },
    },
    components: {
      Menu,
    },
  };
</script>

<style scoped>
  .header {
    background-size: contain;
    min-height: 250px;
    background-position: top right;
    background-repeat: no-repeat;
  }
  h1 {
    margin-top: 50px;
    color: #fff;
    border: none;
    font-weight: 700;
    z-index: 1;
    font-size: 60px;
  }
</style>
