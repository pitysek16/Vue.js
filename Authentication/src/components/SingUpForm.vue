<template>
  <div class="col-8">
    <h1>Sing Up!</h1>
    <b-form @submit.prevent="onSubmit" :model="form" novalidate="novalidate">
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
        class="text-left"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Password:"
        label-for="input-2"
        class="text-left"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          :type="passwordFieldType"
          placeholder="Enter password"
          required
        >
        </b-form-input>
        <template>
          <b-icon-eye-fill
            @click="switchVisibility"
            v-if="passwordFieldType === 'password'"
          ></b-icon-eye-fill>
          <b-icon-eye-slash-fill
            @click="switchVisibility"
            v-else
          ></b-icon-eye-slash-fill>
        </template>
      </b-form-group>

       <b-form-group
        id="input-group-3"
        label="Confirm Password:"
        label-for="input-3"
        class="text-left"
      >
        <b-form-input
          id="input-2"
          v-model="form.password2"
          :type="passwordFieldType"
          placeholder="Enter password again"
          required
        >
        </b-form-input>
        <template>
          <b-icon-eye-fill
            @click="switchVisibility"
            v-if="passwordFieldType === 'password'"
          ></b-icon-eye-fill>
          <b-icon-eye-slash-fill
            @click="switchVisibility"
            v-else
          ></b-icon-eye-slash-fill>
        </template>
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
           Sing Up
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
        <span>Already have an account?</span>
        <router-link :to="{ name: 'Login' }">
          Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";

  export default {
    name: "SingUp",
    data() {
      return {
        errors: [],
        form: {
          email: "",
          password: "",
          password2: "",
        },
        show: true,
        passwordFieldType: "password",
      };
    },
    computed: {
      ...mapGetters('singUp', ['loginInProgress']),
    },
    methods: {
      ...mapActions("singUp", ["singUp"]),
      onSubmit() {
        this.errors = [];

        if (!this.form.password) {
          this.errors.push("Enter your password.");
        } else if (!this.validPass(this.form.password)) {
          this.errors.push("Password must be at least 6 characters");
        } else if (this.form.password != this.form.password2) {
          this.errors.push("The password must match the one above");
        }
        if (!this.form.email) {
          this.errors.push("Enter your email.");
        } else if (!this.validEmail(this.form.email)) {
          this.errors.push("Please enter a valid email address.");
        }

        if (!this.errors.length) {
          this.singUp({ ...this.form });
          return true;
        }
      },
      validEmail: (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      validPass: (pass) => {
        return pass.length > 5;
      },
      switchVisibility() {
        this.passwordFieldType =
          this.passwordFieldType === "password" ? "text" : "password";
      },
    },
  };
</script>

<style></style>
