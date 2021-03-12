<template>
  <div class="home">
    <h1>Home</h1>
    <b-button @click="onClick" variant="danger">
      <b-icon icon="power" aria-hidden="true"></b-icon> Logout
    </b-button>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    name: "Home",
    components: {},
    methods: {
      ...mapActions("auth", ["logout"]),
      async onClick() {
        await this.logout();
        this.$router.push({ name: "Login" });
      },
    },
  };
</script>
