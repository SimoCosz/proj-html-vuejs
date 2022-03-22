<template>
  <div id="app">

    <!-- Header contact -->
    <HeaderComponent />
    
    <!-- MAIN -->
    <!-- Jumbotron + navbar -->
    <JumboComponent />

    <!-- Video Section -->

    <!-- Number Data section -->

    <!-- Works Section -->

    <!-- Team section -->

    <!-- News section -->

    <!-- NewsLetter section -->

    <!-- Contacts section -->


    <!-- Footer -->

  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import JumboComponent from './components/JumboComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    JumboComponent,
  }
}
</script>

<style lang="scss">
@import './assets/scss/_common.scss';

#app {
  font-family: league-spartan, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
