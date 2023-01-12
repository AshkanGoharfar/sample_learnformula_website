<template>
  <!-- we are gonna wrap div to nuxt-link, for routing to the industry page  -->
  <nuxt-link :to="'industries/' + id">
    <div class="course-card">
      <!-- <p>
        {{ industry }}
      </p>
      <p>11</p>
      <img
        src="https://dbtkvjd5m619u.cloudfront.net/images/markets/logos/d74694e4f025704e1254d20c3bd1ca65.png"
      /> -->

      <div class="card-item">
        <div class="card-body">
          <img
            class="card-img"
            src="https://dbtkvjd5m619u.cloudfront.net/images/markets/logos/d74694e4f025704e1254d20c3bd1ca65.png"
            alt=""
          />
          <h2 class="card-title center">{{ industry.split(/\s+/)[1] }}</h2>
          <p class="card-text">
            {{ industry }}
          </p>
          <div class="card-footer center">
            <a class="btn" href="">Details</a>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "CourseCard",

  // the props that we are gonna pass are gonna be industry prop and id
  props: ["industry", "id"],
};
</script>

<style>
.course-card {
  /* padding: 1rem; */
  /* border: 1px dotted #ccc; */

  /* 1rem margin on the top and 0pm margin on the bottom */
  /* margin: 1rem 0pm; */
}

.card-item {
  display: flex;
  width: 100%;
  padding: 0.5em;
}

/* ===== == = === 37.5em (600px) === = == ===== */
@media all and (min-width: 37.5em) {
  .card-item {
    width: calc(100% / 12 * 6);
  }
}
/* ===== == = === 56.25em (900px) === = == ===== */
@media all and (min-width: 56.25em) {
  .card-item {
    width: calc(100% / 12 * 4);
  }
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 0;
  background-color: #f8fff8;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.card-body p {
  flex: 1 0 auto;
  margin: 0;
}

.card-img {
  width: 100%;
  border-radius: 3px 3px 0 0;
  border-bottom-left-radius: 35px;
}

.card-img:hover {
  opacity: 0.8;
}

.card-title,
.card-text,
.card-footer {
  padding: 1em 1em 0;
}

.card-footer {
  margin-bottom: 1em;
}

.btn {
  display: inline-block;
  margin: 1rem;
  padding: 0.75rem 1.25rem;
  font: 700 1rem/1.2 Verdana, sans-serif;
  letter-spacing: 0.05rem;
  text-decoration: none;
  text-shadow: 0 1px 0 rgba(77, 77, 77, 0.5);
  background: #1e90ff;
  border-radius: 0.25rem;
  box-shadow: 0 0 1px 1px rgba(77, 77, 77, 0.5);
  color: floralwhite;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background: #add8e6;
  color: #333;
}
</style>
