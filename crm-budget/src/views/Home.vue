<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <Loader v-if="loading" />
    <div class="row" v-else>
      <HomeBill :rates="currency.rates" />
      <HomeCurrency :rates="currency.rates" :date="currency.date" />
    </div>
  </div>
</template>

<script>
import HomeCurrency from '@/components/HomeCurrency';
import HomeBill from '@/components/HomeBill';
import { mapActions } from 'vuex';

export default {
  name: 'home',
  metaInfo() {
    return {
      title: 'Главная',
    };
  },
  data() {
    return {
      loading: true,
      currency: null,
    };
  },
  async mounted() {
    this.currency = await this.fetchCurrency();
    this.loading = false;
  },
  components: {
    HomeBill,
    HomeCurrency,
  },
  methods: {
    async refresh() {
      this.loading = true;
      this.currency = await this.fetchCurrency();
      this.loading = false;
    },
    ...mapActions(['fetchCurrency']),
  },
};
</script>
