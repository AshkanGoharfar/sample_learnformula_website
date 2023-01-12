<template>
  <!-- we are gonna wrap div to nuxt-link, for routing to the industry page  -->
  <nuxt-link :to="'industries/' + id">
    <div class="industry">
      <p>
        {{ industry }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "Industry",

  // the props that we are gonna pass are gonna be industry prop and id
  props: ["industry", "id"],
};
</script>

<style>
.industry {
  padding: 1rem;
  border: 1px dotted #ccc;

  /* 1rem margin on the top and 0pm margin on the bottom */
  margin: 1rem 0pm;
}
</style>
