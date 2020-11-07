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
  </main>
</template>

<script>
export default {
  name: "ChildTweets",
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.childtweets {
  width: 100%;
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
</style>
