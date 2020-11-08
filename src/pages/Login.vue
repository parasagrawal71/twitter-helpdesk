<template>
  <main>
    <button @click="requestTwitterToken">Login</button>
  </main>
</template>

<script>
import axios from "axios";
import router from "../router";
import { setCookie } from "../utils/cookie";

export default {
  name: "Login",
  mounted() {
    this.requestAccessToken();
  },
  methods: {
    requestTwitterToken() {
      const config = {
        method: "get",
        url:
          "https://twitter-helpdesk--server.herokuapp.com/api/v1/auth/request_token",
      };
      return axios(config)
        .then((response) => {
          // console.log(
          //   "response",
          //   response && response.data && response.data.data
          // );
          if (response && response.data && response.data.data) {
            const oauthToken = response.data.data.split("&")[0].split("=")[1];
            window.open(
              `https://api.twitter.com/oauth/authenticate?oauth_token=${oauthToken}`,
              "_self"
            );
          }
        })
        .catch((error) => {
          // console.log("Error: ", error);
          return error;
        });
    },

    async requestAccessToken() {
      const search = window.location.search;
      const oauthTokenStr =
        search && search.substr(1, search.length).split("&")[0];
      const oauthVerifierStr =
        search && search.substr(1, search.length).split("&")[1];

      if (!oauthTokenStr || !oauthVerifierStr) {
        return;
      }
      const oauth_token = oauthTokenStr.split("=")[1];
      const oauth_verifier = oauthVerifierStr.split("=")[1];

      await axios({
        method: "post",
        url:
          "https://twitter-helpdesk--server.herokuapp.com/api/v1/auth/access_token",
        data: {
          oauth_token,
          oauth_verifier,
        },
      })
        .then((response) => {
          // console.log(
          //   "response",
          //   response && response.data && response.data.data
          // );
          const { data } = response && response.data;
          const tempArr = data && data.split("&");
          const dataArray = tempArr.map((item) => item && item.split("=")[1]);
          const userData = {
            oauth_token: dataArray[0],
            oauth_token_secret: dataArray[1],
            user_id: dataArray[2],
            screen_name: dataArray[3],
          };
          setCookie("userData", JSON.stringify(userData));
          router.push({ name: "Conversations" });
          // window.location.replace("/");
        })
        .catch((error) => {
          // console.log("Error: ", error);
          window.location.replace("/");
          return error;
        });
    },
  },
};
</script>

<style scoped></style>
