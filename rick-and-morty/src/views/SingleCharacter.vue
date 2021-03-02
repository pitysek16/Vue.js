<template>
  <div>
    <section>
      <HeaderForCharacter v-if="character" :character="character" />
    </section>
    <section class="bg-grey">
      <b-container>
        <b-row class="d-flex justify-content-around">
          <OneCharacterBlock :character="character" />
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
  import HeaderForCharacter from "@/components/HeaderForCharacter";
  import OneCharacterBlock from "@/components/OneCharacterBlock";
  export default {
    name: "SingleCharacter",
    components: {
      HeaderForCharacter,
      OneCharacterBlock,
    },
    data() {
      return {
        character: null,
      };
    },
    async created() {
      try {
        const { id } = this.$route.params;
        if (id) {
          const { data } = await this.$store.dispatch(
            "fetchSingleCharacter",
            id
          );
          this.character = data;
        }
      } catch (err) {
        console.log(err);
      }
    },
  };
</script>

<style></style>
