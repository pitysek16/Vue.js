<template>
  <div>
    <div class="page-title">
      <h3>Планирование</h3>
      <h4>{{ info.bill | currency('UAH') }}</h4>
    </div>
    <div class="center" v-if="!categories.length">
      Категорий пока нет.
      <router-link to="/categories">Добавить новую категорию</router-link>
    </div>

    <section v-else>
      <div v-for="cat in categories" :key="cat.id">
        <p>
          <strong>{{ cat.title }}</strong>
          {{ cat.spend | currency('UAH') }} из {{ cat.limit | currency('UAH') }}
        </p>
        <div class="progress">
          <div
            class="determinate"
            :class="[cat.progressColor]"
            :style="{ width: cat.progressPercent + '%' }"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Plane',
  data() {
    return {
      categories: [],
    };
  },
  computed: {
    ...mapGetters(['info']),
  },
  async mounted() {
    const records = await this.$store.dispatch('fetchRecords');
    const categor = await this.$store.dispatch('fetchCategories');

    this.categories = categor.map((cat) => {
      const spend = records
        .filter((rec) => rec.categoryId === cat.id)
        .filter((rec) => rec.type === 'outcome')
        .reduce((total, record) => {
          return (total = total + record.amount);
        }, 0);
      const percent = (100 * spend) / cat.limit;
      const progressPercent = percent > 100 ? 100 : percent;

      const progressColor =
        percent < 60 ? 'green' : percent < 100 ? 'yellow' : 'red';

      return {
        ...cat,
        progressPercent,
        progressColor,
        spend,
      };
    });
  },
};
</script>
