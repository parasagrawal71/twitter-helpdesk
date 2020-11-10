<template>
  <main class="childtweets">
    <section class="childtweets-header">
      <img
        :src="currentTweet?.user?.profile_image_url"
        alt="Profile Picture"
        class="childtweets-profilePic"
        v-if="currentTweet?.user?.profile_image_url"
      />
      <DefaultProfile v-else />
      <div class="childtweets-header-name">{{ currentTweet?.user?.name }}</div>
      <div class="green-dot" v-if="currentTweet?.user?.geo_enabled"></div>
      <div class="childtweets-header-room">Room: 102</div>
      <div class="childtweets-header-time">Oct 1 - Oct 12</div>
      <div class="childtweets-header-create">Create a task</div>
    </section>
    <section class="childtweets-body">
      <div class="childtweets-body-header">{{ getDay() }}</div>
      <ChildTweetMsg
        :currentTweet="currentTweet"
        :text="currentTweet?.text?.replace('@shop__anywhere', '')?.trim()"
        :time="moment(currentTweet?.created_at).format('h:mm')"
        :profile="currentTweet?.user?.profile_image_url"
      />
      <div class="childtweets-body-assigned">
        <img
          src="../assets/img/customer-service.svg"
          alt="assitant"
          class="customer-service"
        />
        <div class="childtweets-body-assigned-text">
          <span>{{ currUser?.name }}</span> (you) assigned to this conversation
        </div>
      </div>
      <ChildTweetMsg
        v-for="item in showReplies"
        :key="item"
        :currentTweet="currentTweet"
        :text="
          item?.text?.replace(`@${currentTweet?.user?.screen_name}`, '')?.trim()
        "
        :time="moment(currentTweet?.created_at).format('h:mm')"
        :profile="currUser?.profile_image_url"
      />
    </section>
    <div class="childtweets-body-reply">
      <section class="reply">
        <img
          :src="currUser?.profile_image_url"
          alt="assitant"
          class="profile-pic"
          v-if="currUser?.profile_image_url"
        />
        <DefaultProfile v-else />

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
    </div>
  </main>
</template>

<script>
import axios from "axios";
import moment from "moment";
import ChildTweetMsg from "./ChildTweetMsg";
import { readCookie } from "../utils/cookie";
import { API_HOST } from "../utils/constants";
import DefaultProfile from "./DefaultProfile";

export default {
  name: "ChildTweets",
  data() {
    return {
      currUser: JSON.parse(readCookie("userData"))?.currUser,
      message: "",
    };
  },
  components: { ChildTweetMsg, DefaultProfile },
  props: {
    currentTweet: Object,
    fetchMentions: Function,
  },
  computed: {
    showReplies() {
      return this.currentTweet?.replies;
    },
  },
  methods: {
    moment() {
      return moment();
    },
    getDay() {
      if (
        new Date(this.currentTweet?.created_at).getDate() ===
        new Date().getDate()
      ) {
        return "Today";
      } else if (
        new Date(this.currentTweet?.created_at).getDate() ===
        new Date().getDate() - 1
      ) {
        return "Yesterday";
      } else {
        return moment(new Date(this.currentTweet?.created_at)).format(
          "DD MMM, YYYY"
        );
      }
    },
    reply(event) {
      if (event.key === "Enter") {
        this.replyToTweet(event.target.value);
      }
    },
    replyToTweet(tweetMsg) {
      const vm = this;
      const config = {
        method: "post",
        url: `${API_HOST}/api/v1/tweets/reply/${this.currentTweet?.id_str}`,
        data: {
          status: `@${this.currentTweet?.user?.screen_name} ${tweetMsg}`,
          // username: "@" + this.currentTweet?.user?.screen_name,
        },
      };
      return axios(config)
        .then((response) => {
          const { data } = response && response.data;
          console.log("response", data);
          vm.message = "";
          if (!vm.currentTweet?.replies) {
            return;
          }
          // eslint-disable-next-line vue/no-mutating-props
          vm.currentTweet.replies = [
            ...vm.currentTweet?.replies,
            {
              text: `@${vm.currentTweet?.user?.screen_name} ${tweetMsg}`,
              referenced_tweets: [
                {
                  type: "replied_to",
                  id: vm.currentTweet?.id_str,
                },
              ],
            },
          ];
        })
        .catch((error) => {
          // console.log("Error: ", error);
          this.message = "";
          return error;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.childtweets {
  width: 70%;
  position: relative;
}
.childtweets-header {
  @include flex-row-v-cen;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px 20px;
  position: relative;
}
.childtweets-profilePic {
  width: 20px;
  height: auto;
  border-radius: 50%;
}
.childtweets-header-name {
  padding-left: 10px;
}
.green-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #29cb41;
  margin-left: 10px;
}
.childtweets-header-room {
  padding-left: 40px;
}
.childtweets-header-time {
  padding-left: 60px;
}
.childtweets-header-create {
  position: absolute;
  right: 30px;
  background: #f7f6f3;
  padding: 5px 15px;
  border-radius: 10px;
}
.childtweets-body {
  padding: 10px;
}
.childtweets-body-header {
  padding: 15px 40px;
  color: #9d9d9d;
}
.childtweets-body-assigned {
  @include flex-row-v-cen;
  padding: 5px 10px;
  margin: 10px 0;
}
.childtweets-body-assigned-text {
  padding-left: 10px;
  color: grey;
}
.childtweets-body-assigned-text span {
  color: #bd0f0f;
}
.customer-service {
  max-width: 20px;
  height: auto;
  border-radius: 50%;
}
.childtweets-body-reply {
  padding-left: 10px;
  position: absolute;
  bottom: 0;
  width: 90%;
}

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
