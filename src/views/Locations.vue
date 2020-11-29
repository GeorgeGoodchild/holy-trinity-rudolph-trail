<template>
  <div id="instructions">
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

      <div id="stuck">
        <label>Really Stuck?</label>
        <span class="spoiler">SPOILER ALERT!</span>
        <span> You will see all the locations :(</span>
        <button class="btn" @click="viewAnswerMap()">Check the locations map</button>
      </div>
    </div>

    <div v-if="isLastLocation" id="submit">
      <h1 class="spoiler">Well Done!</h1>
      <span>All you need to do now is</span>
      <button class="btn" @click="submitAnswer()">Submit your answer here</button>
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
      font-family: Georgia, serif;
      position: relative;
      margin: 0.5em;
      padding: 0.5em 0.5em 0.5em 0.5em;
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
      border: 2px solid #aaa;
    }
    .btn:hover {
      color: black;
      background-color: white;
    }
  }

  #stuck,#submit {
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
  }

  .btn {
    margin-top: 10px;
    cursor: pointer;
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    border: 2px solid #4CAF50;
    border-radius: 4px;
  }

  .btn:hover {
    background-color: white;
    color: #4CAF50;
  }
</style>

<script>
  export default {
    name: 'Clues',
    data() {
      return {
        locationNum: 0,
        locations: [
          {
            name: "Holy Trinity School",
            letter: "",
            clue: [
              "Perhaps I can be found among two wheels in this shop,",
              "A sleigh for a new bike is what I'd like to swap!"
            ]
          },
          {
            name: "Saddle Safari",
            letter: "E",
            clue: [
              "I could be munching on candy-canes and sweets galore,",
              "If I've been there you may find them all over the floor!"
            ]
          },
          {
            name: "Mr Simms Sweet Shop",
            letter: "N",
            clue: [
              "I'm hiding because I'm afraid of the roar,",
              "Black stripes on orange make me run for the door.",
              "A curry aroma I can smell on the breeze,",
              "But too much chilli is making me sneeze!"
            ]
          },
          {
            name: "Tiger Garden",
            letter: "R",
            clue: [
              "This is where I would go if Santa's toy sack was empty,",
              "For girls and boys there are gifts a-plenty!"
            ]
          },
          {
            name: "Marlow Toys",
            letter: "E",
            clue: [
              "The smell of bread baking was just too much to resist,",
              "The cakes are so good they can't be missed!",
            ]
          },
          {
            name: "Burgers",
            letter: "R",
            clue: [
              "I may have trotted down here like you do every year,",
              "The sound of bells ringing is what you usually hear.",
              "Singing carols and praying you do here each December,",
              "And you will again soon is what you must remember."
            ]
          },
          {
            name: "All Saints Church",
            letter: "I",
            clue: [
              "I might be at the place where lots of boats pass by,",
              "Here they get moved from waters low up to high.",
              "The weir might be near so please take good care,",
              "You don't want to give your parents a scare."
            ]
          },
          
          {
            name: "Marlow Lock",
            letter: "E",
            clue: [
              "Saddle up the sleigh, this is where you love to play,",
              "The pirate ship, swings and even a cafe,",
              "Round-abouts and slides, we could be here all day."
            ],
          },
          {
            name: "Higginson Park - Reolute Cafe",
            letter: "D",
            clue: [
              "You found me! Well done!",
              "I've nowhere to hide!",
              "Now unscamble the letters so they're not in disguise.",
              "Merry Chistmas to you all from Holy Trinity PTA,",
              "You're now free to go and enjoy a play :)"
            ]
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
    },
    created() {
      this.locationNum = parseInt(this.$route.params.locationNum, 10)
    },
    watch: {
      locationNum: function(val) {
        if (val === 8) {
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
      viewAnswerMap() {
        if (window.confirm("Are you really sure you want to see the answers?"))
        window.open(this.mapsUrl, "_blank")
      },
      submitAnswer() {
        window.open(this.submissionUrl, "_blank")
      }
    }
  }
</script>
