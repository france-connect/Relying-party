<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Meta from "mixins/meta";
import Toolbar from "components/AppToolbar";

export default {
  mixins: [Meta],

  components: {
    Toolbar
  },
  data() {
    return {
      //
    };
  }
};
</script>
