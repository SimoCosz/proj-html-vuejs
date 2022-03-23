<template>
  <div class="jumbo">
    <JumboNav />
    <div class="wrapper">
      <h1 id="title">Financial Risk</h1>
      <p id="description">The right outcomes depend on continous rigor in governance, models, and processes across the finance function</p>
      <div class="button">
        <BtnGet />
        <button class="btn-read"> Read More</button>
      </div>
    </div>
  </div>
</template>

<script>
import JumboNav from './JumboNav.vue'
import BtnGet from './BtnGet.vue'

export default {
  name: 'JumboComponent',
  components:{
    JumboNav,
    BtnGet,
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
  background-position: top center;
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
      color: rgba($grayNurse, 0.8);
    }

    .button{
      display: flex;
      gap: 20px;
      justify-content: center;
      margin-top: 30px;

      .btn-read{
        background-color: transparent;
        border: 1px solid white;
        color: white;
        padding: 8px 20px;
        text-transform: uppercase;
        border-radius: 3px;
        font-weight: 700;
        cursor: pointer;

        &:hover{
          background-color: $fountainBlue;
          color: white;
          border:1px solid $fountainBlue;
        }
      }
    }
  }
}
</style>