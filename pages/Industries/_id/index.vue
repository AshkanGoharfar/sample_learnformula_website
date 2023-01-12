<template>
  <!-- <div>{{ $route.params.id }}</div> -->
  <!-- <div>{{ industry }}</div> -->
  <div>
    <nuxt-link to="/industries">Backs To Industries</nuxt-link>
    <h2>{{ industry }}</h2>
    <hr />
    <small>industry ID: {{ $route.params.id }}</small>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      industry: "",
    };
  },

  // In order for our requesrt to run as soon as this component loads we are gonna  use a life cycle method called created
  async created() {
    // We make config object with header object, this is what we do with axios
    // So in the config we are gonna make our request
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `https://icanhazdadjoke.com/j/${this.$route.params.id}`,
        config
      );
      // const found = res.results.find(element[0] === id);

      // console.log(res.data);

      this.industry = res.data.joke;
    } catch (err) {
      console.log(err);
    }
  },
  head() {
    return {
      title: this.industry,
      meta: [
        {
          hid: "description",
          name: "discritopn",
          content: "Best place for learning new skilss",
        },
      ],
    };
  },
};
</script>

<style>
</style>
