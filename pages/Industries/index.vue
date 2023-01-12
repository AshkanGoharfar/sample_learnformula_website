<template>
  <div>
    <!-- v-on:search-text since we are emitting something like search.text we use v-on:search-text="searchText" -->
    <SearchIndustries v-on:search-text="searchText" />

    <div v-if="industries.length !== 20">
      <Industry
        v-for="industry in industries"
        :key="industry.id"
        :id="industry.id"
        :industry="industry.joke"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Industry from "../../components/Industry";
import SearchIndustries from "../../components/SearchIndustries";

export default {
  components: {
    Industry,
    SearchIndustries,
  },
  data() {
    return {
      industries: [],
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
      const res = await axios.get("https://icanhazdadjoke.com/search", config);

      this.industries = res.data.results;
    } catch (err) {
      console.log(err);
    }
  },

  methods: {
    async searchText(text) {
      const config = {
        headers: {
          Accept: "application/json",
        },
      };

      try {
        const res = await axios.get(
          `https://icanhazdadjoke.com/search?term=${text}`,
          config
        );

        this.industries = res.data.results;
      } catch (err) {
        console.log(err);
      }
    },
  },

  head() {
    return {
      title: "Industries",
      meta: [
        {
          hid: "description",
          name: "discritopn",
          content: "Best place to learn new skilss",
        },
      ],
    };
  },
};
</script>

<style>
</style>
