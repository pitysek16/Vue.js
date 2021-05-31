<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>

    <Loader v-if="loading" />
    <div class="center" v-else-if="!records.length">
      Записей пока нет.
      <router-link to="/record">Добавить новую запись</router-link>
    </div>

    <section v-else>
      <HistoryTable :records="items" />
    </section>

    <paginate
      v-model="page"
      :page-count="pageCount"
      :click-handler="pageChange"
      :prev-text="'Назад'"
      :next-text="'Вперед'"
      :container-class="'pagination'"
    >
    </paginate>
  </div>
</template>

<script>
import HistoryTable from '@/components/HistoryTable';
import paginationMixin from '@/mixins/pagination.mixin';
import { mapActions } from 'vuex';
export default {
  name: 'History',
  metaInfo() {
    return {
      title: 'История',
    };
  },
  components: {
    HistoryTable,
  },
  mixins: [paginationMixin],
  data() {
    return {
      records: [],
      loading: true,
    };
  },
  async mounted() {
    this.records = await this.fetchRecords();
    const categories = await this.fetchCategories();
    this.setupPagination(
      this.records.map((record) => {
        return {
          ...record,
          categoryTitle: categories.find((c) => c.id === record.categoryId)
            .title,
          typeClass: record.type === 'income' ? 'green' : 'red',
          typeTitle: record.type === 'income' ? 'Доход' : 'Расход',
        };
      })
    );
    this.loading = false;
  },
  methods: {
    ...mapActions(['fetchRecords', 'fetchCategories']),
  },
};
</script>
