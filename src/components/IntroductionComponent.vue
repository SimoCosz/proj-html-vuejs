<template>
  <div class="container">
    <h6 class="section-title"> {{sectionTitle}} </h6>
    <h2 class="title">Advisory <span>Performance</span> </h2>
    <p class="description">{{description}}</p>
    <figure class="video">
      <img :src="video" alt="">
      <font-awesome-icon class="shadow-play" icon="fa-solid fa-play" />
      <font-awesome-icon class="main-play" icon="fa-solid fa-play" />
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
      video: require('../assets/img/video-1.jpg')

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

  .title{
    color: $shark;
    margin-bottom: 20px;


    span{
      color: $surfieGreen;
      background-color: rgba($fountainBlue, 0.3);
      padding: 5px;
      border-radius: 3px;
    }
  }

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
    
    .shadow-play{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 50px;
      color: rgba($smaltBlue, 0.8);
      cursor: pointer;
    }

    .main-play{
      position: absolute;
      top: 52%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 50px;
      color: rgba(white, 0.6);
      cursor: pointer;
    }
  }
}
</style>