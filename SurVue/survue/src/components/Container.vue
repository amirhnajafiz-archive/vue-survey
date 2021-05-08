<template>
  <div class="websitecontainer">
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
        Send
      </button>
    </div>
    <div class="request-res" v-if="sendIsOn">
      <span>{{ resultmsg }}</span>
      <button @click="sendIsOn = false">&#10003;</button>
    </div>
    <div class="exceptions" v-if="formErrors.length != 0">
      <p id="error-msg">Please fix the following errors:</p>
      <ul>
        <li
          class="error_item"
          v-for="(error, index) in formErrors"
          :key="index"
        >
          <span>{{ error }}</span>
          <button @click="formErrors.splice(formErrors.indexOf(error), 1)">
            &#10003;
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NameForm from "./Forms/NameForm";
import IdForm from "./Forms/IdForm";
import BirthForm from "./Forms/BirthForm.vue";
import UniversityForm from "./Forms/UniversityForm.vue";
import Survey from "./Forms/Survey.vue";
import WebSitelogo from "./WebSitelogo.vue";

export default {
  name: "AppContainer",
  data() {
    return {
      index: 0,
      formErrors: [],
      sendIsOn: false,
      resultmsg: "",
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
      console.log(this.$route.$FormURL);
      this.formErrors = [];
      this.sendIsOn = false;
      const user_data = this.getFormsData();
      let errors = this.handleErrors(user_data);
      if (errors.length == 0) {
        this.sendIsOn = true;
        this.resultmsg = this.sendHTTP(user_data);
      } else {
        this.formErrors = errors;
      }
    },
    sendHTTP(data) {
      var xhttp = new XMLHttpRequest();
      var msg = "";
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          msg = "Thank you, your request was sent.";
        } else {
          msg = "Request could not be sent.";
          console.log(this.status + "|" + this.statusText);
        }
      };
      xhttp.open("POST", this.$store.getters.getURL, true);
      xhttp.setRequestHeader("Content-type", "JSON");
      xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhttp.send(data);
      return msg;
    },
    getFormsData() {
      let data = {};
      data["namedata"] = this.$refs.nameform.$data;
      data["iddata"] = this.$refs.idform.$data;
      data["birthdata"] = this.$refs.birthdate.$data;
      data["unidata"] = this.$refs.uniform.getData();
      data["surveydata"] = this.$refs.serveyform.getData();
      return data;
    },
    handleErrors(data) {
      let errors = [];
      if (
        !this.isValidUsername(
          data["namedata"]["user_name"],
          data["namedata"]["user_family_name"]
        )
      ) {
        errors.push("Your should enter your name and family name.");
      }
      if (!this.isValidId(data["iddata"]["user_id"])) {
        errors.push(
          "Your national ID does not have a correct pattern. ( It should be a 10 digits number starting with '092' )"
        );
      }
      if (!this.isValidUniId(data["iddata"]["user_student_number"])) {
        errors.push(
          "Your student number has an inccorect format. ( It should be a 6-10 digits number )"
        );
      }
      if (!this.isValidBirthdate(data["birthdata"]["birthDate"])) {
        errors.push("Your birthday cannot be in the future.");
      }
      return errors;
    },
    isValidUsername(fname, lname) {
      return fname && lname;
    },
    isValidId(id) {
      return id.length == 10 && !isNaN(id) && id.startsWith("092");
    },
    isValidUniId(id) {
      return id.length > 6 && id.length < 10 && !isNaN(id);
    },
    isValidBirthdate(birthdate) {
      return birthdate;
    },
  },
};
</script>

<style scoped>
.websitecontainer {
  margin: 0 0 50px 0;
}

#btns-nav {
  display: flex;
  width: 40%;
  max-height: 50px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
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

.exceptions {
  width: 60%;
  margin: 10px auto;
  padding: 20px;
}

.exceptions > ul {
  list-style-type: symbols(">");
}

.error_item {
  display: flex;
  background-color: rgb(75, 26, 26);
  color: rgb(255, 255, 255);
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 5px;
  justify-content: space-between;
}

.error_item > button {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  outline: none;
  border: 0px solid black;
  background-color: rgb(10, 153, 98);
  color: rgb(10, 153, 98);
}

.error_item > button:hover {
  background-color: rgb(7, 100, 64);
  color: #ffffff;
}

.request-res {
  display: flex;
  width: 40%;
  margin: 20px auto;
  background-color: rgb(10, 153, 98);
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
  justify-content: space-between;
}

.request-res > button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  outline: none;
  border: 0px solid black;
  background-color: rgb(75, 26, 26);
  color: rgb(75, 26, 26);
}

.request-res > button:hover {
  background-color: rgb(148, 52, 52);
  color: #ffffff;
}

#error-msg {
  font-size: 20px;
}
</style>
