<template>
  <form @submit.prevent="onSubmit">
    <input
      class="search-box"
      type="text"
      v-model="text"
      placeholder="Search Industries..."
    />
    <button type="submit">
      <img
        src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-24.png"
        alt="buttonpng"
        border="0"
      />
    </button>
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
.search-box {
  border: 1px solid lightgray;
  width: 60%;
  height: 40px;
  padding-left: 20px;
  border-radius: 20px;
}
</style>
