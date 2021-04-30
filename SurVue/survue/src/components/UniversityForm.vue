<template>
  <div class="form-input-div">
    <div class="input-row">
      <label for="university-input">Choose your university</label>
      <select id="university-input" v-model="university_name">
        <option v-for="university in input_universities" :key="university.id">
          {{ university.name }}
        </option>
      </select>
    </div>
    <div class="input-row">
      <label for="facility-input">Choose your facility</label>
      <select id="facility-input" v-model="facility_of_student">
        <option v-for="value in facility_items" :key="value.id">
          {{ value.item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      university_name: "Other",
      facility_of_student: "",
      facility_items: [],
      input_universities: [
        {
          id: 0,
          name: "Amirkabir University of Tehran",
          values: [
            { id: 1, item: "Computer & IT" },
            { id: 2, item: "Electrics" },
            { id: 3, item: "Medical Engineering" },
          ],
        },
        {
          id: 1,
          name: "Sharif University of Tehran",
          values: [
            { id: 1, item: "Computer & IT" },
            { id: 2, item: "Electrics" },
            { id: 3, item: "Computer Science" },
          ],
        },
        {
          id: 2,
          name: "University of Tehran",
          values: [
            { id: 1, item: "Computer & IT" },
            { id: 2, item: "Computer Science" },
          ],
        },
        {
          id: 3,
          name: "Other",
          values: []
        }
      ],
    };
  },
  watch: {
    university_name: function () {
      this.input_universities.forEach((element) => {
        if (element.name == this.university_name) {
          this.facility_items = element.values;
        }
      });
    },
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

select {
  padding: 5px 13px;
  height: 50px;
  outline: none;
  border-radius: 10px;
  border: 0px solid black;
  background-color: #25473a;
  color: white;
  width: 300px;
}

select:hover {
  background-color: gainsboro;
  color: #193328;
}
</style>

<style>
.form-input-div {
  width: 100%;
  margin: 100px 0;
}
</style>