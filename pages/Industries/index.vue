<template>
  <div>
    <h2>Welcome to the most reputed online learning platform on the web</h2>
    <h5 class="title">
      Take Control over your Career through Professional Development Courses,
      Packages and Certificate Programs
    </h5>
    <br />
    <br />
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
    <br />
    <br />
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
    <br />

    <CourseCard
      v-for="industry in industriesData.industries"
      :key="industry.id"
      :id="industry.id"
      :industry="industry.joke"
    />

    <!-- <v-container class="grey lighten-5">
      <v-row no-gutters>
        <CourseCard
          v-for="industry in industriesData.industries"
          :key="industry.id"
          :id="industry.id"
          :industry="industry.joke"
        />
      </v-row>
    </v-container> -->

    <!-- <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <v-card class="pa-2" outlined tile> 1 of three columns </v-card>
        </v-col>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <v-card class="pa-2" outlined tile> 2 of olumns </v-card>
        </v-col>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <v-card class="pa-2" outlined tile>
            3 of three columns asasdsdasd
          </v-card>
        </v-col>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <v-card class="pa-2" outlined tile> 4 of three columns sasas</v-card>
        </v-col>
        <v-col v-for="n in 1" :key="n" cols="12" sm="4">
          <v-card class="pa-2" outlined tile> 5 of three columns </v-card>
        </v-col>
      </v-row>
    </v-container> -->

    <!-- <v-container>
      <v-row no-gutters>
        <v-col md="6"> aaa </v-col>
        <v-col md="6"> bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb </v-col>
        <v-col md="6"> aaa </v-col>
        <v-col md="6"> bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb </v-col>
        <v-col md="6"> aaa </v-col>
        <v-col md="6"> bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb </v-col>
        <v-col md="6"> aaa </v-col>
        <v-col md="6"> bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb </v-col>
        <v-col md="6"> aaa </v-col>
        <v-col md="6"> bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
import axios from "axios";
import Industry from "../../components/Industry";
import SearchIndustries from "../../components/SearchIndustries";
import CourseCard from "../../components/CourseCard";

export default {
  components: {
    Industry,
    SearchIndustries,
    CourseCard,
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
