<template>
  <div class="jumbo">
    <JumboNav />
    <div class="wrapper">
      <h1 id="title">Financial Risk</h1>
      <p id="description">The right outcomes depend on continous rigor in governance, models, and processes across the finance function</p>
      <button> Get in touch</button>
      <button> Read More</button>
    </div>
  </div>
</template>

<script>
import JumboNav from './JumboNav.vue'

export default {
  name: 'JumboComponent',
  components:{
    JumboNav,
  },

  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.jumbo{
  height: 600px;
  background-image: url('../assets/img/bg-2.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .wrapper{
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;

    #title{
      font-weight: 900;
      font-size: 45px;
    }

    #description{
      font-size: 14px;
      color: $grayNurse;
    }
  }
}
</style>