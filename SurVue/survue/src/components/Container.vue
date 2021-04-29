<template>
  <div>
    <NameForm />
    <id-form />
    <birth-form />
    <div id="btns-nav">
      <button>Previous</button>
      <button>Next</button>
    </div>
  </div>
</template>

<script>
import NameForm from "./NameForm";
import IdForm from "./IdForm";
import BirthForm from './BirthForm.vue';

export default {
  name: "AppContainer",
  components: {
    NameForm,
    IdForm,
    BirthForm,
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
