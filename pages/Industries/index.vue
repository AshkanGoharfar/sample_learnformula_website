<template>
  <div>
    <h2>Welcome to the most reputed online learning platform on the web</h2>
    <h5 class="title">
      Take Control over your Career through Professional Development Courses,
      Packages and Certificate Programs
    </h5>
    <SearchIndustries v-on:search-text="searchText" />

    <div
      v-if="
        industriesData.industries.length < industriesData.totalNumOfIndustries
      "
    >
      <Industry
        v-for="industry in industriesData.industries"
        :key="industry.id"
        :id="industry.id"
        :industry="industry.joke"
      />
    </div>
    <h4>Popular designations</h4>
    <br />
    <v-row class="ma-4" justify="center" margin="3px">
      <v-chip
        v-for="industry in industriesData.industries"
        :key="industry.id"
        class="ma-2"
        outlined
        color="trasnparent"
      >
        {{ industry.joke.split(/\s+/)[0] }}
      </v-chip>
    </v-row>
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
      industriesData: {
        industries: [],
        totalNumOfIndustries: 0,
      },
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

      this.industriesData.industries = res.data.results;
      this.industriesData.totalNumOfIndustries = res.data.results.length;
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

        this.industriesData.industries = res.data.results;
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
.popular-designation {
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem; */

  /* border-bottom: 1px dotted #ccc; */
}
.header .title {
  font-size: 1rem;
  color: #526488;
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
.title {
  font-size: 0.7rem;
  font-weight: normal;
}
.ma-2 {
  margin: 5px 5px 5px 5px;
}
</style>
