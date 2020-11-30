<template>
  <div id="app">
    <div id="title">
      <img src="./assets/trinity.png"/>
      <span>
        Help Holy Trinity find Rudolph!
      </span>
    </div>
    <div id="banner">
      <img src="./assets/rudolph.png"/>
    </div>
    <div id="content">
      <transition name="fade" mode="out-in">
        <router-view :key="$route.fullPath"/>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: white;
    background: url('assets/background.jpg') no-repeat center center fixed;
    background-size:cover;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding:20px;
    overflow-y: auto;
    display: flex;
    flex-flow:column;
  }

  #title {
    img {
      height: 64px;
    }
    span {
      font-weight: bold;
      font-size: 1.2em;
      letter-spacing: 1px;
      display: block;
      margin: 20px 0;
    }
  }

  #banner {
    img {
      height: 200px;
    }
  }
  fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave-to
  /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
