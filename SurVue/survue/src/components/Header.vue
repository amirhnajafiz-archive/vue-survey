<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item ">
            <div :class="['nav-boxing', { active: currentRouteName == '/' }]">
              <router-link to="/" custom v-slot="{ navigate }">
                <a @click="navigate" role="link">Home</a>
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <div
              :class="['nav-boxing', { active: currentRouteName == '/survey' }]"
            >
              <router-link to="/survey" custom v-slot="{ navigate }">
                <a @click="navigate" role="link">Survey</a>
              </router-link>
            </div>
          </li>
        </ul>
        <div class="mr-5"> 
          <span>URL</span>
          <span>{{ this.$store.getters.getURL }}</span>
        </div>
        <form class="form-inline my-2 my-lg-0" v-on:submit.prevent="setTheURL">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            v-model="userURL"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Set URL
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data(){
    return {
      userURL: ""
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.path;
    },
  },
  methods: {
    setTheURL()
    {
      this.$store.commit("setURL", this.userURL)
      this.userURL = ""
    }
  }
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