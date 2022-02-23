<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloTessera :msg="helloMsg" :subMsg="subHelloMsg"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloTessera from './components/HelloTessera.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloTessera
  },
  data() {
    return {
      helloMsg: 'Hello Tesseras!',
      subHelloMsg: 'This is the first Tesselo Showcase POC.'
    }
  }
});
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

body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
