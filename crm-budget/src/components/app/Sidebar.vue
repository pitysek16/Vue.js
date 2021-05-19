<template>
  <ul class="sidenav">
    <router-link
      v-slot="{ href, navigate, isActive, isExactActive }"
      :to="link.url"
      v-for="link in links"
      :key="link.url"
      exact
    >
      <li :class="[isActive && 'active', isExactActive && 'active']">
        <a :href="href" @click="navigate">{{ link.title }}</a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      links: [
        { title: 'Счет', url: '/' },
        { title: 'История', url: '/history' },
        { title: 'Планирование', url: '/planning' },
        { title: 'Новая запись', url: '/record' },
        { title: 'Категории', url: '/categories' },
      ],
    };
  },
};
</script>

<style scoped></style>
