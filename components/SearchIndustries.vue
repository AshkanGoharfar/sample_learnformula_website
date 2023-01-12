<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="text" placeholder="Search Industries..." />
    <input type="submit" value="Search Industries" />
  </form>
</template>

<script>
export default {
  name: "SearchIndustries",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onSubmit() {
      // filter Industries based on search text (input)
      this.$emit("search-text", this.text);
      this.text = "";
    },
  },
};
</script>

<style>
</style>
