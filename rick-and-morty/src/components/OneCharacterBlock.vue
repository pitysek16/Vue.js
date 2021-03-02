<template>
  <div
    class="col-12 d-flex justify-content-center mb-5 one__character__block text-light  pl-0"
  >
    <div class="col-4 px-0 py-0">
      <img
        :src="character.image"
        :img-alt="character.name"
        class="col-12 px-0 h-100"
      />
    </div>
    <div class="px-5 col-8 py-3">
      <p>
        <span class="status__icon" :style="statusBg"></span>
        {{ character.status }} -
        {{ character.species }}
      </p>

      <p>
        <span class="description__title">Gender:</span><br />
        {{ character.gender }}
      </p>

      <p>
        <span class="description__title">Last known location:</span><br />
        {{ character.location.name }}
      </p>

      <b-button variant="light" @click="goBack" class="float-right"
        >Go Back</b-button
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "CharacterBlock",
    props: {
      character: {
        type: Object,
        required: true,
      },
    },
    data: () => ({
      defaultStatusBg: "#ccc",
      aliveStatusBg: "#5c4",
      deadStatusBg: "#d63d2e",
    }),
    computed: {
      statusBg() {
        if (this.character.status === "Alive") {
          return {
            "background": this.aliveStatusBg,
          };
        } else if (this.character.status === "Dead") {
          return {
            "background": this.deadStatusBg,
          };
        } else {
          return {
            "background": this.defaultStatusBg,
          };
        }
      },
    },
    methods: {
      goBack() {
        this.$router.push({
          name: "CharactersList",
        });
      },
    },
  };
</script>

<style scoped></style>
