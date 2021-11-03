import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {filters} from '../assets/scripts/filters'


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
    movies: [],
    filterMovies: [],
    movieModal: {},
    searchInput: '',
    currentState: 'all'
  },
  getters: {
    filterMovies(state) {
      return filters[state.currentState](state.movies).filter(movie => movie.title.trim().toLowerCase().includes(state.searchInput))
    }
  },
  // mutation必定是同步函數，沒有例外
  mutations: {
    getMovies(state, movies) {
      state.movies = movies
    },
    getMovieModal(state, id) {
      state.movieModal = state.movies.find(movie => movie.id === id)
    },
    getSearchInput(state, keyword) {
      state.searchInput = keyword.trim().toLowerCase()
    },
    clearKeyword(state) {
      state.searchInput = ''
    },
    likeMovie(state, id) {
      state.movies = state.movies.map((movie) => {
        if(movie.id === id) {
          movie.liked = true
        }
      })
    },
    dislikeMovie(state, id) {
      state.movies = state.movies.map((movie) => {
        if (movie.id === id) {
          movie.liked = false
        }
      })
    }
  },
  // 先在aciton中處理可能的非同步請求，當取得對應的資料後，接著再透過mutation以處理同步的方式變更state的資料
  actions: {
    async fetchMovies({ commit }) {
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
    },
    fetchMovieModal({ commit }, id) {
      commit("getMovieModal", id)
    },
    fetchSearchInput({ commit }, keyword) {
      commit("getSearchInput", keyword)
    },
    clearSearchInput({ commit }) {
      commit("clearKeyword")
    },
    fetchLike({ commit }, id) {
      commit("likeMovie", id)
    },
    fetchDislike({ commit, getters }, id) {
      commit("dislikeMovie", {id, getters})
    }
  },
})
