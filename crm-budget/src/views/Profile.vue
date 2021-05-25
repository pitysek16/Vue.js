<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model.trim="name"
          :class="{
            invalid: $v.name.$dirty && !$v.name.required,
          }"
        />
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
          >Введите ваше имя</small
        >
      </div>

      <button
        class="btn waves-effect waves-light"
        type="submit"
        @click.prevent="submitUpdateName"
      >
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
export default {
  name: 'Profile',
  data() {
    return {
      name: '',
    };
  },
  computed: {
    ...mapGetters(['info']),
  },
  mounted() {
    this.name = this.info.name;
  },
  validations: {
    name: { required },
  },
  methods: {
    ...mapActions(['updateInfo']),
    async submitUpdateName() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      try {
        await this.updateInfo({
          name: this.name,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
