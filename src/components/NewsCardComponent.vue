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
    font-size: 12px;
    z-index: 999;
    opacity: 0;
  }

  &:hover .writing{
    display: flex;
    opacity: 1;
    transition: 300ms ease-in-out;
  }

  &:hover img{
    filter: blur(3px);
    transition: 300ms ease-in-out;
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
    transition: 300ms ease-in-out;
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
    opacity: 0;
    // display: none;
  }
  
  &:hover .description{
    // display: block;
    opacity: 1;
    transition: 300ms ease-in-out;
  }
}

</style>