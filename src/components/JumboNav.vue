<template>
  <div class="container">
      <div class="row-navbar">
        <div class="nav-logo">
          <img src="../assets/img/nexgen-logo.svg" alt="">
        </div>
        <div class="navbar">
          <ul>
            <li> {{navBar.home}} </li>
            <li> {{navBar.about}} </li>
            <li> {{navBar.service}} </li>
            <li> {{navBar.team}} </li>
            <li> {{navBar.blog}} </li>
            <li> <font-awesome-icon icon="fa-regular fa-user" /> </li>
          </ul>
          <button class="btn-get">Get in touch</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'JumboNav',

  data(){
    return{
      navBar: {
        home: 'Home',
        about: 'About',
        service: 'Service',
        team: 'Team',
        blog: 'Blog',
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.row-navbar{
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  align-items: center;

  .nav-logo{
    width: 100px;
    z-index: 999;
  }

  .navbar{
    display: flex;
    gap: 30px;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    font-size: 14px;
  }

  .btn-get{
    padding: 10px 20px;
    background-color: #52babb;
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 3px;
    font-weight: 700;
  }
}
</style>