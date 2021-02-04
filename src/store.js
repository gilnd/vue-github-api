import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [], // this dosent preserve all the information i want to display
        detailedUsers: [], // this
        keywords: [] // history of all the keyword used to search users
    },
    mutations: {
        setUsers(state, users){
            state.users = users;
        },
        clearUsers(state){
            state.users = [];
        },
        addHistory(state, keyword){
            state.keywords.push(keyword);
        },
        clearHistory(state){
            state.keywords = [];
        }
    },
    actions: {
        async getUsers({commit}, keyword) {
            commit('addHistory', keyword);
            try {
                const response = await axios.get('https://api.github.com/search/users?q=' + keyword);
                commit('setUsers', response.data.items);
            } catch (error) {
                throw new Error('API Error' + error);
            }
        },
        clearUsers({commit}){
            commit('clearUsers');
        },
        clearHistory({commit}){
            commit('clearHistory');
        }
    }
    
    
});
