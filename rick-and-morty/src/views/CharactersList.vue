<template>
  <div>
    <section>
      <Header :title="pageTitle" />
    </section>
    <section class="bg-grey">
      <b-container>
        <b-row class="d-flex justify-content-around">
          <CharacterBlock
            v-for="character in characters"
            :key="character.id"
            :character="character"
          />
        </b-row>
        <Paginate
          v-model="currentPage"
          :page-count="pages"
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
  import CharacterBlock from "@/components/CharacterBlock";
  import Header from "@/components/Header";
  import Paginate from "vuejs-paginate";
  export default {
    name: "CharactersList",
    components: {
      CharacterBlock,
      Header,
      Paginate,
    },
    data() {
      return {
        currentPage: 1,
        pageTitle: "All characters",
      };
    },
    created() {
      this.$store.dispatch("fetchCharacters", this.currentPage);
    },
    computed: {
      characters() {
        return this.$store.getters["getCharactersByPage"](this.currentPage);
      },
      pages() {
        return this.$store.state.pages;
      },
    },
    methods: {},
    watch: {
      currentPage: {
        handler(page) {
          this.$store.dispatch("fetchCharacters", page);
        },
        immediate: true,
      },
    },
  };
</script>

<style>
  .bg-grey {
    background-color: #262c3a;
  }
  .pagination {
    justify-content: center;
  }
  .pagination > li > a,
  .pagination > li > span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
  }

  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    z-index: 2;
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
  }
  .pagination > li > a:hover,
  .pagination > li > span:hover,
  .pagination > li > a:focus,
  .pagination > li > span:focus {
    z-index: 3;
    color: #23527c;
    background-color: #eee;
    border-color: #ddd;
  }
</style>
