// <template>
  <div class="container">

    <div class="col-7">
      <h6 class="section-title"> {{sectionTitle}} </h6>
      <h2 class="title-light">Get in <span>Touch</span></h2>
      <p class="description"> {{description}} </p>
      <div class="input-wrapper">
        <div class="input-in-wrapper">
          <input class="text text-name" type="text" placeholder="Name">
          <img src="../assets/img/image (1).png" alt="">
        </div>
        <input class="text" type="text" placeholder="Email">
        <input class="text" type="text" placeholder="Phone">
        <input class="text" type="text" placeholder="More Info">
        <textarea class="text-area" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
        <button class="btn-light">Send</button>
      </div>
    </div>

    <div class="col-5">
      <h3 class="contact-title">Example Inc.</h3>
      <p class="contact-description" v-for="(el, i) in texts" :key="i"> {{el.text}} </p>
      <div class="contact" v-for="(contact, i) in contacts" :key="i">
        <span>
          <font-awesome-icon class="icon" :icon="contact.icon" />
          {{contact.data}} 
        </span> 
      </div>
      <button class="btn-light">View Map</button>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',

  data(){
    return{
      sectionTitle: 'Send a message',
      description: 'We will respond to your message as soon as possible.',
      texts: [
        {
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nostrum possimus id asperiores quas dolores non consequatur libero, eius nihil.'
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor ipsa officiis quas consectetur magni dolore error nihil explicabo officia.'
        },
      ],
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variabili.scss';

.container{
  padding: 80px 0;
  display: flex;
  gap: 30px;

  .col-7{
    width: 60%;
    
    .description{
      margin-top: 20px;
      margin-bottom: 40px;
      color: $silverSand;
      width: 570px;
    }
    .input-wrapper{
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      .text{
        width: calc(50% - 5px);
        background-color: $grayNurse;
        border: none;
        border-radius: 5px;
        padding: 5px;
      }

      .input-in-wrapper{
        position: relative;
        width: calc(50% - 5px);
      }

      .text-name{
        width: 100%;
      }

      img{
        position: absolute;
        right: 5%;
        top: 50%;
        transform: translate(50%, -50%);
      }

      .text-area{
        width: 100%;
        resize: none;
        background-color: $grayNurse;
        border: none;
        border-radius: 5px;
        padding: 5px;
      }

      .btn-light{
        &:hover{
          background-color: $blueLagoon;
          border: 1 px solid $blueLagoon;
        }
      }
    }
  }
  .col-5{
    width: 40%;

    .contact-description{
      margin: 10px 0;
      color: $silverSand;
      font-size: 12px;
      width: 70%;
    }

    .contact{
      color: $silverSand;

      span{
        cursor: pointer;
        font-size: 12px;

        .icon{
          background-color: rgba($surfieGreen, 0.2);
          color: $surfieGreen;
          padding: 7px;
          aspect-ratio: 1/1;
          border-radius: 50%;
          vertical-align: middle;
          margin: 5px 0;
        }
      }
    }
    .btn-light{
      margin-top: 20px;
    }
  }
}
</style>