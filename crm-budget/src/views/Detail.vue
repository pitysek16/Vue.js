<template>
  <div>
    <Loader v-if="loading" />
    <div v-else-if="oneRecord">
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb">История</router-link>
        <a @click.prevent class="breadcrumb">
          {{ oneRecord.typeTitle }}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card" :class="[oneRecord.typeClass]">
            <div class="card-content white-text">
              <p>Описание: {{ oneRecord.description }}</p>
              <p>Сумма: {{ oneRecord.amount | currency('UAH') }}</p>
              <p>Категория: {{ oneRecord.categoryTitle }}</p>
              <small>{{ oneRecord.date | date() }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center" v-else>
      Такая запись не найдена.
      <router-link to="/record">Добавить новую запись</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Detail',
  metaInfo() {
    return {
      title: 'Подробнее',
    };
  },
  data() {
    return {
      oneRecord: '',
      loading: true,
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    const record = await this.fetchRecordById(id);
    const category = await this.fetchCategoryById(record.categoryId);

    this.oneRecord = {
      ...record,
      categoryTitle: category.title,
      typeTitle: record.type === 'income' ? 'Доход' : 'Расход',
      typeClass: record.type === 'income' ? 'green' : 'red',
    };

    this.loading = false;
  },
  methods: {
    ...mapActions(['fetchRecordById', 'fetchCategoryById']),
  },
};
</script>
