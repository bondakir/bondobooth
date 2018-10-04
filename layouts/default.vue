<template>
  <div class=webpage>
    <navigation></navigation>

    <nuxt/>

    <bottom></bottom>


  </div>
</template>

<script>
  import navigation from '~/components/nav.vue';
  import bottom from '~/components/footer.vue';
  export default {
    components: {
      navigation,
      bottom
          }
  }

</script>

<style lang="stylus">

@import '~assets/breakpoint'

html {
  font-family: "questrial", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}   

body {
  width:100%;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
    font-weight: 530;
  font-size: 5vw;
  font-family: questrial;
  color: #ffffff;
  word-spacing: 5px;
  padding-bottom: 25px;
  line-height: 1;
}
h2 {
  font-size:7vh;
  font-weight:400;
}

h3 {
  font-size:4vh;
  font-weight:400;
}

p {
  font-size:17px;
  line-height:2em;
}

.webpage {
  position: relative;
}

.button {
  display: inline-block;
  border-radius: 4px;
  border: 2px solid #fff;
  background-color: #fff;
  color: #000000;
  text-decoration: none;
  padding: 15px 30px;
  margin-left: 15px;
  font-weight: bold;

}

.button:hover {
  color: #000000;
  background-color: #ffffff;
  opacity: .8;
}

</style>
