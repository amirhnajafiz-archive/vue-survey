<template>
  <div>
    <web-sitelogo />
    <NameForm ref="nameform" v-show="0 == index" />
    <IdForm ref="idform" v-show="1 == index" />
    <BirthForm ref="birthdate" v-show="2 == index" />
    <UniversityForm ref="uniform" v-show="3 == index" />
    <Survey ref="serveyform" v-show="4 == index" />
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
      let data = {};
      data["namedata"] = this.$refs.nameform.$data;
      data["iddata"] = this.$refs.idform.$data;
      data["birthdata"] = this.$refs.birthdate.$data;
      data["unidata"] = this.$refs.uniform.getData();
      data["surveydata"] = this.$refs.serveyform.getData();
      if (this.checkValidData(data)) {
        const request = new Request(
          "https://webhook.site/76e566ce-c9c9-4e2c-9d24-fa305062cf15", // todo: This url changes everytime we send the request
          {
            // todo: Set the URL headers
            method: "POST",
            mode: "cors",
            cache: "default",
            body: JSON.stringify(data),
          }
        );
        const res = fetch(request);
        // todo: Handel the request result and show message to the user
        console.log("Success");
      } else console.log("Error"); // todo: Error handeling in case of bad inputs
    },
    isNormalInteger(str) {
      var n = Math.floor(Number(str));
      return n !== Infinity && String(n) === str && n >= 0;
    },
    checkValidData(data) {
      let nameflag =
        data["namedata"]["user_name"] != "" &&
        data["namedata"]["user_family_name"] != "";
      let idflag = this.isNormalInteger(data["iddata"]["user_id"]);
      return nameflag && idflag;
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
