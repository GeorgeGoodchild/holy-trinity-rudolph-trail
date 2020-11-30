<template>
  <div id="instructions">
    <div id="banner">
      <img src="../assets/banner.png"/>
      <span>MISSING</span>
    </div>
    <div class="clue">
      <blockquote>
        <ul>
          <li v-for="line in lines" :key="line">
            {{ line}}
          </li>
        </ul>
      </blockquote>
    </div>
    <div class="actions">
      <h4>Rudolph and the children and parents at Holy Trinity School would be very grateful if you could donate a little to the school PTA!</h4>
      <span>Thank-you :)</span>
      <button class="btn" @click="donate()">Donate!</button>
    </div>
    <div class="actions">
      <label>Now let's get started...</label>
      <h3>
        Good Luck!
      </h3>
      <button class="btn" @click="gotoFirstClue()">Show me the first clue</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  label {
    display: inline-block;
    margin-top: 20px;
    font-style: italic;
  }

  h3, h4 {
    margin: 5px;
    padding: 0;
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

  .clue {
    ul {
      list-style-type: none;
    }

    blockquote {
      position: relative;
      margin: 0.5em;
      padding: 0.5em 0.5em 0.5em 0.5em;
      line-height: 1.6;
    }
    blockquote:before {
        font-family: Georgia, serif;
        position: absolute;
        font-size: 6em;
        line-height: 1;
        top: 0;
        left: 0;
        content: "\201C";
    }
    blockquote:after {
        font-family: Georgia, serif;
        position: absolute;
        float:right;
        font-size:6em;
        line-height: 1;
        right:0;
        bottom:-0.6em;
        content: "\201D";
    }
  }

  .actions {
    margin-top:20px;

    label, span, a {
      display: block;
    }
    .spoiler {
      font-weight: bold;
      margin: 10px;
    }
    a, a:visited {
      margin: 10px;
      color: white;
    }
    input {
      width:100%;
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      font-size: 1.5rem;
      letter-spacing: 1px;
      text-transform: uppercase;
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
    name: 'Home',
    data() {
      return {
        lines: [
          "'Twas the night before Christmas and disaster had struck,",
          "Santa was missing a reindeer, Oh what rotten luck!",
          "Can you help find him and get him right back?",
          "So Santa can deliver all the gifts in his sack!"
        ]
      }
    },
    computed: {
      currentLocation() {
        return this.locations[this.locationNum];
      },
      isFirstLocation() {
        return this.locationNum == 0;
      },
      isLastLocation() {
        return this.locationNum == this.locations.length - 1;
      },
      isCorrectAnswer() {
        return this.answer?.toUpperCase().trim() === "REINDEER";
      }
    },
    created() {
      this.locationNum = parseInt(this.$route.params.locationNum, 10)
    },
    watch: {
      isCorrectAnswer: function(val) {
        if (val) {
          window.confetti.start()
        } else {
          window.confetti.stop()
        }
      }
    },
    beforeRouteUpdate (to) {
      this.locationNum = parseInt(to.params.locationNum, 10);
    },
    methods: {
      donate() {
        this.$router.push({name: "Donate" })
      },
      gotoFirstClue() {
        this.$router.push({name: "Locations", params: { locationNum: 0 } })
      }
    }
  }
</script>
