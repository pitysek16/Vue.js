<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading" />
      <div class="row" v-else>
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
import { mapActions } from 'vuex';
export default {
  name: 'Categories',
  metaInfo() {
    return {
      title: 'Категории',
    };
  },
  components: {
    CategoryCreate,
    CategoryEdit,
  },
  data() {
    return {
      categories: [],
      updateCount: 0,
      loading: true,
    };
  },
  async mounted() {
    this.categories = await this.fetchCategories();
    this.loading = false;
  },
  methods: {
    ...mapActions(['fetchCategories']),
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
