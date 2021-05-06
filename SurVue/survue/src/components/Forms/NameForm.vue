<template>
  <div class="form-input-div">
    <div class="input-row" style="border-bottom:1px solid rgb(129, 129, 129); padding-bottom:40px;">
      <label for="user-name-input">Enter your name</label>
      <input
        id="user-name-input"
        type="text"
        v-model="user_name"
        placeholder="Joe"
      />
    </div>
    <div class="input-row">
      <label for="user-family-name-input">Enter your last name</label>
      <input
        id="user-family-name-input"
        type="text"
        v-model="user_family_name"
        placeholder="Swanson"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "NameForm",
  data() {
    return {
      user_name: "",
      user_family_name: "",
    };
  },
};
</script>

<style scoped>
* {
  font-size: 20px;
}

.input-row {
  display: flex;
  margin: 50px auto;
  width: 50%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: baseline;
}

label {
  width: 200px;
}

label::after {
  content: " :";
}

input[type="text"] {
  padding: 5px 13px;
  height: 50px;
  outline: none;
  border-radius: 10px;
  border: 0px solid black;
  background-color: #40c98d;
  color: white;
  width: 300px;
}

input[type="text"]:focus {
  background-color: white;
  color: #27394a;
  border: 1px solid #40c98d;
}

input[type="text"]:hover {
  background-color: rgb(189, 188, 188);
  color: #27394a;
}
</style>

<style>
.form-input-div {
  width: 100%;
  margin: 100px 0;
}
</style>