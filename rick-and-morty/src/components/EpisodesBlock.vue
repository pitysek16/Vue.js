<template>
  <div
    class=" d-flex justify-content-between mb-5  bg-secondary text-light character__block pl-0"
  >
    <div class="pr-2 col-7 py-3">
      <h2>{{ episode.episode }} "{{ episode.name }}"</h2>
      <p>
        <span class="description__title">Release date:</span><br />
        {{ episode.air_date }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EpisodesBlock",
    props: {
      episode: {
        type: Object,
        required: true,
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
