<template>
  <div class="form-input-div">
    <div class="input-row" style="border-bottom:1px solid rgb(129, 129, 129); padding-bottom:40px;">
      <label for="user-id-input">Enter your national ID</label>
      <input
        id="user-id-input"
        type="number"
        v-model="user_id"
        placeholder="092XXXXXXX"
      />
    </div>
    <div class="input-row">
      <label for="user-student-id-input">Enter your student number</label>
      <input
        id="user-student-id-input"
        type="number"
        v-model="user_student_number"
        placeholder="9831065"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "IdForm",
  data() {
    return {
      user_id: "",
      user_student_number: "",
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
  width: 250px;
}

label::after {
  content: " :";
}

input[type="number"] {
  padding: 5px 13px;
  height: 50px;
  outline: none;
  border-radius: 10px;
  border: 0px solid #000000;
  background-color: #40c98d;
  color: white;
  width: 300px;
}

input[type="number"]:focus {
  background-color: white;
  color: #27394a;
  border: 1px solid #40c98d;
}

input[type="number"]:hover {
  background-color: rgb(189, 188, 188);
  color: #27394a;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>

<style>
.form-input-div {
  width: 100%;
  margin: 100px 0;
}
</style>