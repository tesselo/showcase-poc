<template>
  <v-toolbar 
    dark
    dense
    elevation="2"
    height="40" >
    <v-toolbar-items>
        <v-img 
          src="../assets/logo.png"
        ></v-img>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-col>
      <v-container
        class="toolbar-switch-btn"
        fluid >
        <v-switch
          x-small
          v-model="switchLayer"
          :label="`${switchLayer ? 'RBG' : 'NDVI'}`"
        ></v-switch>
      </v-container>
    </v-col>
  </v-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'tsl-Toolbar',
  data() {
    return {
      switchLayer: true,
    }
  },
  
});
</script>

<style lang="scss">
.v-toolbar {
  z-index: 1;
}
</style>
