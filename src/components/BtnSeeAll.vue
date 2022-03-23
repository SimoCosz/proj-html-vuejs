<template>
  <button class="btn-all">See all</button>
</template>

<script>
export default {
 name: 'BtnSeeAll'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.btn-all{
  background-color: transparent;
  border: 1px solid $silverSand;
  border-radius: 3px;
  color: white;
  text-transform: uppercase;
  padding: 5px 10px;
  cursor: pointer;

  &:hover{
    background-color: $fountainBlue;
    color: white;
    border:1px solid $fountainBlue;
  }
}
</style>