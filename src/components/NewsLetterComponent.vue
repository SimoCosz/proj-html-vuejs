<template>
  <div class="container-fluid">
    <div class="container">
      <div class="col-6">
        <h6 class="section-title"> {{sectionTitle}} </h6>
        <h2 class="title-dark"><span>Know</span> First</h2>
        <p class="description"> {{description}} </p>
      </div>
      <div class="col-6">
        <input class="text-area" type="text" placeholder="Name">
        <input class="text-area" type="text" placeholder="Email">
        <button class="sub">Subscribe</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewsLetterComponent',
  data(){
    return{
      sectionTitle: 'Newsletter',
      description: 'Follow closely and receive content about our company and the news of the current market.'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

  .container-fluid{
  background-color: $woodSmoke;
  color: white;
  padding: 80px 0;

  .container{
    display: flex;
    align-items: center;
    justify-content: center;

    .col-6{
      max-width: 50%;

      .title{
        margin-bottom: 20px;
        font-weight: 900;
      }
  
      p{
        width: 70%;
        color: $silverSand;
        font-size: 13px;
      }
    } 
    
    .text-area{
      display: block;
      margin: 10px 0;
      width: 250px;
      background-color: rgba(white, 0.1);
      color: $silverSand;
      border: none;
      border-radius: 5px;
      padding: 5px;
    }

    .sub{
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
</style>