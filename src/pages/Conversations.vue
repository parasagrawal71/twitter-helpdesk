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
            :client="client"
          />
          <Profile :currentTweet="currentTweet" />
        </section>
      </section>
    </section>
  </main>
</template>

<script>
import { w3cwebsocket } from "websocket";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import ParentTweet from "../components/ParentTweet";
import ChildTweets from "../components/ChildTweets";
import Profile from "../components/Profile";
import { API_HOST } from "../utils/constants";
import { readCookie } from "../utils/cookie";

const userData = readCookie("userData") && JSON.parse(readCookie("userData"));
// const ORIGIN = window.location.origin;
const HOST = API_HOST?.includes("https")
  ? "ws://127.0.0.1:8000" // ORIGIN.replace(/^https/, "ws")?.substr(0, ORIGIN.length - 1)
  : "ws://127.0.0.1:8000";
const client = new w3cwebsocket(
  `${HOST}?oauth_token=${userData?.oauth_token}&oauth_token_secret=${userData?.oauth_token_secret}&screen_name=${userData?.screen_name}`,
  "echo-protocol"
);

export default {
  name: "Conversations",
  data() {
    return {
      mentions: [],
      currentTweet: [],
      searchText: "",
      client: client,
    };
  },
  components: { Sidebar, Header, SubHeader, ParentTweet, ChildTweets, Profile },
  mounted() {
    // console.log("userData", JSON.parse(readCookie("userData")));
    this.fetchMentions();
    // eslint-disable-next-line vue/no-mutating-props
    this.client.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    this.client.onerror = (error) => {
      console.log("Connect Error: " + error.toString());
    };

    this.client.onclose = (error) => {
      console.log("Connection closed: " + error.toString());
    };

    // eslint-disable-next-line vue/no-mutating-props
    this.client.onmessage = (message) => {
      let { data } = message;
      const newTweet = JSON.parse(data)?.data;
      console.log("NEW TWEET", newTweet);
      if (JSON.parse(data)?.type === "NEW_TWEET") {
        if (!newTweet?.in_reply_to_status_id_str) {
          this.mentions.unshift(newTweet);
          this.mentions = [...this.mentions];
          this.currentTweet = newTweet;
        } else {
          // eslint-disable-next-line vue/no-mutating-props
          if (!this.currentTweet?.replies) {
            this.currentTweet.replies = [
              {
                text: `${newTweet?.text}`,
                referenced_tweets: [
                  {
                    type: "replied_to",
                    id: this.currentTweet?.id_str,
                  },
                ],
              },
            ];
            return;
          }
          this.currentTweet.replies = [
            ...this.currentTweet?.replies,
            {
              text: `${newTweet?.text}`,
              referenced_tweets: [
                {
                  type: "replied_to",
                  id: this.currentTweet?.id_str,
                },
              ],
            },
          ];
        }
      }
    };
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
    flatten(repliesArr) {
      const flattedArr = [];
      repliesArr.map((repliesObj) => {
        let flatted = { ...repliesObj };
        if (Object.keys(flatted).length) {
          flattedArr.push(flatted);
        }
        delete flatted.replies;
        while ("replies" in repliesObj) {
          const newflatObj = { ...repliesObj.replies[0] };
          delete newflatObj.replies;
          if (Object.keys(newflatObj).length) {
            flattedArr.push(newflatObj);
          }
          repliesObj = repliesObj.replies[0];
          if (repliesObj === undefined) {
            break;
          }
        }
      });
      return flattedArr;
    },
    fetchMentions() {
      const userData =
        readCookie("userData") && JSON.parse(readCookie("userData"));
      const config = {
        method: "get",
        url: `${API_HOST}/api/v1/tweets/mentions`,
        params: {
          token: userData?.oauth_token,
          tokenSecret: userData?.oauth_token_secret,
        },
      };
      return axios(config)
        .then((response) => {
          const { data } = response && response.data;
          // console.log("data", data);
          const updatedData = data?.map((item) => {
            const updatedReplies = this.flatten(item?.replies);
            item.replies = updatedReplies;
            return item;
          });
          // console.log("updatedData", updatedData);
          this.mentions = updatedData;
          this.currentTweet = updatedData[0];
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
