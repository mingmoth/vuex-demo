<template>
  <div class="main">
    <SearchBar />
    <div class="row">
      <MovieCard 
        v-for="movie in moviesByPageFav"
        :key="movie.id"
        :movie="movie"/>
    </div>
    <MovieModal :movieModal="movieModal"/>
    <Pagination :movies="likedMovies"/>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import MovieCard from '../components/MovieCard.vue'
import MovieModal from '../components/MovieModal.vue'
import Pagination from '../components/Pagination.vue'
import {mapGetters, mapState} from 'vuex'

export default {
  name: 'likedMovies',
  components: {
    SearchBar,
    MovieCard,
    MovieModal,
    Pagination
  },
  computed: {
    ...mapState(['movieModal', 'searchInput']),
    ...mapGetters(['likedMovies', "moviesByPageFav"])
  }
}
</script>