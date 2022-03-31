<template>
  <div class="map" data-testid="map-test">
    <l-map
      :zoom="zoom"
      :center="center">
      
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

      <l-marker :lat-lng="tesseloMarker">
        <l-icon icon-url="/favicon.png" :icon-size="[24, 20]" data-testid="icon-test"/>
      </l-marker>

    </l-map>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, watch } from "vue"
import { LMap, LTileLayer, LIcon, LMarker } from "@vue-leaflet/vue-leaflet"
import baseMaps from './basemap-provider'

export default defineComponent({
  name: "tsl-map",
  components: {
    LMap,
    LTileLayer,
    LIcon,
    LMarker,
  },
  props: {
    mapType: {
      type: String,
      default: "RGB",
    },
  },
  setup(props) {
    const zoom = ref(10)
    const center = ref([38.7220618, -9.1522597])
    const url = ref(baseMaps[0].url)
    const attribution = ref(baseMaps[0].attribution)
    
    const toggleMap = () => {
      baseMaps.forEach((map) => {
        if (props.mapType === map.type) {
           url.value = map.url
           attribution.value = map.attribution
        }
      })
    }

    watch(() => props.mapType, () => toggleMap())

    return {
      zoom,
      center,
      url,
      attribution,
      toggleMap,
    }
  },
  data(){
    return {
      tesseloMarker: [38.7220618, -9.1522597],
    }
  }
});
</script>

<style lang="scss">
.map {
  position: fixed; 
  top:0px; 
  height: 100vh; 
  width: 100vw;

  .leaflet-control-container {
    .leaflet-top {
      top: 50px;

      .leaflet-control-zoom.leaflet-bar.leaflet-control {
        a {
          width: 25px;
          height: 25px;
          line-height: 25px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
