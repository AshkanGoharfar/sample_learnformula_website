<template>
  <v-container>
    <h1>Sign in</h1>
    <v-text-field
      v-model="username"
      label="Username"
      v-on:keyup.enter="login"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      type="password"
      v-on:keyup.enter="login"
      required
    ></v-text-field>

    <v-btn color="success" @click="login"> Login </v-btn>
    <!--  <UserAuthForm buttonText="Sign in" :submitForm="LoginUser" /> -->
  </v-container>
</template>

<script>
export default {
  // components: {
  //   UserAuthForm,
  // },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$auth
        .loginWith("local", {
          data: {
            username: this.username,
            password: this.password,
          },
        })
        .then((response) => (window.location.href = "/industries"));
    },
  },
};
</script>


<style>
</style>