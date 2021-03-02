<template>
  <div>
    <b-container class="text-right py-2">
      <b-row>
        <b-col class="menu">
          <router-link :to="{ name: 'MainPage' }" exact>Main</router-link>
          <router-link :to="{ name: 'CharactersList' }" exact
            >All Characters</router-link
          >
          <router-link :to="{ name: 'EpisodesList' }" exact
            >All Episodes</router-link
          >
          <router-link :to="{ name: 'LocationList' }" exact
            >All Locations</router-link
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "Menu",
  };
</script>

<style scoped>
  .menu a {
    color: #fff;
    margin: 20px;
  }
  a.router-link-active {
    color: #ffc107;
  }
  a.router-link-active:hover {
    text-decoration: none;
  }
</style>
