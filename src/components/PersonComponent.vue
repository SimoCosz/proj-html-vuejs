<template>
  <div class="card">
    <figure class="avatar">
      <img :src="person.avatar" alt="">
    </figure>
    <div class="info-person">
      <h3 class="person-name"> {{person.name}} {{person.lastName}} </h3>
      <p class="role"> {{person.role}} </p>
      <div class="social">
        <div class="icon">
          <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        </div>
        <div class="icon">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </div>
        <div class="icon">
          <font-awesome-icon icon="fa-brands fa-facebook-f" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PersonComponent',

  props: {
    person: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.card{
  width: calc(50% - 20px);
  display: flex;
  align-items: center;
  gap: 20px;

  figure{
    width: 100px;
    border-radius: 3px;
    overflow: hidden;
    // background-color: black;

    img{
      object-fit: contain;
      object-position: center;
    }
  }
}
  .info-person{
    color: $blueLagoon;
    
    .person-name{
      color: $shark;
    }

    .role{
      text-transform: uppercase;
      color: $blueLagoon;
      margin: 10px 0;
      font-size: 14px;
    }

    .social{
      display: flex;
      gap: 5px;
      align-items: center;

      .icon{
        background-color: rgba($fountainBlue, 0.2);
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
</style>