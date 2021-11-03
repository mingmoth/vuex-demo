<template>
  <div class="main">
    <h1>Main</h1>
    <SearchBar />
    <div class="row">
      <MovieCard 
        v-for="movie in filterMovies"
        :key="movie.id"
        :movie="movie"/>
    </div>
    <MovieModal :movieModal="movieModal"/>
    <Pagination />
  </div>
</template>

<script>

import SearchBar from '../components/SearchBar.vue'
import MovieCard from '../components/MovieCard.vue'
import MovieModal from '../components/MovieModal.vue'
import Pagination from '../components/Pagination.vue'

import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Movies',
  components: {
    SearchBar,
    MovieCard,
    MovieModal,
    Pagination
  },
  computed: {
    ...mapState(['movies', 'filterMovies', 'movieModal']),
    ...mapGetters(['filterMovies']),
    // ...mapState({
    //   movies: state => state.movies,
    //   movieModal: state => state.movieModal
    // })
    // movies() {
    //   return this.$store.state.movies
    // }
  },
  created() {
    this.$store.dispatch("fetchMovies")
    // this.$store.dispatch("fetchFilterMovies")
  },
  mounted() {
    this.$store.dispatch("fetchMovies")
  }
}
</script>