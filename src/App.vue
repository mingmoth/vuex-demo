<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/main.scss'
</style>
