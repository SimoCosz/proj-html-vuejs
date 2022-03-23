<template>
  <div class="container">
      <div class="row-navbar">
        <div class="nav-logo">
          <img :src="logo" alt="">
        </div>
        <div class="navbar">
          <ul>
            <li v-for="(el, i) in navBar" :key="i"> 
              {{el.item}} 
            </li>
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
      logo: require('../assets/img/nexgen-logo.svg'),
      navBar: [
        {
          item: 'Home',
        },
        {
          item: 'About',
        },
        {
          item: 'Service',
        },
        {
          item: 'Team',
        },
        {
          item: 'Blog',
        },
        {
          item: 'Home',
        },
      ]
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
    color: rgba($grayNurse, 0.8);
    font-size: 14px;


    li{
      cursor: pointer;
      
      &:hover{
        color: white;
      }
    }
  }
}
</style>