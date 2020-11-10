<template>
  <section class="reply">
    <img
      :src="currUser?.profile_image_url"
      alt="assitant"
      class="profile-pic"
    />
    <input
      type="text"
      class="reply-input"
      placeholder="Reply..."
      :onkeydown="reply"
      v-model="message"
    />
    <img
      src="../assets/img/attach.svg"
      alt="attachment-icon"
      class="attachment-icon"
    />
  </section>
</template>

<script>
import axios from "axios";
import { readCookie } from "../utils/cookie";
import { API_HOST } from "../utils/constants";

export default {
  name: "Reply",
  data() {
    return {
      currUser: JSON.parse(readCookie("userData"))?.currUser,
      message: "",
    };
  },
  props: {
    currentTweet: Object,
  },
  methods: {
    reply(event) {
      if (event.key === "Enter") {
        // this.replyToTweet();
      }
    },
    replyToTweet() {
      const config = {
        method: "post",
        url: `${API_HOST}/api/v1/tweets/reply/${this.currentTweet?.id_str}`,
        data: {
          status: `@${this.currentTweet?.user?.screen_name} ${this.message}`,
          // username: "@" + this.currentTweet?.user?.screen_name,
        },
      };
      return axios(config)
        .then((response) => {
          const { data } = response && response.data;
          console.log("response", data);
          this.message = "";
        })
        .catch((error) => {
          console.log("Error: ", error);
          this.message = "";
          return error;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.reply {
  @include flex-row-v-start;
  padding-left: 10px;
  width: 100%;
  position: relative;
}
.profile-pic {
  max-width: 20px;
  height: auto;
  border-radius: 50%;
  margin-top: 2px;
}
.reply-input {
  outline: none;
  color: grey;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  padding-left: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
}
.attachment-icon {
  width: 15px;
  height: auto;
  position: absolute;
  right: 20px;
  top: calc(50% - 15px);
}
</style>
