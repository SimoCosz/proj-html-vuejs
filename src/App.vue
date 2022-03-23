<template>
  <div id="app">

    <!-- Header contact -->
    <HeaderComponent />
    
    <!-- MAIN -->
    <!-- Jumbotron + navbar -->
    <JumboComponent />

    <!-- Video Section -->
    <IntroductionComponent />

    <!-- Number Data section -->
    <DataComponent />

    <!-- Works Section -->
    <WorksComponent />

    <!-- Team section -->
    <TeamComponent />
    <!-- News section -->

    <!-- NewsLetter section -->

    <!-- Contacts section -->


    <!-- Footer -->

  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import JumboComponent from './components/JumboComponent.vue'
import IntroductionComponent from './components/IntroductionComponent.vue'
import DataComponent from './components/DataComponent1.vue'
import WorksComponent from './components/WorksComponent.vue'
import TeamComponent from './components/TeamComponent.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    JumboComponent,
    IntroductionComponent,
    DataComponent,
    WorksComponent,
    TeamComponent,

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
