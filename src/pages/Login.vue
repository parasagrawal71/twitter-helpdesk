<template>
  <main>
    <button @click="requestTwitterToken">Login</button>
  </main>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "Login",
  methods: {
    requestTwitterToken() {
      axios
        .request({
          method: "POST",
          url: "https://api.twitter.com/oauth/request_token",
          Authorization: `OAuth oauth_nonce="K7ny27JTpKVsTgdyLeDfmQQWVLELj2zAK5BslRsqyw", oauth_callback="${encodeURIComponent(
            "http://localhost:3000"
          )}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${Math.floor(
            new Date().getTime() / 1000
          )}", oauth_consumer_key="ywkvzrkLoWlJBDu1yYvBOgywg", oauth_signature="IPkHRKPkxx35K5Xgjf5173oHdJRaUyjZEf1xAocmPVhRsvwBNA", oauth_version="1.0"`,
        })
        .then((response) => console.log("response: ", response))
        .catch((e) => console.log("Error: ", e));
    },

    routeToConv() {
      router.push({ name: "Conversations" });
    },
  },
};
</script>

<style scoped></style>
