<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card mb-2">
      <img :src="movie.image" class="card-img-top" alt="Card image cap" />
      <div class="card-body movie-item-body">
        <h5 class="card-title">{{ movie.title }}</h5>
      </div>
      <!-- "More" button -->
      <div class="card-footer">
        <button
          class="btn btn-primary btn-show-movie"
          data-bs-toggle="modal"
          data-bs-target="#show-movie-modal"
          @click="getMovieModal(movie.id)"
        >
          More
        </button>
        <button
          v-if="!movie.liked"
          class="btn btn-danger"
          @click="updateLiked(movie.id)"
        >
          Like
        </button>
        <button
          v-else
          class="btn btn-outline-danger"
          @click="updateDisliked(movie.id)"
        >
          Dislike
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions([
      "fetchMovieModal",
      "updateMovieLiked",
      "updateMovieDisliked",
    ]),
    getMovieModal(movieId) {
      this.fetchMovieModal(movieId);
    },
    updateLiked(movieId) {
      this.updateMovieLiked(movieId);
    },
    updateDisliked(movieId) {
      this.updateMovieDisliked(movieId);
    },
  },
};
</script>