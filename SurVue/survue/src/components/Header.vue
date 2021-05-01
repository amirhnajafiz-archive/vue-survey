<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item mr-3">
            <div :class="['nav-boxing', { active: currentRouteName == '/' }]">
              <router-link tag="a" :to="'/'">Home</router-link>
            </div>
          </li>
          <li class="nav-item">
            <div
              :class="['nav-boxing', { active: currentRouteName == '/survey' }]"
            >
              <router-link tag="a" :to="'/survey'">Survey</router-link>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" v-on:submit.prevent="">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    currentRouteName() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.nav-boxing {
  padding: 7px;
  border-radius: 2px;
}

.active {
  background-color: #40c98d;
  color: #ffffff;
}
</style>