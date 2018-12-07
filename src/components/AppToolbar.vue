<template>
  <div mb-5>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      tile
      flat
    >
      <v-list>
        <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in items" exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <div class="text-xs-center">
        <div v-if="miniVariant">
          <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
          </v-btn>
        </div>
        <div v-else>
          <v-btn color="primary" large dark @click.stop="miniVariant = !miniVariant">Réduire</v-btn>
        </div>
      </div>
    </v-navigation-drawer>

    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/france-connect/Relying-party" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      clipped: true,
      drawer: false, // menu afficher au reload (true)
      fixed: true,
      items: [
        { icon: "apps", title: "Welcome", to: "/" },
        {
          icon: "vertical_split",
          title: "Documentation",
          to: "/documentation"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "FranceConnect Agent"
    };
  }
};
</script>
