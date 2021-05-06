<template>
  <div class="websiteheader">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
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
        <div class="mr-3">
          <span class="url-popup" v-show="show"
            >{{ "Request is sending to: "
            }}{{
              this.$store.getters.getURL == ""
                ? "No where"
                : this.$store.getters.getURL.length > 50
                ? this.$store.getters.getURL.slice(0, 50) + " ... "
                : this.$store.getters.getURL
            }}</span
          >
          <span
            class="URL-span"
            @mouseover="show = !show"
            @mouseleave="show = !show"
            @click="copytoclipboard"
            >URL</span
          >
        </div>
        <form class="form-inline my-2 my-lg-0" v-on:submit.prevent="setTheURL">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Enter the URL"
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
  data() {
    return {
      userURL: "",
      show: false,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.path;
    },
  },
  methods: {
    setTheURL() {
      this.$store.commit("setURL", this.userURL);
      this.userURL = "";
    },
    copytoclipboard() {
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = this.$store.getters.getURL;
      if (dummy.value == "") {
        return;
      }
      dummy.select();
      document.execCommand("copy");
      var msg = "URL copied to clipboard." + "\n" + dummy.value;
      alert(msg);
      document.body.removeChild(dummy);
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

.url-popup {
  background-color: #40c98d;
  color: #ffffff;
  padding: 8px 15px;
  border-radius: 10px;
  position: relative;
  top: 40px;
  right: -40px;
}

.websiteheader {
  position: sticky;
  top: 0;
}

.URL-span {
  padding: 8px 15px;
  border-radius: 10px;
  cursor: pointer;
}

.URL-span:hover {
  background-color: #40c98d;
  color: #ffffff;
}
</style>