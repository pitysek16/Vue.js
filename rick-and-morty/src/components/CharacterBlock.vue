<template>
  <div
    class=" d-flex justify-content-between mb-5  bg-secondary text-light character__block pl-0"
  >
    <div class="col-5 px-0 py-0">
      <img
        :src="character.image"
        :img-alt="character.name"
        class="col-12 px-0 h-100"
      />
    </div>
    <div class="pr-2 col-7 py-3">
      <h2>{{ character.name }}</h2>
      <p>
        <span class="status__icon" :style="statusBg"></span>
        {{ character.status }} -
        {{ character.species }}
      </p>

      <b-button variant="warning" class="mt-4" @click="detailedInfo"
        >More information</b-button
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
      detailedInfo() {
        this.$router.push({
          name: "CharacterDetails",
          params: { id: this.character.id },
        });
      },
    },
  };
</script>

<style>
  .character__block {
    width: 530px;
  }
  .character__block div > img {
    object-fit: cover;
  }
  .description__title {
    color: #9e9e9e;
    font-size: 16px;
    font-weight: 500;
  }
  div span.status__icon {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
    display: inline-block;
  }
</style>
