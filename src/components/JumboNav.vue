<template>
  <div class="container">
      <div class="row-navbar">
        <div class="nav-logo">
          <img :src="navBar.logo" alt="">
        </div>
        <div class="navbar">
          <ul>
            <li> {{navBar.home}} </li>
            <li> {{navBar.about}} </li>
            <li> {{navBar.service}} </li>
            <li> {{navBar.team}} </li>
            <li> {{navBar.blog}} </li>
            <li> <font-awesome-icon icon="fa-regular fa-user" /> </li>
          </ul>
          <BtnGet />
        </div>
      </div>
    </div>
</template>

<script>
import BtnGet from '../components/BtnGet.vue'

export default {
  name: 'JumboNav',
  components: {
    BtnGet,
  },

  data(){
    return{
      navBar: {
        home: 'Home',
        about: 'About',
        service: 'Service',
        team: 'Team',
        blog: 'Blog',
        logo: require('../assets/img/nexgen-logo.svg')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.row-navbar{
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  align-items: center;

  .nav-logo{
    width: 100px;
    z-index: 999;
  }

  .navbar{
    display: flex;
    gap: 30px;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    font-size: 14px;

    li{
      cursor: pointer;
    }
  }
}
</style>