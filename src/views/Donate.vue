<template>
  <div id="instructions">
    <div id="banner">
      <img src="../assets/banner.png"/>
      <span>THANK-YOU!</span>
    </div>
    <div class="actions">
      <p>Holy Trinity parents you can make a donation through parent pay.</p>
      <p>Everybody else (and Holy Trinity parents if they'd prefer) please click the PayPal.me link below</p>
      <a :href="payPalUrl" target="_blank">
        <img src="../assets/paypalme.png"/>
      </a>
    </div>
    <div class="actions">
      <label>Thank-you :) </label>
      <button class="btn" @click="goHome()">Home</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  label {
    display: inline-block;
    margin-top: 20px;
    font-style: italic;
  }

  #instructions {
    display: flex;
    flex-direction: column;
  }

  #banner {
    
    margin-top: -30px;
    text-align: center;
    img {
      height: 75px;
    }
    span {
      margin-top: -60px;
      margin-bottom: 30px;;
      display: block;
      font-size: 2rem;
      text-transform: uppercase;
      transform: rotateZ(-7deg);
    }
  }

  .actions {
    margin-top:20px;

    img {
      height: 75px;
      border: 2px solid #F4C059;
      border-radius: 4px;
    }
    label, span, a {
      display: block;
    }
  }

  .btn {
    margin-top: 10px;
    cursor: pointer;
    background-color: #204333;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    border: 2px solid #F4C059;
    border-radius: 4px;
  }

  .btn:hover {
    background-color: white;
    color: #204333;
  }

</style>


<script>
  export default {
    name: 'Donate',
    data() {
      return {
        payPalUrl:"https://paypal.me/holytrinitymarlowpta"
      }
    },
    methods: {
      goHome() {
        this.$router.push({ name: "Home" });
      }
    }
  }
</script>
