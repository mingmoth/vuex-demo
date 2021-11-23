<template>
  <div class="main">
    <SearchBar />
    <div class="row" id="data-panel">
      <MovieCard
        v-for="movie in movieByPageAll"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <MovieModal :movieModal="movieModal" />
    <Pagination :movies="filterMovies" />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import MovieCard from "../components/MovieCard.vue";
import MovieModal from "../components/MovieModal.vue";
import Pagination from "../components/Pagination.vue";

import { mapState, mapGetters} from "vuex";
export default {
  name: "Movies",
  components: {
    SearchBar,
    MovieCard,
    MovieModal,
    Pagination,
  },
  computed: {
    ...mapState([
      "movies",
      "movieModal",
      "filterMovies",
      "currentState",
      "searchInput",
      "currentPage",
    ]),
    ...mapGetters(["movieByPageAll"]),
  },
  // created: {
  //   ...mapActions(["fetchMovies"]),
  // }
};
</script>