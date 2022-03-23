<template>
  <button class="btn-get">Get in touch</button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.btn-get{
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
</style>