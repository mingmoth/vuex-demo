<template>
  <nav
    class="d-flex justify-content-center"
    aria-label="Page navigation example"
  >
    <ul class="pagination">
      <!-- <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li> -->
      <li v-for="page in totalPage" :key="page" class="page-item">
        <a
          @click.stop.prevent="setCurrentPage(page)"
          class="page-link"
          href="#"
          >{{ page }}</a
        >
      </li>

      <!-- <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li> -->
    </ul>
  </nav>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: "Pagination",
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState(["moviePerPage"]),
    totalPage() {
      const maxPage = Math.ceil(this.movies.length / this.moviePerPage);
      return Array.from(Array(maxPage).keys(), (page) => page + 1);
    },
  },
  methods: {
    ...mapActions(["handlePage"]),
    setCurrentPage(page) {
      this.handlePage(page)
    }
  }
};
</script>