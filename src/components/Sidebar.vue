<template>
  <main class="sidebar">
    <section class="sidebar-dots">
      <div class="sidebar-dot red"></div>
      <div class="sidebar-dot orange"></div>
      <div class="sidebar-dot green"></div>
    </section>

    <svg width="36" height="34" class="pentagon">
      <polygon points="9,0 27,0 36,17 18,34 0,17" style="fill:#BF392C;" />
    </svg>

    <section class="sidebar-btns">
      <div class="sidebar-btn">
        <img src="../assets/img/timer.svg" alt="timer-icon" id="timer-icon" />
      </div>
      <div class="sidebar-btn">
        <img src="../assets/img/home.svg" alt="home-icon" id="home-icon" />
      </div>
      <div class="sidebar-btn">
        <img src="../assets/img/users.svg" alt="users-icon" id="users-icon" />
      </div>
      <div class="sidebar-btn active">
        <img src="../assets/img/chat.svg" alt="chat-icon" id="chat-icon" />
      </div>
      <div class="sidebar-btn">
        <img
          src="../assets/img/credit-card.svg"
          alt="credit-card-icon"
          id="credit-card-icon"
        />
      </div>
      <div class="sidebar-btn">
        <img src="../assets/img/store.svg" alt="store-icon" id="store-icon" />
      </div>
    </section>

    <section class="sidebar-bottom">
      <div class="sidebar-bottom-icon">
        <img
          src="../assets/img/record.svg"
          alt="record-icon"
          id="record-icon"
        />
      </div>
      <div class="sidebar-profile">
        <img :src="currUser?.profile_image_url" alt="icon" />
      </div>
    </section>
  </main>
</template>

<script>
import { readCookie } from "../utils/cookie";

export default {
  name: "Sidebar",
  data() {
    return {
      currUser:
        readCookie("userData") && JSON.parse(readCookie("userData"))?.currUser,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.sidebar {
  background: #f7f6f3;
  width: 100%;
  min-width: 65px;
  height: 100vh;
  @include flex-col-h-cen;
  position: relative;
}
.sidebar-dots {
  padding-top: 7px;
  width: 100%;
  @include flex-row-se;
}
.sidebar-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.red {
  background: #ff6058;
}
.orange {
  background: #ffbd2e;
}
.green {
  background: #29cb41;
}
.pentagon {
  margin: 25px 0 50px 0;
}
.sidebar-btns {
  width: 100%;
  @include flex-col-h-cen;
}
.sidebar-btn {
  width: 100%;
  margin: 10px 0;
  padding: 10px 0;
  @include flex-row-cen;
}
.sidebar-btn img {
  width: 22px;
  height: 22px;
}
.active {
  background: #e8e7e4;
}
.sidebar-bottom {
  @include flex-col-h-cen;
  position: absolute;
  bottom: 0;
}
.sidebar-bottom-icon {
  padding: 15px 0;
}
.sidebar-profile {
  padding: 15px 0 35px 0;
}
.sidebar-profile img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
