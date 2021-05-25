<template>
  <div>
    <Loader v-if="loading" />
    <div class="app-main-layout" v-else>
      <Navbar @sidebarClick="sidebarClick" />
      <Sidebar class="app-sidenav" :class="{ open: isOpenSidebar }" />

      <main class="app-content" :class="{ full: !isOpenSidebar }">
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import messages from '@/utils/messages';
import Navbar from '../components/app/Navbar';
import Sidebar from '../components/app/Sidebar';
export default {
  name: 'MainLayout',
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      isOpenSidebar: true,
      loading: true,
    };
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo');
    }

    this.loading = false;
  },
  methods: {
    sidebarClick() {
      this.isOpenSidebar = !this.isOpenSidebar;
    },
  },
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
