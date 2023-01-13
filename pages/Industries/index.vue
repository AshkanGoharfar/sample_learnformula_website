<template>
  <v-flex full-width v-show="isLoaded">
    <h2>Welcome to the most reputed online learning platform on the web</h2>
    <h5 class="title">
      Take Control over your Career through Professional Development Courses,
      Packages and Certificate Programs
    </h5>
    <br />
    <br />
    <SearchIndustries v-on:search-text="searchText" />

    <!-- <div
      v-if="
        industriesData.industries.length < industriesData.totalNumOfIndustries
      "
    > -->
    <div v-show="isSearched">
      <Industry
        v-for="industry in industriesData.industries"
        :key="industry.id"
        :id="industry.id"
        :industry="industry.joke"
      />
    </div>
    <br />
    <br />
    <v-spacer />
    <h4>Popular designations</h4>
    <br />
    <v-row class="ma-4" justify="center" margin="3px">
      <v-chip
        v-for="industry in industriesData.industries"
        :key="industry.id"
        class="ma-2"
        outlined
        color="trasnparent"
        :to="'industries/' + industry.id"
      >
        {{ industry.joke.split(/\s+/)[0] }}
      </v-chip>
    </v-row>
    <br />
    <br />
    <!-- <CourseCard
      v-for="industry in industriesData.industries"
      :key="industry.id"
      :id="industry.id"
      :industry="industry.joke"
    /> -->

    <v-row>
      <v-col
        cols="12"
        sm="4"
        lg="3"
        v-for="industry in industriesData.industries"
        :key="industry.id"
      >
        <CourseCard :id="industry.id" :industry="industry.joke" />
      </v-col>
    </v-row>
  </v-flex>
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
      },
      isLoaded: false,
      isSearched: false,
    };
  },

  // In order for our requesrt to run as soon as this component loads we are gonna  use a life cycle method called created
  async created() {
    // We make config object with header object, this is what we do with axios
    // So in the config we are gonna make our request
    // const config = {
    //   headers: {
    //     Accept: "application/json",
    //   },
    // };

    // try {
    //   const res = await axios.get("https://icanhazdadjoke.com/search", config);

    //   this.industriesData.industries = res.data.results;
    //   this.industriesData.totalNumOfIndustries = res.data.results.length;
    //   this.isLoaded = true;
    // } catch (err) {
    //   console.log(err);
    // }

    this.$store
      .dispatch("industry/fetchIndustries", { term: "" })
      .then((industries) => {
        console.log("length", typeof industries);
        this.industriesData.industries = industries;
        this.isLoaded = true;

        console.log("industries ", this.industriesData.industries);
      });
  },

  methods: {
    async searchText(term) {
      // const config = {
      //   headers: {
      //     Accept: "application/json",
      //   },
      // };

      // try {
      //   const res = await axios.get(
      //     `https://icanhazdadjoke.com/search?term=${text}`,
      //     config
      //   );

      //   this.industriesData.industries = res.data.results;
      // } catch (err) {
      //   console.log(err);
      // }

      this.$store
        .dispatch("industry/fetchIndustries", { term: term })
        .then((industries) => {
          console.log("length", typeof industries);
          this.industriesData.industries = industries;
          this.isSearched = true;
          console.log("industries ", this.industriesData.industries);
        });
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
