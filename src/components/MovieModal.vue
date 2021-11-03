<template>
  <div
    class="modal fade"
    id="show-movie-modal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLongTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="show-movie-title">
            {{ movieModal.title }}
          </h5>
          <!-- <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button> -->
        </div>
        <div class="modal-body" id="show-movie-body">
          <div class="row">
            <img
              :src="movieModal.image"
              class="col-sm-8"
              id="show-movie-image"
            />
            <div class="col-sm-4">
              <p>
                <em id="show-movie-date"
                  >release at : {{ movieModal.release_date }}</em
                >
              </p>
              <p id="show-movie-description">{{ movieModal.description }}</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieModal',
  props: {
    movieModal: {
      type: Object,
      required: true
    }
  }
}
</script>