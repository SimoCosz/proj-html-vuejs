<template>
  <div class="container">
    <div class="card-wrapper">
      <section class="info">
        <h6 class="section-title"> {{sectionTitle}} </h6>
        <h2 class="title-light"><span>Team</span> of Experts</h2>
        <p class="description"> {{description}} </p>
      </section>

      <div class="person-team">
        <PersonComponent v-for="(person, i) in people" :key="i" 
        :person='person'
        />
      </div>
    </div>
    <div class="speech">
      <h3>President Speech</h3>
      <p v-for="(el, i) in speechs" :key="i">{{el.text}}</p>
      <h5 id="author">
        {{author}}
        <font-awesome-icon id="quote" :icon="icon" />
      </h5>
      
    </div>
  </div>

</template>

<script>
import PersonComponent from './PersonComponent.vue'

export default {
components: {
  PersonComponent,
},

  data(){
    return{
      sectionTitle: 'We like what we do',
      description: 'Ethics and integrity are the bases on which our professionals build their careers. They are fundamentals that become daily attitudes.',
      author: 'T. Johnson',
      icon: 'fa-solid fa-quote-right',
      speechs: [
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum consequatur magni!'
        },
        {
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id illo asperiores harum sed modi at odit molestias architecto sit autem?'
        },
        {
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat non at asperiores?'
        },
      ],
      people: [
        {
          avatar: require('../assets/img/team-1.jpg'),
          name: 'David',
          lastName: 'Cooper',
          role: 'CTO & Co-founder',
        },
        {
          avatar: require('../assets/img/team-3.jpg'),
          name: 'Oliver',
          lastName: 'Jones',
          role: 'Chief procurement',
        },
        {
          avatar: require('../assets/img/team-2.jpg'),
          name: 'Emma',
          lastName: 'Lopez',
          role: 'Chief marketing',
        },
        {
          avatar: require('../assets/img/team-4.jpg'),
          name: 'T.',
          lastName: 'Johnson',
          role: 'CEO & President',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.container{
  margin: 80px auto;
  display: flex;
  align-items: flex-end;
  gap: 20px;

   .card-wrapper{
     width: 75%;
     
     .info{

      .description{
        margin-bottom: 40px;
        color: $silverSand;
        width: 570px;
      }
    }

    .person-team{
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
   }

  .speech{
    width: 25%;
    padding: 20px;
    background-color: $blueLagoon;
    color: white;

    p{
      margin: 20px 0;
      color: $silverSand;
      font-size: 14px;
    }

    #author{
      position: relative;
    }

    #quote{
      position: absolute;
      top: -10px;
      right: 0;
      font-size: 25px;
      color: rgba($shark, 0.5);
    }
  }
}
</style>