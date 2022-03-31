<template>
  <div data-testid="toolbar-test">
    <v-toolbar 
      dark
      dense
      elevation="2"
      height="40">
      <v-row>
        <v-col> 
          <v-img 
            width="120"
            src="../assets/logo.png"
          ></v-img>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-row>
        <v-col>
          <v-switch
            class="float-right"
            v-model="switchLayer"
            hide-details
            color="success"
            label="NDVI"
            @change="$emit('updateMapType', switchLayer)"
          ></v-switch>
        </v-col>
      </v-row>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TslToolbar',
  data() {
    return {
      switchLayer: false,
    }
  }
});
</script>

<style lang="scss">
.v-toolbar {
  z-index: 1;
}
</style>
