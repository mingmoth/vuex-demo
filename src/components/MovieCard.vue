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
          data-toggle="modal"
          data-target="#show-movie-modal"
        >
          More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>