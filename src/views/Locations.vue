<template>
  <div class="home">
    <h2>Your Current Location Is: {{ currentLocation.name }}</h2>
    <h2 v-if="!isFirstLocation">The Letter Here Is: {{ currentLocation.letter }}</h2>
    <h2 v-if="!isLastLocation">The Clue To The Next Location Is:</h2>

    <ul>
      <li v-for="line in currentLocation.clue" :key="line">
        {{ line}}
      </li>
    </ul>

    <div v-if="isLastLocation">
      <a :href="submissionUrl" target="_blank">Submit your answer here</a>
    </div>
    <div v-else>
      Really Stuck? Click the link below to see where to go.
      (SPOILER ALERT - you will see all the locations)
      <a :href="mapsUrl" target="_blank">Submit your answer here</a>
    </div>
  </div>
</template>

<style>
  ul { 
    list-style-type: none;
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
              "I could have trotted down here like you do every year,",
              "The bells ringing is what you usually hear.",
              "Singing carols and praying you do here each December,",
              "And you will again soon is what you must remember."
            ]
          },
          {
            name: "All Saints Church",
            letter: "I",
            clue: [
              "I could be at the place lots of boats pass by,",
              "Here they get moved from low to high.",
              "The weir might be near so take good care,",
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
      }
    },
    created() {
      this.locationNum = parseInt(this.$route.params.locationNum, 10)
    },
    beforeRouteUpdate (to) {
      this.locationNum = parseInt(to.params.locationNum, 10)
    }
  }
</script>
