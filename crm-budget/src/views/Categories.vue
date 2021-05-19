<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <CategoryCreate @createdCategory="addCategory" />
        <CategoryEdit
          :categories="categories"
          @updated="updateCategories"
          :key="categories.length + updateCount"
          v-if="categories.length"
        />
        <div class="center" v-else>Категорий пока нет</div>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '@/components/CategoryCreate';
import CategoryEdit from '@/components/CategoryEdit';
export default {
  name: 'Categories',
  components: {
    CategoryCreate,
    CategoryEdit,
  },
  data() {
    return {
      categories: [],
      updateCount: 0,
    };
  },
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories');
  },
  methods: {
    addCategory(newCategory) {
      this.categories.push(newCategory);
    },
    updateCategories(category) {
      const index = this.categories.findIndex((cat) => cat.id === category.id);
      this.categories[index].title = category.title;
      this.categories[index].limit = category.limit;
      this.updateCount++;
    },
  },
};
</script>
