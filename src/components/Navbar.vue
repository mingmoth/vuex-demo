<template>
  <div class="nav bg-light">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Movie List</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active" @click.stop.prevent="clearInput">
            <router-link to="/" class="nav-link">Home </router-link>
          </li>
          <li class="nav-item" @click.stop.prevent="clearInput">
            <router-link to="/favorites" class="nav-link">favorite</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Navbar",
  methods: {
    ...mapActions(["clearSearchInput"]),
    clearInput() {
      this.clearSearchInput();
    },
  },
};
</script>