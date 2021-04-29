<template>
  <div class="form-input-div">
    
  </div>
</template>

<script>
export default {
  
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
  background-color: #25473a;
  color: white;
  width: 300px;
}

input[type="text"]:focus {
  background-color: white;
  color: #25473a;
  border: 1px solid #25473a;
}

input[type="text"]:hover {
  background-color: rgb(189, 188, 188);
  color: #193328;
}
</style>

<style>
.form-input-div {
  width: 100%;
  margin: 100px 0;
}
</style>