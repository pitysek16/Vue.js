<template>
  <div>
    <section>
      <Header :title="pageTitle" />
    </section>
    <section class="bg-grey">
      <b-container>
        <b-row class="d-flex justify-content-around">
          <LocationBlock
            v-for="location in locations"
            :key="location.id"
            :location="location"
          />
        </b-row>
        <Paginate
          v-model="currentPage"
          :page-count="locationPages"
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
  import LocationBlock from "@/components/LocationBlock";
  import Header from "@/components/Header";
  import Paginate from "vuejs-paginate";
  export default {
    name: "LocationList",
    components: {
      LocationBlock,
      Header,
      Paginate,
    },
    data() {
      return {
        currentPage: 1,
        pageTitle: "All locations",
      };
    },
    created() {
      this.$store.dispatch("fetchLocations", this.currentPage);
    },
    computed: {
      locations() {
        return this.$store.getters["getLocationsByPage"](this.currentPage);
      },
      locationPages() {
        return this.$store.state.locationsPages;
      },
    },
    methods: {},
    watch: {
      currentPage: {
        handler(page) {
          this.$store.dispatch("fetchLocations", page);
        },
        immediate: true,
      },
    },
  };
</script>

<style></style>
