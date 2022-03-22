<template>
  <header class="header">
    <div class="container-fluid nav">
      <div class="container">
        <div class="banner-contacts">
          <div class="open-hours">
            <font-awesome-icon icon="fa-solid fa-clock" /> Open Hours: {{openHours}}
          </div>
          <div class="contacts">
            <ul>
              <li> <font-awesome-icon icon="fa-solid fa-phone" /> {{contact.number}} </li>
              <li> <font-awesome-icon icon="fa-solid fa-envelope" /> {{contact.mail}} </li>
              <!-- <li> <font-awesome-icon icon="fa-brands fa-facebook-f" /> </li>
              <li> <font-awesome-icon icon="fa-brands fa-twitter" /> </li>
              <li> <font-awesome-icon icon="fa-brands fa-linkedin-in" /> </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return{
      openHours: 'Mon - Sat - 9.00 - 18.00',
      logoNex: '../assets/img/nexgen-logo.svg',
      contact: {
        number: '+1(305) 1234-5678',
        mail: 'hello@example.com',
      },
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.nav{
  background-color: $blueLagoon;
  color: $grayNurse;
  padding: 10px;

  .banner-contacts{
    display: flex;
    justify-content: space-between;

    .contacts{
      display: flex;
      gap: 30px;
    }
  }
}

</style>