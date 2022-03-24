<template>
  <div class="container-fluid">
    <div class="container">
      <h6 class="section-title"> {{sectionTitle}} </h6>
      <h2 class="title-dark"> <span>Results</span> in Numbers </h2>
      <div class="data-wrapper">
        <ul>
          <li v-for="(el, i) in data" :key="i">
            <div class="data-number">
              {{el.number}}
            </div>
            <h4 class="description-data"> {{el.description}} </h4>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataComponent',
  data(){
    return {
      sectionTitle: 'Wath are we doing',
      title: 'Results in Numbers',
      data:[
        {
          number: 128,
          description: 'Certification',
        },
        {
          number: 230,
          description: 'Employees',
        },
        {
          number: 517,
          description: 'Customers',
        },
        {
          number: 94,
          description: 'Countries Served',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.container-fluid{
  background-image: url('../assets/img/bg-1.jpg');
  padding: 80px 0;
  text-align: center;
  color: white;
  
  .title-dark{
    margin-bottom: 60px;
  }
    
  .data-wrapper{
    display: flex;
    justify-content: center;
    gap: 80px;

    .data-number{
      font-size: 25px;
      font-weight: 900;
      color: $surfieGreen;
      margin-bottom: 10px;
    }
  }
}
</style>