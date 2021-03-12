<template>
  <div></div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "Notification",
    computed: {
      ...mapGetters(["lastMessage"]),
    },
    watch: {
      lastMessage: "showMessage",
    },
    methods: {
      showMessage(value) {
        this.$bvToast.toast(value.msg.text, {
          title: value.msg.title,
          autoHideDelay: 5000,
          variant: value.msg.variant,
          solid: true,
          toaster: "b-toaster-top-center",
        });
      },
    },
  };
</script>

<style scoped></style>
