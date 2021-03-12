<template>
  <div class="singup-page d-flex justify-content-center align-items-center">
    <b-container>
      <b-row class="justify-content-center">
        <b-col class="col-8 col d-flex justify-content-center py-5 bg-light">
          <SingUpForm />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import SingUpForm from "@/components/SingUpForm";
  export default {
    name: "SingUp",
    components: {
      SingUpForm,
    },
  };
</script>

<style scoped>
  .singup-page {
    background: #aafafa;
    height: 100vh;
  }
</style>
