<template>
  <section class="childtweetmsg">
    <div class="childtweetmsg--left">
      <img :src="profile" alt="Profile Picture" class="profile-pic" />
    </div>
    <div class="childtweetmsg--right">
      <div class="childtweetmsg-header">
        <div class="childtweetmsg-greet">
          {{ text }}
        </div>
        <div class="childtweetmsg-time">
          {{ time }}
        </div>
      </div>

      <!-- <div class="childtweetmsg-descrp">
        I have a problem in my room, it needs to be cleaned.
      </div>
      <div class="childtweetmsg-imgs">
        <img src="../assets/img/hotel-room-1.jpg" alt="hotel room" />
        <img src="../assets/img/hotel-room-2.jpg" alt="hotel room" />
        <img src="../assets/img/hotel-room-1.jpg" alt="hotel room" />
      </div>
      <div class="childtweetmsg-descrp">
        This is what I see! Not good!
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "ChildTweetMsg",
  props: {
    currentTweet: Object,
    text: String,
    time: String,
    profile: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.childtweetmsg {
  border-radius: 4px;
  @include flex-row;
  padding: 5px 10px;
}
.childtweetmsg--left {
}
.profile-pic {
  max-width: 20px;
  height: auto;
  border-radius: 50%;
  margin-top: 2px;
}
.childtweetmsg--right {
  text-align: left;
  padding-left: 10px;
  width: 100%;
}
.childtweetmsg-header {
  position: relative;
  @include flex-row-v-cen;
}
.childtweetmsg-greet {
  padding-right: 5px;
  font-size: 16px;
  color: black;
}
.childtweetmsg-time {
  position: absolute;
  right: 0;
  font-size: 14px;
  color: grey;
  padding-right: 15px;
}
.childtweetmsg-descrp {
  font-size: 15px;
  padding-top: 10px;
}
.childtweetmsg-imgs {
  @include flex-row;
}
.childtweetmsg-imgs img {
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-right: 10px;
  border-radius: 10px;
}
.childtweetmsg-imgs img:last-child {
  margin-right: 0;
}
</style>
