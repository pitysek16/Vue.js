<template>
  <div class="login-page d-flex justify-content-center align-items-center">
    <b-container>
      <b-row class="justify-content-center">
        <b-col class="col-8 col d-flex justify-content-center py-5 bg-light">
          <LoginForm />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import LoginForm from "@/components/LoginForm";
  export default {
    name: "Login",
    components: {
      LoginForm,
    },
  };
</script>

<style scoped>
  .login-page {
    background: #d5e4e4;
    height: 100vh;
  }
</style>
