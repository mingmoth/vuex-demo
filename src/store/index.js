import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const BASE_URL = "https://movie-list.alphacamp.io";
const INDEX_URL = BASE_URL + "/api/v1/movies/";
const POSTER_URL = BASE_URL + "/posters/";

Vue.use(Vuex)

// const state = {
//   movies: []
// }

// const getters = {}  
// const actions = {
//   fetchMovies({ commit }) {
//     axios.get(INDEX_URL)
//       .then(response => {
//         commit('GET_MOVIES', response.data.results.map(movie => ({
//           ...movie,
//           image: POSTER_URL + movie.image,
//           liked: false
//         })))
//       })
//       .catch(error => console.log(error))
//   }
// }

// const mutations = {
//   GET_MOVIES(state, movies) {
//     state.movies = movies
//   }
// }


export default new Vuex.Store({
  state: {
    movies: []
  },
  // mutation必定是同步函數，沒有例外
  mutations: {
    getMovies(state, movies) {
      state.movies = movies
    }
  },
  getters: {},
  // 先在aciton中處理可能的非同步請求，當取得對應的資料後，接著再透過mutation以處理同步的方式變更state的資料
  actions: {
    async fetchMovies({commit}) {
       try {
         const response = await axios.get(INDEX_URL)
         commit('getMovies', response.data.results.map(movie => ({
           ...movie,
           image: POSTER_URL + movie.image,
           liked: false
         })))
       } catch (error) {
         console.log(error)
       }
    }
  },
})
