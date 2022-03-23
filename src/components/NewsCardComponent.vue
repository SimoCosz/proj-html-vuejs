<template>
  <div class="card">
    <div class="writing">
      <span><font-awesome-icon icon="fa-regular fa-user" /> {{card.author}} </span>
      <span><font-awesome-icon icon="fa-solid fa-clock" /> {{card.date}} </span>
    </div>
    <img :src="card.bkg" alt="">
    <h3 class="news"> {{card.text}} </h3>
    <p class="description"> {{card.description}} </p>
  </div>
</template>

<script>
export default {
  props:{
    card:{
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.card{
  width: calc((100% / 3) - 20px);
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  .writing{
    justify-content: space-between;
    gap: 10px;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 80%;
    color: $grayNurse;
    font-weight: 600;
    font-size: 14px;
    z-index: 999;
    display: none;
  }

  &:hover .writing{
    display: flex;
  }

  &:hover img{
    filter: blur(2px);
  }

  &::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.4;
  }

  .news{
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 80%;
    font-size: 18px;
    color: $grayNurse;
    z-index: 999;
  }

  &:hover .news{
    top: 50%;
  }

  .description{
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 80%;
    font-size: 15px;
    color: $grayNurse;
    z-index: 999;
    display: none;
  }
  
  &:hover .description{
    display: block;
  }
}

</style>