<template>
  <v-app>
      <TslToolbar />
      <HelloTessera :msg="helloMsg" :subMsg="helloSubMsg"/>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloTessera from './components/Hello-Tessera.vue'
import TslToolbar from './components/Tsl-Toolbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloTessera,
    TslToolbar,
  },
  data() {
    return {
      helloMsg: 'Hello Tesseras!',
      helloSubMsg: 'This is the most simple UI mockup with vuetify for Tesselo Showcase POC.',
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  overflow-y: auto !important;
}

</style>
