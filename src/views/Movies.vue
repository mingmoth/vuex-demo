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
    ...mapState(['movies', 'movieModal', 'filterMovies', 'currentState', 'searchInput']),
    // ...mapState({
    //   movies: state => state.movies,
    //   movieModal: state => state.movieModal
    // })
    // movies() {
    //   return this.$store.state.movies
    // }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  updated() {
    console.log('updated')
  },
  // watch: {
  //   movies: {
  //     handler: function() {
  //       console.log('saveStorage')
  //       this.saveStorage()
  //     },
  //     deep: true
  //   }
  // }
}
</script>