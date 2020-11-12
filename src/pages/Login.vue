<template>
  <main class="login">
    <header class="login-header">Twitter Helpdesk</header>

    <section class="login-content">
      <section class="login-content-box">
        <div class="login-content-box-header">
          Already have a Twitter Account?
        </div>
        <button @click="requestTwitterToken" class="twitter-btn">
          <img
            src="../assets/img/twitter-logo.png"
            alt="twitter-logo"
            class="twitter-logo"
          />
          <div class="twitter-btn-text">Sign in with Twitter</div>
        </button>
      </section>
      <section class="login-content-box">
        <div class="login-content-box-header">
          Create a Twitter Account
        </div>
        <button @click="registerOnTwitter" class="twitter-btn">
          <img
            src="../assets/img/twitter-logo.png"
            alt="twitter-logo"
            class="twitter-logo"
          />
          <div class="twitter-btn-text">Create Account</div>
        </button>
      </section>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import router from "../router";
import { setCookie } from "../utils/cookie";
import { API_HOST } from "../utils/constants";

export default {
  name: "Login",
  mounted() {
    this.requestAccessToken();
  },
  methods: {
    registerOnTwitter() {
      window.open("https://twitter.com/");
    },

    requestTwitterToken() {
      const config = {
        method: "get",
        url: `${API_HOST}/api/v1/auth/request_token`,
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
        url: `${API_HOST}/api/v1/auth/access_token`,
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
          setCookie("userData", JSON.stringify(response?.data?.data));
          router.push({ name: "Conversations" });
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

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.login {
  background: #f7f7f7;
  height: 100vh;
}
.login-header {
  padding: 30px 50px;
  font-size: 20px;
  // font-weight: bold;
  font-family: Poppins-Medium;
}
.login-content {
  @include flex-row-b-cen;
  height: calc(100vh - 300px);
}
.login-content-box {
  @include flex-col-h-cen;
  background: #eaeaea;
  border-radius: 4px;
  padding: 50px;
  height: 20vh;
  min-width: 250px;
}
.login-content-box:last-child {
  margin-left: 100px;
}
.login-content-box-header {
}
.twitter-btn {
  @include flex-row-v-cen;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  outline: none;
  margin-top: 50px;
}
.twitter-btn:hover {
  cursor: pointer;
}
.twitter-logo {
  width: 22px;
  height: 22px;
}
.twitter-btn-text {
  font-family: Poppins-Medium;
}
</style>
