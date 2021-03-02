<template>
  <div>
    <section>
      <Header :title="pageTitle" />
    </section>
    <section class="bg-grey">
      <b-container>
        <b-row class="d-flex justify-content-around">
          <EpisodesBlock
            v-for="episode in episodes"
            :key="episode.id"
            :episode="episode"
          />
        </b-row>
        <Paginate
          v-model="currentPage"
          :page-count="episodePages"
          :page-range="3"
          :margin-pages="2"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </Paginate>
      </b-container>
    </section>
  </div>
</template>

<script>
  import EpisodesBlock from "@/components/EpisodesBlock";
  import Header from "@/components/Header";
  import Paginate from "vuejs-paginate";
  export default {
    name: "EpisodesList",
    components: {
      EpisodesBlock,
      Header,
      Paginate,
    },
    data() {
      return {
        currentPage: 1,
        pageTitle: "All episodes",
      };
    },
    created() {
      this.$store.dispatch("fetchEpisodes", this.currentPage);
    },
    computed: {
      episodes() {
        return this.$store.getters["getEpisodesByPage"](this.currentPage);
      },
      episodePages() {
        return this.$store.state.episodesPages;
      },
    },
    methods: {},
    watch: {
      currentPage: {
        handler(page) {
          this.$store.dispatch("fetchEpisodes", page);
        },
        immediate: true,
      },
    },
  };
</script>

<style></style>
