<template>
  <main class="childtweets">
    <section class="childtweets-header">
      <img
        :src="currentTweet?.user?.profile_image_url"
        alt="Profile Picture"
        class="childtweets-profilePic"
      />
      <div class="childtweets-header-name">{{ currentTweet?.user?.name }}</div>
      <div class="green-dot" v-if="currentTweet?.user?.geo_enabled"></div>
      <div class="childtweets-header-room">Room: 102</div>
      <div class="childtweets-header-time">Oct 1 - Oct 12</div>
      <div class="childtweets-header-create">Create a task</div>
    </section>
    <section class="childtweets-body">
      <div class="childtweets-body-header">{{ getDay() }}</div>
      <ChildTweetMsg :currentTweet="currentTweet" />
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
    </section>
    <div class="childtweets-body-reply">
      <Reply :currentTweet="currentTweet" />
    </div>
  </main>
</template>

<script>
import moment from "moment";
import ChildTweetMsg from "./ChildTweetMsg";
import Reply from "./Reply";
import { readCookie } from "../utils/cookie";

export default {
  name: "ChildTweets",
  data() {
    return {
      currUser: JSON.parse(readCookie("userData"))?.currUser,
    };
  },
  components: { ChildTweetMsg, Reply },
  props: {
    currentTweet: Object,
  },
  methods: {
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
</style>
