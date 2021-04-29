<template>
  <div>
    <NameForm />
    <div id="btns-nav">
      <button>Previous</button>
      <button>Next</button>
    </div>
  </div>
</template>

<script>
import NameForm from "./NameForm";

export default {
  name: "AppContainer",
  components: {
    NameForm,
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
