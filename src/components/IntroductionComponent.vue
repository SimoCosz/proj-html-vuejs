<template>
  <div class="container">
    <h6 class="section-title"> {{sectionTitle}} </h6>
    <h2 class="title-light">Advisory <span>Performance</span> </h2>
    <p class="description">{{description}}</p>
    <figure class="video">
      <img :src="video" alt="">
      <font-awesome-icon class="play" :icon="iconPlay" />
    </figure>
  </div>
</template>

<script>
export default {
  name: 'IntrodutionComponent',

  data(){
    return{
      sectionTitle: 'Introduction video',
      description: 'Financial executives need to review their strategies, operating models and capabilities so that their areas can generate sound information for better decision macking',
      video: require('../assets/img/video-1.jpg'),
      iconPlay: 'fa-solid fa-play'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.container{
  margin: 80px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .description{
    width: 50%;
    color: $fountainBlue;
    font-size: 12px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  .video{
    width: 50%;
    position: relative;

    .play{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 50px;
      cursor: pointer;
      padding: 15px;
      color: rgba($fountainBlue, 1);
      
      &:hover{
        color: white;
      }
    }
  }
}
</style>