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
    currentState: 'all',
    moviePerPage: 8,
    currentPage: 2,
  },
  getters: {
    likedMovies(state) {
      return state.movies.filter(movie => movie.liked).filter(movie => movie.title.trim().toLowerCase().includes(state.searchInput))
    },
    movieByPageAll(state) {
      return state.filterMovies.slice((state.currentPage - 1)* state.moviePerPage, (state.currentPage * state.moviePerPage))
    },
    moviesByPageFav(state, getters) {
      return getters.likedMovies.slice((state.currentPage - 1) * state.moviePerPage, (state.currentPage * state.moviePerPage))
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

      state.searchInput = keyword
      state.currentPage = 1
    },
    clearKeyword(state) {
      state.searchInput = ''
      state.filterMovies = state.movies
      state.currentPage = 1
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
    },
    setCurrentPage(state, page) {
      state.currentPage = page
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
    },
    handlePage({commit}, page) {
      commit("setCurrentPage", page)
    }
  },
})

store.dispatch("fetchMovies")

export default store