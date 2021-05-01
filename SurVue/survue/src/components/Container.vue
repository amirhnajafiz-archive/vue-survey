<template>
  <div>
    <router-view></router-view>
    <div id="btns-nav">
      <div v-if="index > 0">
        <button id="pre-btn" @click="prev_index"><router-link v-bind:to="site_routes[index-1]">Previous</router-link></button>
      </div>
      <div v-if="index < 4">
        <button id="next-btn" @click="next_index"><router-link v-bind:to="site_routes[index+1]">Next</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
import NameForm from "./NameForm";
import IdForm from "./IdForm";
import BirthForm from "./BirthForm.vue";
import UniversityForm from "./UniversityForm.vue";
import Survey from "./Survey.vue";

export default {
  name: "AppContainer",
  data()
  {
    return {
      index: 1,
      site_routes: ["/", "/id_form", "/birth_form", "/uni_form", "/survey_form"]
    }
  },
  components: {
    NameForm,
    IdForm,
    BirthForm,
    UniversityForm,
    Survey,
  },
  methods: {
    next_index() {
      this.index++;
    },
    prev_index() {
      this.index--;
    }
  }
};
</script>

<style scoped>
#btns-nav {
  display: flex;
  width: 60%;
  max-height: 50px;
  justify-content: space-between;
  margin: 30px auto;
}

#btns-nav > div > button {
  background-color: #25473a;
  color: #ffffff;
  padding: 10px;
  outline: none;
  border: 0px solid black;
  border-radius: 10px;
  width: 100px;
}

#btns-nav > div > button:hover {
  background-color: #8f8f8f;
  color: #25473a;
}
</style>
