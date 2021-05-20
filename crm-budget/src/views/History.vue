<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>

    <div class="history-chart">
      <canvas></canvas>
    </div>

    <Loader v-if="loading" />
    <div class="center" v-else-if="!records.length">
      Записей пока нет.
      <router-link to="/record">Добавить новую запись</router-link>
    </div>

    <section v-else>
      <HistoryTable :records="records" />
    </section>
  </div>
</template>

<script>
import HistoryTable from '@/components/HistoryTable';
export default {
  name: 'History',
  components: {
    HistoryTable,
  },
  data() {
    return {
      categories: [],
      records: [],
      loading: true,
    };
  },
  async mounted() {
    const records = await this.$store.dispatch('fetchRecords');
    this.categor = await this.$store.dispatch('fetchCategories');

    this.records = records.map((record) => {
      return {
        ...record,
        categoryTitle: this.categor.find((c) => c.id === record.categoryId)
          .title,
        typeClass: record.type === 'income' ? 'green' : 'red',
        typeTitle: record.type === 'income' ? 'Доход' : 'Расход',
      };
    });
    this.loading = false;
  },
};
</script>
