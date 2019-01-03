<template>
  <div mb-5>
    <v-navigation-drawer :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" fixed app>
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
          <v-btn icon @click.native.stop="miniVariant = !miniVariant">
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
          </v-btn>
        </div>
        <div v-else>
          <v-btn color="primary" large dark @click.stop="miniVariant = !miniVariant">Réduire</v-btn>
        </div>
      </div>
    </v-navigation-drawer>

    <v-toolbar fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/france-connect/Relying-party" target="_blank">
        <span class="mr-2">Github</span>
      </v-btn>
    </v-toolbar>

    <v-footer :fixed="fixed" app>
      <span>&copy; FranceConnect 2017</span>
    </v-footer>
  </div>
</template>

<script>
import { FC_MODE } from "../config/config";
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        { icon: "apps", title: "Accueil", to: "/" },
        { icon: "vertical_split", title: "Documentation", to: "/documentation" }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: FC_MODE
    };
  }
};
</script>