<template>
  <div
    class="resert-password-page d-flex justify-content-center align-items-center"
  >
    <b-container>
      <b-row class="justify-content-center">
        <b-col class="col-8 col d-flex justify-content-center py-5 bg-light">
          <ResertPasswordForm />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import ResertPasswordForm from "@/components/ResertPasswordForm";
  export default {
    name: "ResertPassword",
    components: {
      ResertPasswordForm,
    },
  };
</script>

<style scoped>
  .resert-password-page {
    background: #89fca2;
    height: 100vh;
  }
</style>
