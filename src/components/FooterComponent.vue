<template>
  <div class="container-fluid">
    <div class="container">
      <div class="col-3">
        <figure class="logo">
          <img :src="logo" alt="">
        </figure>
        <p class="description"> {{description}} </p>
        <div class="contact" v-for="(contact, i) in contacts" :key="i">
          <font-awesome-icon :icon="contact.icon" />
          <p class="data"> {{contact.data}} </p>
        </div>
        <BtnGet class="btn"/>
      </div>
      <div class="col-3 item">
        <h3>About</h3>
        <ul>
          <li  v-for="(el, i) in about" :key="i">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
            <a href="#"> {{el.item}} </a>
          </li>
        </ul>
      </div>
      <div class="col-3 item">
        <h3>Service</h3>
         <ul>
          <li  v-for="(el, i) in service" :key="i">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
            <a href="#"> {{el.item}} </a>
          </li>
        </ul>
      </div>
      <div class="col-3 item">
        <h3>Support</h3>
         <ul>
          <li  v-for="(el, i) in support" :key="i">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
            <a href="#"> {{el.item}} </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BtnGet from './BtnGet.vue'

export default {
  name: 'FooterComponent',
  components: {
    BtnGet,
  },
  data(){
    return{
      logo: require('../assets/img/nexgen-logo.svg'),
      description: 'A Functional HTML Templates for Corporate & Business.',
      contacts: [
        {
          icon: 'fa-solid fa-phone',
          data: '1+(305)1234-5678',
        },
        {
          icon: 'fa-solid fa-envelope',
          data: 'hello@example.com',
        },
        {
          icon: 'fa-solid fa-location-dot',
          data: 'Main Avenue, 987',
        },
      ],
      about: [
        {
          item: 'The Compoany'
        },
        {
          item: 'Institutional'
        },
        {
          item: 'Social & Events'
        },
        {
          item: 'Innovation'
        },
        {
          item: 'Environment'
        },
        {
          item: 'Technology'
        },
      ],
      service: [
        {
          item: 'Audit & assurance'
        },
        {
          item: 'Financial Advisory'
        },
        {
          item: 'Analytics M&A'
        },
        {
          item: 'Middle Marketing'
        },
        {
          item: 'Legal Consulting'
        },
        {
          item: 'Regulatory Risk'
        },
      ],
      support: [
        {
          item: 'Responsability'
        },
        {
          item: 'Terms of Use'
        },
        {
          item: 'About Cookies'
        },
        {
          item: 'Privacy Policy'
        },
        {
          item: 'Accessibility'
        },
        {
          item: 'Information'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.container-fluid{
  background-image: url('../assets/img/bg-7.jpg');
  background-position: center;
  background-size: cover;
  padding: 80px 0 100px 0;

  .container{
    display: flex;
    gap: 20px;

    .col-3{
      width: calc(25% - 20px);
      color: $silverSand;

      .logo{
        width: 100px;
      }

      .description{
        margin: 10px 0;
        font-size: 12px;
      }

      .contact{
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 12px;
        margin: 10px 0;
      }

      .btn{
        background-color: transparent;
        border: 1px solid rgba($silverSand, 0.5);
        margin-top: 20px;

        &:hover {
          background-color: $surfieGreen;
          color: white;
          border:1px solid $surfieGreen;
        }
      }
    }

    .col-3.item{
      background-color: rgba(white, 0.1);
      padding: 30px;
      border-radius: 8px;

      h3{
        color: white;
      }

      li{
        margin: 5px 0;
        font-size: 13px;

        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
}
</style>