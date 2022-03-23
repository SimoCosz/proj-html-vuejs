<template>
  <div class="container-fluid">
    <div class="container">
      <p> {{text}} </p>
      <p>
        <font-awesome-icon :icon="icon" />
        {{copyright}} <span> Codings.</span> 
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBanner',
  data(){
    return{
      text: 'Enjoy the low price. We are tracking any intention of piracy.',
      icon: 'fa-regular fa-copyright',
      copyright: '2020 NEXGEN is Proudly Powered by '
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.container-fluid{
  background-color: black;
  color: $silverSand;

  .container{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 12px;

    span{
      color: $surfieGreen;
      font-weight: 600;
    }
  }
}
</style>