<template>
  <div id="app">
    <navigator/>
    <div id="content" class="container">
      <router-view class="inner sm-4 sm-offset-4"/>
    </div>
    <!--foot/-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  html, body {
    height: 100vh;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    position: relative;
  }
  #content {
    height: 90vh;
  }
  .inner {
    padding-top: 60px;
  }
</style>
