<template>
  <v-app>
    <TslToolbar @update-map-type="updateMapType" />
    <TslMap :mapType="mapType" />
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TslMap from "./components/tsl-map/Tsl-Map.vue";
import TslToolbar from "./components/Tsl-Toolbar.vue";

export default defineComponent({
  name: "App",
  components: {
    TslToolbar,
    TslMap,
  },
  setup() {
    let mapType = ref('RBG')
    
    const updateMapType = (value: boolean) => {
      mapType.value = value ? "NDVI" : "RGB"
    };

    return {
      updateMapType,
      mapType,
    };
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
