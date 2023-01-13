<template>
  <div class="container">
    <!-- <AppHeader /> -->

    <!-- User Auth -->
    <!-- If true then we are gonna display username and logout button -->

    <div v-if="$auth.loggedIn">
      {{ $auth.user.email }}
      <v-btn
        @click="
          () => {
            $auth.logout();
            refresh();
          }
        "
        text
        >Logout</v-btn
      >
    </div>

    <!-- Else we will display login and register buttons -->

    <div v-else>
      <v-btn
        textColor="green"
        :style="{
          float: 'right',
          backgroundColor: 'rgba(80,52,244, 1)',
          borderRadius: '20px',
          color: 'white',
          marginLeft: '5px',
        }"
        text
        to="/register"
        >Get started</v-btn
      >
    </div>
    <v-btn
      v-if="!$auth.loggedIn"
      :style="{
        float: 'right',
        borderRadius: '20px',
      }"
      text
      to="/login"
      >Sign in</v-btn
    >
    <nuxt />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  components: {
    AppHeader,
  },

  methods: {
    refresh() {
      window.location.href = "";
    },
  },
};
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background: #f4f4f4;
}
a {
  color: #666;
  text-decoration: none;
}
ul {
  list-style: none;
}
.container {
  /* max-width: 800px; */
  margin: 2rem auto;
  overflow: hidden;
  padding: 1rem 2rem;
  background: #fff;
}
</style>