<template>
  <div class="form-input-div">
    <div class="input-row">
      <label for="birthdate-input">Please enter your birthday date</label>
      <input id="birthdate-input" type="date" v-model="birthDate" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BirthForm",
  data() {
    return {
      birthDate: undefined,
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
  width: 300px;
}

label::after {
  content: " :";
}

input[type="date"] {
  text-align: center;
  padding: 5px 13px;
  height: 50px;
  outline: none;
  border-radius: 10px;
  border: 0px solid black;
  background-color: #25473a;
  color: white;
  width: 300px;
}

input[type="date"]:focus {
  background-color: white;
  color: #25473a;
  border: 1px solid #25473a;
}

input[type="date"]:hover {
  background-color: rgb(189, 188, 188);
  color: #193328;
}
</style>