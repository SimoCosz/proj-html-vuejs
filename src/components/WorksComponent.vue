<template>
  <div class="container-fluid">
    <div class="container">

        <h6 class="section-title"> {{sectionTitle}} </h6>
        <h2 class="title"> Excellence in<span>Services</span> </h2>

        <section class="info">
          <p> {{description}} </p>
          <BtnSeeAll />
        </section>

      <section class="card-container">
        <ServiceComponent  v-for="(service, i) in services" :key="i" 
        :element='service'
        />
      </section>

    </div>
  </div>
</template>

<script>
import ServiceComponent from './ServiceComponent.vue'
import BtnSeeAll from './BtnSeeAll.vue'

export default {
  name: 'WorksComponent',
  components: {
    ServiceComponent,
    BtnSeeAll,
  },
  data(){
    return {
      sectionTitle: 'Our business areas',
      description: 'We are leaders in providing consultancy services with a set of cutting-edge technologies anf a team of experienced and renownwd professiobals. These are some options that you can hire.',
      services: [
        {
          icon: 'fa-solid fa-cubes',
          arrow: 'fa-solid fa-arrow-right',
          title: 'Audit & Assurance',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
        {
          icon: 'fa-solid fa-suitcase',
          arrow: 'fa-solid fa-arrow-right',
          title: 'Financial Advisory',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
        {
          icon: 'fa-solid fa-chart-simple',
          arrow: 'fa-solid fa-arrow-right',
          title: 'Analytics and M&A',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
        {
          icon: 'fa-solid fa-plane',
          arrow: 'fa-solid fa-arrow-right',
          title: 'Middle Marketing',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
        {
          icon: 'fa-solid fa-earth-europe',
          arrow: 'fa-solid fa-arrow-right',
          title: 'Legal Consulting',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
        {
          icon: 'fa-solid fa-box-open',
          arrow: 'fa-solid fa-arrow-right',
          title: 'Regulatory Risk',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
      ]
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
    

    .title{
      margin-bottom: 20px;
      font-weight: 900;

      span{
        background-color: rgba(white, 0.1);
        padding: 5px 10px;
        border-radius: 3px;
      }
    }

    .info{
      margin-bottom: 20px;
      color: $silverSand;
      display: inline-block;
      display: flex;
      justify-content: space-between;

      p{
        width: 70%;
      }
    }

    .card-container{
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  }

}
</style>