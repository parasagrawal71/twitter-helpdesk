<template>
  <main class="childtweets">
    <section class="childtweets-header">
      <img
        src="../assets/img/circular.png"
        alt="Profile Picture"
        class="childtweets-profilePic"
      />
      <div class="childtweets-header-name">Paras Agrawal</div>
      <div class="green-dot"></div>
      <div class="childtweets-header-room">Room: 102</div>
      <div class="childtweets-header-time">Oct 1 - Oct 12</div>
      <div class="childtweets-header-create">Create a task</div>
    </section>
    <section class="childtweets-body">
      <div class="childtweets-body-header">Today</div>
      <ChildTweetMsg />
      <div class="childtweets-body-assigned">
        <img
          src="../assets/img/circular.png"
          alt="assitant"
          class="profile-pic"
        />
        <div class="childtweets-body-assigned-text">
          <span>Paras Agrawal</span> (you) assigned to this conversations
        </div>
      </div>
    </section>
    <div class="childtweets-body-reply"><Reply /></div>
  </main>
</template>

<script>
import ChildTweetMsg from "./ChildTweetMsg";
import Reply from "./Reply";

export default {
  name: "ChildTweets",
  components: { ChildTweetMsg, Reply },
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
.profile-pic {
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
