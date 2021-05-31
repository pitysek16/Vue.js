<template>
  <form class="card auth-card" @submit.prevent="submitRegisterForm">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
        />
        <label for="email">e-mail</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >Введите ваш e-mail</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
          >Введите корректный e-mail</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
          >Введите ваш пароль</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          >Пароль должен содержать не менее 6 знаков</small
        >
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{
            invalid: $v.name.$dirty && !$v.name.required,
          }"
        />
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
          >Введите ваше имя</small
        >
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="terms" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  name: 'Register',
  metaInfo() {
    return {
      title: 'Регистрация',
    };
  },
  data() {
    return {
      email: '',
      password: '',
      name: '',
      terms: false,
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    name: { required },
    terms: { checked: (v) => v },
  },
  methods: {
    ...mapActions(['registration']),
    async submitRegisterForm() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      try {
        await this.registration(formData);
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
