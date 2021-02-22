import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

/**
 *
 * @type {({count: number}|{count: number}|{count: number}|{count: number}|{count: number})[]}
 */
const initialState = [
    {
        count: 0
    },
    {
        count: 0
    },
    {
        count: 0
    },
    {
        count: 0
    },
    {
        count: 0
    },

];

/**
 *
 * @type {Store<{counterList: {count: number}[]}>}
 */

const store = new Vuex.Store({
    state: {
        counterList: [ ...initialState ],
    },
    mutations: {
        incrementItem(state, index) {
            state.counterList[index].count++;
        },
        decrementItem(state,index) {
            state.counterList[index].count ? state.counterList[index].count-- : null;
        },
        removeCurrentItem(state, index) {
            return state.counterList.splice(index, 1);
        },
        refreshListItems(state) {
           state.counterList.filter(item => item.count = 0);
        },
        restoreListItems(state) {
            state.counterList = [ ...initialState ]
        },
    },
    getters: {
        getCounterList(state) {
            return state.counterList;
        },
        getCurrentItem(state,index) {
            return state.counterList[index];
        },
    },
    actions: {
        removeCurrentListA({commit}, index) {
            commit("removeCurrentItem",index);
        },
        restoreListItemsA({commit}){
            commit("restoreListItems");
        },
        refreshListItemsA({commit}) {
            commit("refreshListItems");
        },
        incrementItem({commit},index) {
            commit("incrementItem", index);
        },
        decrementItemA({commit},index) {
            commit("decrementItem", index);
        }
    }
});

export default store;