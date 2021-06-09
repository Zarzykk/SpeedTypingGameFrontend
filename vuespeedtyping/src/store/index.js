import Vue from 'vue'
import Vuex from 'vuex'
import {getUserResults,getRandomText} from "../api/api";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        results:[],
        text: {},
        authToken:'',
        loggedId:''
    },
    mutations:{
        setResults(state,results){
            state.results=results;
        },
        setText(state,text){
            state.text=text;
        },
        setToken(state, token){
            state.authToken = token
        },
        setLoggedId(state,id){
            state.loggedId=id;
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
        },
        getToken(state){
            if (!state.authToken)
                return state.authToken
            else return false
        },
        getLoggedId(state){
            return state.loggedId;
        }
    }
})