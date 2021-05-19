<template>
  <div class="indigo lighten-4 empty-layout">
    <router-view />
  </div>
</template>

<script>
import messages from '@/utils/messages';

export default {
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code]);
    },
  },
};
</script>

<style scoped></style>
