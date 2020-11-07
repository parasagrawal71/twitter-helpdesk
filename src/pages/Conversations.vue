<template>
  <main class="conversations">
    <section class="conversations--left"><Sidebar /></section>
    <section class="conversations--right">
      <Header />
      <SubHeader />
      <section class="tweets">
        <section class="tweets--left">
          <section class="tweets-latest">
            <ParentTweet v-for="item in [0, 1, 2]" :key="item" />
          </section>
          <section class="tweets-expired">
            <div class="tweets-expired-header">
              <span>Expired chats</span>
            </div>
            <ParentTweet v-for="item in [0, 1, 2, 3]" :key="item" />
          </section>
        </section>
        <section class="tweets--right">
          <ChildTweets />
          <Profile />
        </section>
      </section>
    </section>
  </main>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import ParentTweet from "../components/ParentTweet";
import ChildTweets from "../components/ChildTweets";
import Profile from "../components/Profile";

export default {
  name: "Conversations",
  components: { Sidebar, Header, SubHeader, ParentTweet, ChildTweets, Profile },
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
  padding: 20px 80px;
}
.tweets {
  padding-top: 40px;
  width: 100%;
  @include flex-row;
}
.tweets--left {
  width: 21%;
  overflow-y: scroll;
  max-height: 74vh;
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
