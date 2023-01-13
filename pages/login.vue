<template>
  <v-flex full-width>
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

    <v-btn
      :style="{
        backgroundColor: 'rgba(80,52,244, 1)',
        borderRadius: '20px',
        color: 'white',
        marginLeft: '5px',
        marginTop: '25px',
      }"
      color="success"
      @click="login"
    >
      Login
    </v-btn>
    <!--  <UserAuthForm buttonText="Sign in" :submitForm="LoginUser" /> -->
  </v-flex>
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