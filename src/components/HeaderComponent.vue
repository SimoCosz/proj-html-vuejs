<template>
    <div class="container-fluid nav">
      <div class="container">
        <div class="banner-contacts">
          <div class="open-hours">
            <font-awesome-icon icon="fa-solid fa-clock" /> Open Hours: {{openHours}}
          </div>
          <div class="contacts">
            <ul>
              <li v-for="(icon, i) in icons" :key="i"> <font-awesome-icon :icon="icon.icon" /> {{icon.text}} </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return{
      openHours: 'Mon - Sat - 9.00 - 18.00',
      logoNex: '../assets/img/nexgen-logo.svg',
      contact: {
      },
      icons: [
        {
          icon: 'fa-solid fa-phone',
          text: '+1(305) 1234-5678',
        },
        {
          icon: 'fa-solid fa-envelope',
          text: 'hello@example.com',
        },
        {
          icon: 'fa-brands fa-facebook-f'
        },
        {
          icon: 'fa-brands fa-twitter'
        },
        {
          icon: 'fa-brands fa-linkedin-in'
        },
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.nav{
  background-color: $surfieGreen;
  color: rgba($grayNurse, 0.8);
  padding: 10px;

  .banner-contacts{
    display: flex;
    justify-content: space-between;

    .contacts{
      display: flex;
      gap: 30px;

      li{
        cursor: pointer;

        &:hover{
          color: white;
        }
      }
    }
  }
}

</style>