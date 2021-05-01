<template>
  <div>
    <NameForm v-show="0 == index" />
    <IdForm v-show="1 == index" />
    <BirthForm v-show="2 == index" />
    <UniversityForm v-show="3 == index" />
    <Survey v-show="4 == index" />
    <div id="btns-nav">
      <button id="pre-btn" @click="prev_index">Previous</button>
      <button id="next-btn" @click="next_index">Next</button>
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
      index: 0,
    }
  },
  components: {
    NameForm,
    IdForm,
    BirthForm,
    UniversityForm,
    Survey,
    NameForm,
  },
  methods: {
    next_index() {
      if (this.index < 4)
        this.index++;
    },
    prev_index() {
      if (this.index > 0)
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

#btns-nav > button {
  background-color: #25473a;
  color: #ffffff;
  padding: 10px;
  outline: none;
  border: 0px solid black;
  border-radius: 10px;
  width: 100px;
}

#btns-nav > button:hover {
  background-color: #8f8f8f;
  color: #25473a;
}
</style>
