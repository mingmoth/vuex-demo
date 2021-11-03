<template>
  <div class="main">
    <h1>Main</h1>
    <SearchBar />
    <div class="row">
      <MovieCard 
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"/>
    </div>
    <MovieModal />
    <Pagination />
  </div>
</template>

<script>

import SearchBar from '../components/SearchBar.vue'
import MovieCard from '../components/MovieCard.vue'
import MovieModal from '../components/MovieModal.vue'
import Pagination from '../components/Pagination.vue'

import {mapState} from 'vuex'
export default {
  name: 'Movies',
  components: {
    SearchBar,
    MovieCard,
    MovieModal,
    Pagination
  },
  computed: {
    ...mapState({
      movies: state => state.movies
    })
    // movies() {
    //   return this.$store.state.movies
    // }
  },
  created() {
    this.$store.dispatch("fetchMovies")
  }
}
</script>