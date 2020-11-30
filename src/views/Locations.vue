<template>
  <div id="instructions">
    <div id="banner">
      <img src="../assets/banner.png"/>
      <span v-if="!isCorrectAnswer">{{ currentLocation.knownLetters }}</span>
      <span v-else>REINDEER</span>
    </div>
    <div id="location">
      <label >Your Location</label>
      <h2>{{ currentLocation.name }}</h2>
    </div>

    <div v-if="!isFirstLocation" id="letter">
      <label>Letter</label>
      <h1>{{ currentLocation.letter }}</h1>
    </div>

    <div v-if="!isLastLocation" id="clue">
      <label>Clue To The Next Location</label>
      <blockquote>
        <ul>
          <li v-for="line in currentLocation.clue" :key="line">
            {{ line}}
          </li>
        </ul>
      </blockquote>

      <div class="wantToPlay">
        <label>Want to play?</label>
        <span class="spoiler">Sure! Everyone is invited!</span>
        <button class="btn" @click="getStarted()">Get Started!</button>
      </div>

      <div id="stuck">
        <label>Really Stuck?</label>
        <span class="spoiler">SPOILER ALERT!</span>
        <span> You will see all the locations though, boo!</span>
        <button class="btn" @click="viewAnswerMap()">Check the locations map</button>
      </div>
    </div>

    

    <div v-if="isLastLocation" id="submit">
      <h1 class="spoiler">Well Done!</h1>
      <span>All you need to do now is unscamble the letters to enter the prize draw</span>
      <input placeholder="Answer here..." v-model="answer" />
      <button class="btn" :disabled="!isCorrectAnswer" @click="submitAnswer()">Enter the prize draw!</button>

      <div class="wantToPlay">
        <label>Want to play?</label>
        <span class="spoiler">Sure! Everyone is invited!</span>
        <button class="btn" @click="getStarted()">Get Started!</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  label {
    display: inline-block;
    margin-top: 20px;
    font-style: italic;
  }

  h1, h2 {
    margin: 0;
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

  #letter {
    h1 {
      font-size: 4rem;
    }
  }

  #clue {
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
  #stuck {
    margin-top:40px;
    .btn {
      background-color: #aaa;
      color: black;
      border: 2px solid #888;
    }
    .btn:hover {
      color: black;
      background-color: white;
    }
  }

  #stuck,#submit,.wantToPlay {
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

  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

</style>

<script>
  export default {
    name: 'Locations',
    data() {
      return {
        locationNum: 0,
        answer: "",
        locations: [
          {
            name: "Holy Trinity School",
            letter: "",
            clue: [
              "Perhaps I can be found among two wheels in this shop,",
              "A sleigh for a new bike is what I'd like to swap!"
            ],
            knownLetters: "????????"
          },
          {
            name: "Saddle Safari",
            letter: "E",
            clue: [
              "I could be munching on candy-canes and sweets galore,",
              "If I've been there you may find them all over the floor!"
            ],
            knownLetters: "E???????"
          },
          {
            name: "Mr Simms Sweet Shop",
            letter: "N",
            clue: [
              "I'm hiding because I'm afraid of the roar,",
              "Black stripes on orange make me run for the door.",
              "A curry aroma I can smell on the breeze,",
              "But too much chilli is making me sneeze!"
            ],
            knownLetters: "EN??????"
          },
          {
            name: "Tiger Garden",
            letter: "R",
            clue: [
              "This is where I would go if Santa's toy sack was empty,",
              "For girls and boys there are gifts a-plenty!"
            ],
            knownLetters: "ENR?????"
          },
          {
            name: "Marlow Toys",
            letter: "E",
            clue: [
              "The smell of bread baking was just too much to resist,",
              "The cakes are so good they can't be missed!",
            ],
            knownLetters: "ENRE????"
          },
          {
            name: "Burgers",
            letter: "R",
            clue: [
              "I may have trotted down here like you do every year,",
              "The sound of bells ringing is what you usually hear.",
              "Singing carols and praying you do here each December,",
              "And you will again soon is what you must remember."
            ],
            knownLetters: "ENRER???"
          },
          {
            name: "All Saints Church",
            letter: "I",
            clue: [
              "I might be at the place where lots of boats pass by,",
              "Here they get moved from waters low up to high.",
              "The weir might be near so please take good care,",
              "You don't want to give your parents a scare."
            ],
            knownLetters: "ENRERI??"
          },
          
          {
            name: "Marlow Lock",
            letter: "E",
            clue: [
              "Saddle up the sleigh, this is where you love to play,",
              "The pirate ship, swings and even a cafe,",
              "Round-abouts and slides, we could be here all day."
            ],
            knownLetters: "ENRERIE?"
          },
          {
            name: "Higginson Park - Resolute Cafe",
            letter: "D",
            clue: [
              "You found me! Well done!",
              "I've nowhere to hide!",
              "Now unscamble the letters so they're not in disguise.",
              "Merry Chistmas to you all from Holy Trinity PTA,",
              "You're now free to go and enjoy a play :)"
            ],
            knownLetters: "ENRERIED"
          }
        ],
        mapsUrl: "https://www.google.com/maps/d/viewer?mid=1F3Y_pgHXAY7Ns32W2-Md9ejdgbiMZTy5&usp=sharing",
        submissionUrl: "https://forms.gle/jqZpZ1BX5ozmr9fa7"
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
      getStarted() {
        this.$router.push({name: "Home" })
      },
      viewAnswerMap() {
        if (window.confirm("Are you really sure you want to see the answers?")) {
          window.open(this.mapsUrl, "_blank")
        }
      },
      submitAnswer() {
        window.open(this.submissionUrl, "_blank")
      }
    }
  }
</script>
