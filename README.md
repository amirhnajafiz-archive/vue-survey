# Sur-Vue
Web application of an online survey, about programming languages.<br />

<img src="./Schema/Demo/survue.gif" width=800 />

### What is this ?
Create a web application with Vue.js to get the user information and create a survey, <br />
then it sends the information as an JSON object to a URL that I defined.

### How it works ?
It collects the data by <b>vue modeling</b> and creates a JSON object , then it sends the object as<br />
a HTTP request via <b>vue-fetch</b> and <b>AJAX</b>.<br />

### Any extra features ?
It also does a validation of the user input data and will give responsive errors to user.<br />
Since we don't use a specific server to send the data to, you can set the URL you want and your request<br />
will be sent to that server.<br />
It also uses <b>Vuex.js</b> to make sure your data won't be lost during routing.<br />

#### How it looks :
<img src="./Schema/Demo/Screenshot_1.png" width=800 /><br />
<img src="./Schema/Demo/Screenshot_2.png" width=800 /><br />
<img src="./Schema/Demo/Screenshot_3.png" width=800 /><br />
