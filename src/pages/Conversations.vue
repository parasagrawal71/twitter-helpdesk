<template>
  <main class="conversations">
    <section class="conversations--left"><Sidebar /></section>
    <section class="conversations--right">
      <Header />
      <SubHeader @searchText="setSearchText" />
      <section class="tweets">
        <section class="tweets--left">
          <section class="tweets-latest">
            <ParentTweet
              v-for="item in activeMentions"
              :key="item"
              :tweetData="item"
              @click="setCurrentTweet(item)"
            />
          </section>
          <section class="tweets-expired">
            <div class="tweets-expired-header">
              <span>Expired chats</span>
            </div>
            <ParentTweet
              v-for="item in expiredMentions"
              :key="item"
              :tweetData="item"
              @click="setCurrentTweet(item)"
            />
          </section>
        </section>
        <section class="tweets--right">
          <ChildTweets
            :currentTweet="currentTweet"
            :fetchMentions="fetchMentions"
          />
          <Profile :currentTweet="currentTweet" />
        </section>
      </section>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import ParentTweet from "../components/ParentTweet";
import ChildTweets from "../components/ChildTweets";
import Profile from "../components/Profile";
import { API_HOST } from "../utils/constants";

export default {
  name: "Conversations",
  data() {
    return {
      mentions: [],
      currentTweet: [],
      searchText: "",
    };
  },
  components: { Sidebar, Header, SubHeader, ParentTweet, ChildTweets, Profile },
  mounted() {
    this.fetchMentions();
  },
  computed: {
    activeMentions() {
      return this.mentions.filter(
        (item) =>
          new Date(item.created_at) >
          new Date(new Date().getTime() - 48 * 60 * 60000)
      );
    },
    expiredMentions() {
      return this.mentions.filter(
        (item) =>
          new Date(item.created_at) <=
          new Date(new Date().getTime() - 48 * 60 * 60000)
      );
    },
  },
  methods: {
    setSearchText(value) {
      this.searchText = value;
    },
    fetchMentions() {
      const config = {
        method: "get",
        url: `${API_HOST}/api/v1/tweets/mentions`,
      };
      return axios(config)
        .then((response) => {
          const { data } = response && response.data;
          // console.log("data", data);
          this.mentions = data;
          this.currentTweet = data[0];
        })
        .catch((error) => {
          // console.log("Error: ", error);
          return error;
        });
    },
    setCurrentTweet(item) {
      this.currentTweet = item;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.conversations {
  @include flex-row;
}
.conversations--left {
  width: 5%;
}
.conversations--right {
  width: 95%;
  padding: 10px 80px;
}
.tweets {
  padding-top: 20px;
  width: 100%;
  @include flex-row;
}
.tweets--left {
  width: 21%;
  overflow-y: scroll;
  height: 81vh;
}
.tweets--left::-webkit-scrollbar {
  display: none;
}
.tweets-latest {
}
.tweets-expired {
}
.tweets-expired-header {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #e6e6e6;
  line-height: 0.1em;
  margin: 20px 0 20px;
}
.tweets-expired-header span {
  background: #fff;
  padding: 0 10px;
}
.tweets--right {
  width: 79%;
  margin-left: 30px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  @include flex-row-sb;
}
</style>
