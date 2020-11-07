<template>
  <main>
    <button @click="requestTwitterToken">Login</button>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  methods: {
    requestTwitterToken() {
      axios
        .request({
          method: "POST",
          url: "https://api.twitter.com/oauth/request_token",
          Authorization: `OAuth oauth_nonce="K7ny27JTpKVsTgdyLeDfmQQWVLELj2zAK5BslRsqyw", oauth_callback="http%3A%2F%2Flocalhost%3A3000%2F", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${Math.floor(
            new Date().getTime() / 1000
          )}", oauth_consumer_key="JAABlOt9wzw9dyr8SASkPjRrj", oauth_signature="ki0m1aFKtdYisdalDQUOHnfOS0EI5XC1Iez1xbhx0Htox2NwrI", oauth_version="1.0"`,
        })
        .then((response) => console.log("response: ", response))
        .catch((e) => console.log("Error: ", e));
    },
  },
};
</script>

<style scoped></style>
