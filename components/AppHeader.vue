<template>
  <v-flex full-width ma-0 pa-0>
    <header class="header">
      <h1 class="title">Learn Formula Sample Website</h1>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/industries">Industries</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </header>
  </v-flex>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dotted #ccc;
}
.header .title {
  font-size: 1rem;
  color: #526488;
  margin-right: 5px;
}
.header ul {
  display: flex;
}
.header a {
  display: inline-block;
  background: #333;
  color: #fff;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
}
.container {
  margin: 0px;
}
</style>
