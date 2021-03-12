<template>
  <div class="col-8">
    <h1>Forgot your password?</h1>
    <b-form @submit.prevent="onSubmit"  :model="form" novalidate="novalidate">
      <b-form-group id="input-group-1" label="Email:" label-for="input-1" class="text-left mt-3">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
     
      <b-overlay
      :show="loginInProgress"
      rounded
      opacity="0.6"
      spinner-small
      spinner-variant="primary"
      class="d-inline-block"
    >
      <b-button
        :disabled="loginInProgress"
        variant="primary"
        type="submit"
        class="mb-2"
      >
        Resert password
      </b-button>
    </b-overlay>

    </b-form>

    <div>
      <p v-if="errors.length" class="text-left text-danger mb-3">
        <b>Please correct the errors:</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>
    </div>

     <div class="mt-4">
      <div>
        <span>Go back to</span>
        <router-link :to="{ name: 'Login' }">
          Login Page
        </router-link>
      </div>
    </div>

   
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

  export default {
    name: "ResertPasswordForm",
    data() {
      return {
        errors: [],
        form: {
          email: '',
        },
        show: true,
      };
    },
    computed: {
      ...mapGetters('resertPassword', ['loginInProgress']),
    },
    methods: {
      ...mapActions('resertPassword', ['resertPassword']),
      onSubmit() {
      this.errors = [];


      if (!this.form.email) {
        this.errors.push('Enter your email.');
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push('Please enter a valid email address.');
      }

      if (!this.errors.length) {
        this.resertPassword({ ... this.form });
        setTimeout(function() {this.$router.push({ name: "Login" });}.bind(this), 4000);
        return true;
      }
    
    },
    validEmail: (email) =>  {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    },
  };
</script>




<style>

</style>
