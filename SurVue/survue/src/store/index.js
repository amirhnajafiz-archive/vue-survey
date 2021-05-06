import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        surveyURL: ""
    },
    getters: {
        getURL: state => {
            return state.surveyURL;
        }
    },
    mutations: {
        setURL(state, value) {
            state.surveyURL = value;
        }
    },
    actions: {}
});