<template>
  <div class="card-service">
    <div class="icon-wrapper">
      <span class="icon"> <font-awesome-icon :icon="element.icon" /> </span>
      <span class="icon-arrow"><font-awesome-icon :icon="element.arrow" /></span>
    </div>
    <div class="card-info">
      <h4 class="title"> {{element.title}} </h4>
      <p class="description"> {{element.description}} </p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    element: {
      type: Object,
      reuired: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';
    
  .card-service{
    background-color: $shark;
    width: calc((100% / 3) - 20px);
    text-align: initial;
    padding: 30px;

    .icon-wrapper{
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      color: $fountainBlue;

      .icon{
        font-size: 30px;
      }
    }

    .card-info{
      width: 80%;

      .title{
        margin-bottom: 20px;
      }
  
      .description{
        font-size: 12px;
        color: $silverSand;
      }
    }
  }
</style>