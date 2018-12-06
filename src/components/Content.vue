<template>
  <v-container>
    <v-layout text-xs-center wrap v-if="!user_infos">
      <v-flex xs12>
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>
        <p class="subheading font-weight-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
          ipsum sit amet tortor rhoncus eleifend quis vitae leo. Fusce convallis
          augue a pharetra scelerisque. Phasellus et metus sit amet velit
          sodales maximus. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Lorem ipsum dolor sit amet
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Lorem ipsum</a>
        </p>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-layout justify-center>
          <v-btn disabled color="primary">Openid Connect</v-btn>
        </v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-layout justify-center>
          <v-btn v-on:click="login_V1" color="primary">FranceConnect</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout text-xs-center mt-5 wrap v-else>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="300px">
            <v-layout column fill-height>
              <v-card-title>
                <v-spacer></v-spacer>
                <v-tooltip left>
                  <v-btn dark icon>
                    <v-icon color="green">turned_in</v-icon>
                  </v-btn>
                  <span>Left tooltip</span>
                </v-tooltip>
              </v-card-title>

              <v-spacer></v-spacer>

              <v-card-title class="white--text pl-5 pt-5">
                <div class="display-1 pl-5 pt-5">
                  {{user_infos.given_name}}
                  {{user_infos.family_name}}
                </div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">person</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>gender :</v-list-tile-title>
                <v-list-tile-sub-title>{{user_infos.gender}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action></v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>birthdate :</v-list-tile-title>
                <v-list-tile-sub-title>{{user_infos.birthdate}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { AUTH_REQUEST_V1 } from "@/store/actions/auth";

export default {
  mounted() {
    //eslint-disable-next-line
    const userInfos = JSON.parse(localStorage.getItem("userInfos"));
    this.user_infos = userInfos;
    console.log("this.userInfos", this.user_infos);
  },
  data: function() {
    return {
      user_infos: {}
    };
  },
  methods: {
    login_V1: function() {
      this.$store.dispatch(AUTH_REQUEST_V1);
    }
  }
};
</script>

<style>
</style>
