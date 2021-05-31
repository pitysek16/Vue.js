<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Редактировать</h4>
      </div>

      <form @submit.prevent="submitFixCategories">
        <div class="input-field">
          <select ref="select" v-model="current">
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">
              {{ cat.title }}
            </option>
          </select>
          <label>Выберите категорию</label>
        </div>

        <div class="input-field">
          <input
            id="name"
            type="text"
            v-model="title"
            :class="{
              invalid: $v.title.$dirty && !$v.title.required,
            }"
          />
          <label for="name">Название</label>
          <span
            class="helper-text invalid"
            v-if="$v.title.$dirty && !$v.title.required"
            >Введите название категории</span
          >
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            v-model.number="limit"
            :class="{
              invalid:
                ($v.limit.$dirty && !$v.limit.required) ||
                ($v.limit.$dirty && !$v.limit.minValue),
            }"
          />
          <label for="limit">Лимит</label>
          <span
            class="helper-text invalid"
            v-if="$v.limit.$dirty && !$v.limit.minValue"
            >Введите минимальную величину
            {{ $v.limit.$params.minValue.min }}</span
          >
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Обновить
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css';
import { required, minValue } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  name: 'CategoryEdit',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      select: null,
      title: '',
      limit: 1,
      current: null,
    };
  },
  validations: {
    title: { required },
    limit: { required, minValue: minValue(10) },
  },
  mounted() {
    this.select = M.FormSelect.init(this.$refs.select);
    M.updateTextFields();
  },
  methods: {
    ...mapActions(['updateCategory']),
    async submitFixCategories() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      try {
        const categoryData = {
          title: this.title,
          limit: this.limit,
          id: this.current,
        };
        await this.updateCategory(categoryData);
        this.$message('Категория обновлена');
        this.$emit('updated', categoryData);
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    current(catId) {
      const { title, limit } = this.categories.find((cat) => cat.id === catId);
      this.title = title;
      this.limit = limit;
    },
  },
  created() {
    const { id, limit, title } = this.categories[0];
    this.title = title;
    this.limit = limit;
    this.current = id;
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  },
};
</script>
