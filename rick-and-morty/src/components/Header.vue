<template>
  <div
    class="text-center pb-5 header bg-grey"
    :style="{
      'background-image': 'url(' + require('@/assets/85327.png') + ')',
    }"
  >
    <Menu />
    <h1>The Rick and Morty</h1>
    <p>{{ pageTitle }}</p>
  </div>
</template>

<script>
  import Menu from "@/components/Menu";
  export default {
    name: "Header",
    components: {
      Menu,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        pageTitle: this.title,
      };
    },
  };
</script>

<style scoped>
  .header {
    background-size: contain;
    min-height: 500px;
    background-position: top right;
    background-repeat: no-repeat;
  }
  h1 {
    margin-top: 50px;
    color: #fff;
    border: none;
    font-weight: 900;
    z-index: 1;
    font-size: 80px;
  }

  h1 + p {
    margin: 30px;
    color: #fff;
    font-weight: 500;
    font-size: 50px;
  }
</style>
