<template>
  <div class="row" id="search-bar">
    <form id="search" class="form-inline">
      <label class="sr-only" for="inlineFormInputName2">Name</label>
      <input
        v-model="keyword"
        type="text"
        class="form-control mb-2 mr-sm-2"
        id="search-input"
        placeholder="search name ..."
      />
      <button
        type="submit"
        class="btn btn-primary mb-2"
        @click.prevent="fetchSearch(keyword)"
      >
        Search
      </button>
      <button
        type="submit"
        class="btn btn-secondary mb-2 ml-2"
        @click.stop.prevent="clearInput"
      >
        Clear
      </button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'SearchBar',
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    ...mapActions(["fetchSearchInput", "clearSearchInput", "fetchFilterMovies"]),
    fetchSearch(keyword) {
      this.fetchSearchInput(keyword)
      this.fetchFilterMovies()
      this.keyword = ''
    },
    clearInput() {
      this.clearSearchInput()
      this.keyword = ''
    }
  }
}
</script>