<template>
    <div class="home-container">
        <div class="inner-container">
            <h2>Welcome to the SurVue !</h2>
            <p style="font-size: 20px;">
                This is a simple survey created with Vue.js 
            </p>
            <router-link :to="'/survey'" tag="button">Lets go</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage"
}
</script>

<style scoped>
.home-container {
    display: flex;
    width: 100%;
    height: 90vh;
    background-color: #27394a;
    color: #40c98d;
    align-items: center;
    justify-content: center;
}

.inner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h2 {
    font-size: 72px;
}

button {
    background-color: #40c98d;
    color: #27394a;
    padding: 20px 30px;
    width: 200px;
    margin: 30px 0;
    font-size: 20px;
    border: 0px solid black;
    outline: none;
    border-radius: 15px;
    transition: width 0.5s;
}

button:hover {
    background-color: #33a071;
    color: #ffffff;
    width: 250px;
}
</style>