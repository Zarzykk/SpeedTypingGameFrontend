import Vue from 'vue'
import Vuex from 'vuex'
import {getUserResults,getRandomText} from "../api/api";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        results:[],
        text: {}
    },
    mutations:{
        setResults(state,results){
            state.results=results;
        },
        setText(state,text){
            state.text=text;
        }
    },
    actions:{
        fetchResults(context){
            return getUserResults()
                .then(response =>{
                    context.commit("setResults",response.data)
                })
        },
        fetchText(context){
            return getRandomText().then(response =>{
                context.commit("setText",response.data)
            })
        }
    },
    getters:{
        getResults(state){
            return state.results
        },
        getText(state){
            return state.text
        }
    }
})