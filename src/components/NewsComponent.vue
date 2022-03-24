<template>
<div class="container-fluid">
  <div class="container">
    <div class="section-description">
      <h6 class="section-title"> {{sectionTitle}} </h6>
      <h2 class="title-light">Latest <span>News</span></h2>
      <div class="info">
        <p class="description"> {{description}} </p>
        <BtnSeeAll class="btn" />
      </div>
    </div>
    <div class="card-wrapper">
      <NewsCardComponent v-for="(card, i) in cards" :key="i"
      :card='card'
      />
    </div>
  </div>
</div>
</template>

<script>
import BtnSeeAll from './BtnSeeAll.vue'
import NewsCardComponent from './NewsCardComponent.vue'

export default {
  name: 'NewsComponent',
  components: {
    BtnSeeAll,
    NewsCardComponent,
  },

  data(){
    return{
      sectionTitle: 'Our editorial content',
      description: 'Every week we publish content about what is best in the business world',
      cards: [
        {
          author: 'Andrea Miller',
          date: '2 days Ago',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          bkg: require('../assets/img/news-1.jpg'),
          text: 'Increasing creativity is possible for everyone'
        },
        {
          author: 'John Lennon',
          date: '1 week Ago',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          bkg: require('../assets/img/news-2.jpg'),
          text: 'Beacause marcket reserch is part of the business plan'
        },
        {
          author: 'Scarlett Johansson',
          date: '2 hours Ago',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          bkg: require('../assets/img/news-3.jpg'),
          text: 'Working from home is now a trend'
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.container-fluid{
  background-color: rgba($texasRose, 0.1);
  padding: 80px 0;

  .container{

    .info{
      margin-bottom: 20px;
      color: $silverSand;
      display: inline-block;
      display: flex;
      justify-content: space-between;

      p{
        width: 70%;
      }

      .btn{
        background-color: transparent;
        color: $surfieGreen;
        border: 1px solid $blueLagoon;
        font-weight: 600;
        
        &:hover{
          background-color: $blueLagoon;
          color: white;
        }
      }
    }

    .card-wrapper{
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>