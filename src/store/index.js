import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.prototype.axios = axios;
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: []
    },
    actions: {
        loadTodos({commit}) {
            axios
                .get("https://jsonplaceholder.typicode.com/todos/")
                .then(result => {
                    commit("saveTodos", result.data);
                })
                .catch(error => {
                    throw new Error(`API ${error}`);
                });
        }
    },
    mutations: {
        saveTodos(state, todos) {
            state.todos = todos;
        }
    }
});


