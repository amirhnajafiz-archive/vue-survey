<template>
  <div>
    <web-sitelogo />
    <NameForm v-show="0 == index" />
    <IdForm v-show="1 == index" />
    <BirthForm v-show="2 == index" />
    <UniversityForm v-show="3 == index" />
    <Survey v-show="4 == index" />
    <div id="btns-nav">
      <button id="pre-btn" @click="prev_index">Previous</button>
      <button id="next-btn" @click="next_index">Next</button>
    </div>
    <div class="row-submit" v-if="4 == index">
      <button type="button" class="btn btn-primary" @click="send_data">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import NameForm from "./NameForm";
import IdForm from "./IdForm";
import BirthForm from "./BirthForm.vue";
import UniversityForm from "./UniversityForm.vue";
import Survey from "./Survey.vue";
import WebSitelogo from "./WebSitelogo.vue";

export default {
  name: "AppContainer",
  data() {
    return {
      index: 0,
    };
  },
  components: {
    NameForm,
    IdForm,
    BirthForm,
    UniversityForm,
    Survey,
    WebSitelogo,
    NameForm,
  },
  methods: {
    next_index() {
      if (this.index < 4) this.index++;
    },
    prev_index() {
      if (this.index > 0) this.index--;
    },
    send_data() {
      console.log(this.$route.path);
    },
  },
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

#btns-nav > button {
  background-color: #40c98d;
  color: #ffffff;
  padding: 10px;
  outline: none;
  border: 0px solid black;
  border-radius: 10px;
  width: 100px;
}

#btns-nav > button:hover {
  background-color: #8f8f8f;
  color: #27394a;
}

.row-submit {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 30px 0;
}

.row-submit > button {
  padding: 10px 20px;
  font-size: 20px;
}
</style>
