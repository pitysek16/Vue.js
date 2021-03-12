<template>
  <div id="app">
    <Notification />
    <router-view />
  </div>
</template>

<script>
  import Notification from "@/components/Notification";
  export default {
    components: {
      Notification,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .form-group {
    position: relative;
  }
  .form-group .b-icon.bi {
    position: absolute;
    bottom: 10px;
    right: -20px;
  }
</style>
