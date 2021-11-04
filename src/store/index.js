import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { filters } from '../assets/scripts/filters'


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


const store = new Vuex.Store({
  state: {
    movies: [],
    filterMovies: [],
    movieModal: {},
    searchInput: '',
    currentState: 'all'
  },
  getters: {
    likedMovies(state) {
      return state.movies.filter(movie => movie.liked).filter(movie => movie.title.trim().toLowerCase().includes(state.searchInput))
    }
    // filterMovies(state) {
    //   return filters[state.currentState](state.movies).filter((movie) => 
    //     movie.title.trim().toLowerCase().includes(state.searchInput)
    //   )
    // }
  },
  // mutation必定是同步函數，沒有例外
  mutations: {
    getMovies(state, movies) {
      state.movies = movies
      state.filterMovies = state.movies
    },
    getfilterMovies(state) {
      state.filterMovies = state.movies.filter(movie => movie.title.trim().toLowerCase().includes(state.searchInput))
    },
    getMovieModal(state, id) {
      state.movieModal = state.movies.find(movie => movie.id === id)
    },
    getSearchInput(state, keyword) {
      console.log(keyword)
      state.searchInput = keyword
    },
    clearKeyword(state) {
      state.searchInput = ''
      state.filterMovies = state.movies
    },
    MovieLiked(state, moveiId) {
      state.movies.forEach((movie) => {
        if (movie.id === moveiId) {
          movie.liked = true
        }
      })
    },
    MovieDisliked(state, movieId) {
      state.movies.forEach((movie) => {
        if (movie.id === movieId) {
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
    fetchFilterMovies({ commit }) {
      // const filterResults = filters[this.state.currentState](this.state.movies)
      commit("getfilterMovies")
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
    updateMovieLiked({ commit }, id) {
      commit("MovieLiked", id)
    },
    updateMovieDisliked({ commit }, id) {
      commit("MovieDisliked", id)
    }
  },
})

store.dispatch("fetchMovies")

export default store