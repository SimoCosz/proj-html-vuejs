<template>
  <div class="container-fluid">
    <div class="container">
      <h6 class="section-title"></h6>
      <h2 class="title"></h2>
      <div class="data">
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

</style>