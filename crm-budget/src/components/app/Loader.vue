<template>
  <div class="lds-hourglass"></div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>
<style>
.lds-hourglass {
  display: block;
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto;
}
.lds-hourglass:after {
  content: ' ';
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 50px solid #ff9800;
  border-color: #ff9800 transparent #ff9800 transparent;
  animation: lds-hourglass 4s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>
