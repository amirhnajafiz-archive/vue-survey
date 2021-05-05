<template>
  <div class="survey-container">
    <label class="new-label">Select your favorite programming languages</label>
    <div class="input-row">
      <span v-for="item in programming_languages" :key="item.id">
        <label v-bind:for="'pitem' + item.id">{{ item.title }}</label>
        <input
          v-bind:id="'pitem' + item.id"
          type="checkbox"
          v-bind:value="item.value"
          v-model="favorite_programming_language"
        />
      </span>
    </div>
    <label class="new-label">Select your favorite front-end framework</label>
    <div class="input-row">
      <span v-for="item in front_frameworks" :key="item.id">
        <label v-bind:for="'fitem' + item.id">{{ item.title }}</label>
        <input
          v-bind:id="'fitem' + item.id"
          type="radio"
          v-bind:value="item.value"
          v-model="favorite_front_end"
        />
      </span>
    </div>
    <label class="new-label">Select your favorite back-end framework</label>
    <div class="input-row">
      <span v-for="item in back_framworks" :key="item.id">
        <label v-bind:for="'bitem' + item.id">{{ item.title }}</label>
        <input
          v-bind:id="'bitem' + item.id"
          type="radio"
          v-bind:value="item.value"
          v-model="favorite_back_end"
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorite_programming_language: [],
      favorite_back_end: "",
      favorite_front_end: "",
      programming_languages: [
        { id: 0, value: "C", title: "C programming language" },
        { id: 1, value: "C++", title: "CPP" },
        { id: 2, value: "C#", title: "C sharp" },
        { id: 3, value: "Java", title: "Java programming language" },
        { id: 4, value: "Python", title: "Python / Python3" },
        { id: 5, value: "JS", title: "Javascript" },
        { id: 6, value: "Go", title: "Golang" },
      ],
      front_frameworks: [
        { id: 0, value: "Vue", title: "Vue.js" },
        { id: 1, value: "React", title: "React.js" },
        { id: 2, value: "Angular", title: "Angular" },
        { id: 3, value: "JQ", title: "JQuery" },
      ],
      back_framworks: [
        { id: 0, value: "PHP", title: "PHP / Laravel" },
        { id: 1, value: "Node", title: "Node js" },
        { id: 2, value: "ASP", title: "ASP.NET" },
        { id: 3, value: "Go", title: "Golang" },
        { id: 4, value: "Django", title: "Django" },
      ],
    };
  },
  methods: {
    getData() {
      let data = {};
      data[
        "favorite_programming_language"
      ] = this.favorite_programming_language;
      data["favorite_back_end"] = this.favorite_back_end;
      data["favorite_front_end"] = this.favorite_front_end;
      return data;
    },
  },
};
</script>

<style scoped>
* {
  font-size: 20px;
}

.survey-container {
  margin-top: 50px;
}

.input-row {
  display: flex;
  margin: 50px auto;
  width: 20%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: baseline;
  align-items: center;
}

label {
  width: 250px;
}

label::after {
  content: " :";
}

.new-label {
  background-color: #40c98d;
  color: white;
  margin: 10px auto;
  width: 500px;
  display: block;
  padding: 20px;
  border-radius: 10px;
}

input[type="date"] {
  text-align: center;
  padding: 5px 13px;
  height: 50px;
  outline: none;
  border-radius: 10px;
  border: 0px solid black;
  background-color: #40c98d;
  color: white;
  width: 300px;
}

input[type="date"]:focus {
  background-color: white;
  color: #27394a;
  border: 1px solid #40c98d;
}

input[type="date"]:hover {
  background-color: rgb(189, 188, 188);
  color: #27394a;
}
</style>