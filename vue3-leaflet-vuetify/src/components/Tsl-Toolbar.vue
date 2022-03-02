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

.v-application__wrap > .v-toolbar.v-toolbar--density-default > .v-toolbar__content {
  padding-top: 0px;
  padding-bottom: 0px;

  .v-img__img {
    left: 0px
  }
}

.toolbar-switch-btn {
  margin-top: 39px;

  .v-input__control > .v-selection-control {
    
    .v-selection-control__wrapper > .v-switch__track {
      height: 9px;
      width: 18px;
    }

    .v-selection-control__input {
      width: 27px;
      height: 27px;
      
      .v-switch__thumb {
        height: 14px;
        width: 14px;
      }
    } 

    .v-label {
      font-size: 14px
    }

  }
}
</style>
