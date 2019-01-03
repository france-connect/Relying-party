<template>
  <v-container>
    <v-layout text-xs-center wrap v-if="!user_infos">
      <v-flex xs12>
        <v-img :src="require('../static/logo.svg')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-5">Bienvenue sur {{ name }}</h1>
        <p
          class="headline font-weight-regular"
        >Vous êtes sur une application de test. Cette application vous permet de simuler une cinématique de connexion.</p>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="subheading mb-4">
          Vous pouvez vérifier le niveau de compatibilité d'un Fournisseur d'Identité en cliquant sur le bouton
          <b>"Test de compatibilité OpenId Connect"</b> (à venir)
        </h2>

        <v-layout justify-center>
          <v-btn disabled color="primary">Openid Connect</v-btn>
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="subheading mb-4">
          Vous pouvez tester la connexion à un Fournisseur d'Identité en cliquant sur le bouton
          <b>FranceConnect</b>
        </h2>

        <v-layout justify-center>
          <v-btn v-on:click="login_V1" color="primary">FranceConnect</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout row v-else>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>Information de l'Agent :</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-on:click="logout_V1" flat color="red">
              <span class="mr-2">Se déconnecter</span>
            </v-btn>
          </v-toolbar>
          <v-container fluid grid-list-sm>
            <v-layout row wrap>
              <v-flex v-for="(result, index) in user_infos" :key="index" xs4>
                <v-list-tile-title class="title">{{index}} :</v-list-tile-title>
                <v-list-tile-sub-title class="mt-2 mb-2">
                  {{
                  result !== undefined ? result : undefined
                  }}
                </v-list-tile-sub-title>
              </v-flex>
            </v-layout>
          </v-container>

          <v-footer class="mt-5"></v-footer>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { AUTH_REQUEST_V1, AUTH_LOGOUT_V1 } from "../store/actions/auth"
import { NAME } from "../config/config"

export default {
  mounted() {
    //eslint-disable-next-line
    const userInfos = JSON.parse(localStorage.getItem("userInfos"));
    this.user_infos = userInfos;
  },
  data: function() {
    return {
      user_infos: null,
      name: NAME
    };
  },
  methods: {
    login_V1: function() {
      this.$store.dispatch(AUTH_REQUEST_V1);
    },
    logout_V1: function() {
      this.$store.dispatch(AUTH_LOGOUT_V1);
    }
  }
};
</script>

<style>
</style>
