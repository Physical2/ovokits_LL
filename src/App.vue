<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <LL />
   <TestTranslate />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LL from './components/LL.vue';
import TestTranslate from './components/TestTranslate.vue';

export default {
  name: 'App',
  components: {
    LL,
    TestTranslate
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
