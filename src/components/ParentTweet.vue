<template>
  <section class="tweetbox">
    <div class="tweetbox--left">
      <img
        src="../assets/img/circular.png"
        alt="Profile Picture"
        class="tweetbox-profilePic"
      />
    </div>
    <div class="tweetbox--right">
      <div class="tweetbox-header">
        <div class="tweetbox-header-name">Paras Agrawal</div>
        <div class="green_dot"></div>
        <div class="tweetbox-header-msgCount">2</div>
      </div>

      <div class="tweetbox-msg">
        Hello there! May I ask a favor? Can you book dosa in breakfast for
        morning
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TweetBox",
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.tweetbox {
  border: 1px solid lightgrey;
  border-radius: 4px;
  width: 255px;
  max-height: 60px;
  @include flex-row;
  padding: 15px 10px;
  margin-bottom: 10px;
}

.tweetbox--left {
  width: 15%;
}

.tweetbox-profilePic {
  max-width: 20px;
  height: auto;
  border-radius: 50%;
}

.tweetbox--right {
  text-align: left;
  padding-left: 20px;
}

.tweetbox-header {
  position: relative;
  @include flex-row-v-cen;
  padding-bottom: 5px;
}

.tweetbox-header-name {
  padding-right: 5px;
  font-size: 16px;
  color: black;
}

.green_dot {
  width: 8px;
  height: 8px;
  background: #5ebb4d;
  border-radius: 50%;
}

.tweetbox-header-msgCount {
  position: absolute;
  right: 0;
  background: red;
  color: white;
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 11px;
}

.tweetbox-msg {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
  font-size: 14px;
  color: grey;
}
</style>
