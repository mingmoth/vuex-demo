<template>
  <div class="main">
    <h1>Main</h1>
    <SearchBar />
    <div>
      <MovieCard />
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
export default {
  name: 'Movies',
  components: {
    SearchBar,
    MovieCard,
    MovieModal,
    Pagination
  }
}
</script>