<template>
  <div :class="`${theme} commonVar`" id="app">
    <div class="container matchParent flex">
      <div class="navContainer">
        <Navigation></Navigation>
      </div>
      <div class="body flex">
        <router-view @swichTheme="switchTheme"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  components: {
    Navigation
  },
  data() {
    return {
      theme: "themeLight"
    };
  },
  methods: {
    switchTheme(themeName) {
      //console.log('app',themeName)
      this.theme = themeName;
      window.sessionStorage.setItem("theme", this.theme);
    }
  },
  mounted() {
    if (window.sessionStorage.getItem("theme")) {
      //console.log('aaaa')
      this.theme = window.sessionStorage.getItem("theme");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100vw;
  min-width: 1920px;
  background: var(--background);
  .container {
    .navContainer {
      width: 15%;
      min-width: 250px;
    }
    @media only screen and (max-width: 960px) {
      .navContainer {
        display: none;
      }
    }

    .body {
      flex: 1;
    }
  }
}
</style>
