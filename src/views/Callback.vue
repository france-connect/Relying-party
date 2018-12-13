<template>
  <v-container class="centered">
    <circles-to-rhombuses-spinner
      :animation-duration="1200"
      :circles-num="3"
      :circle-size="15"
      color="#ff1d5e"
    />
  </v-container>
</template>

<script>
import { CirclesToRhombusesSpinner } from "epic-spinners";
import { USER_REQUEST_V1, USER_INFO_V1 } from "@/store/actions/user";
import { mapGetters } from "vuex";

export default {
  components: {
    CirclesToRhombusesSpinner
  },
  computed: {
    ...mapGetters(["accessToken", "userInfos"])
  },
  mounted: function() {
    this.$store.dispatch(USER_REQUEST_V1, this.$route.query.code).then(() => {
      this.$store.dispatch(USER_INFO_V1, this.accessToken).then(response => {
        delete response._claim_names;
        delete response._claim_sources;
        delete response.sub;
        localStorage.setItem("userInfos", JSON.stringify(response));
        this.$router.push("/");
      });
    });
  }
};
</script>

<style scoped>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
}
</style>
