<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Callback</h1>
        <p class="subheading font-weight-regular">Travail en cours</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { USER_REQUEST_V1, USER_INFO_V1 } from "@/store/actions/user";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["accessToken", "userInfos"])
  },
  mounted: function() {
    this.$store
      .dispatch(USER_REQUEST_V1, this.$route.query.code)
      .then(response => {
        // eslint-disable-next-line
        console.log("this.accessToken", this.accessToken, "response", response);
        this.$store.dispatch(USER_INFO_V1, this.accessToken).then(response => {
          // eslint-disable-next-line
          console.log('this.accessToken', response);
          localStorage.setItem("userInfos", JSON.stringify(response.data));
          this.$router.push("/");
        });
      });
  }
};
</script>
