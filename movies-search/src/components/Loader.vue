<template>
  <div class="lds-dual-ring m-auto"></div>
</template>

<script>
  export default {
    name: "Loader",
  };
</script>

<style scoped>
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 100px;
    height: 100px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #60a5fa;
    border-color: #60a5fa transparent #60a5fa transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
