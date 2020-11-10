<template>
  <section class="profile-details">
    <img src="../assets/img/cross.svg" alt="Cross Icon" class="cross-icon" />
    <img
      :src="currentTweet?.user?.profile_image_url"
      alt="Profile"
      class="profile-details-pic"
      v-if="currentTweet?.user?.profile_image_url"
    />
    <DefaultProfile width="50px" v-else />
    <div class="profile-details-name">{{ currentTweet?.user?.name }}</div>
    <div
      :class="currentTweet?.user?.geo_enabled ? 'green' : 'grey'"
      class="profile-details-status"
    >
      {{ currentTweet?.user?.geo_enabled ? "Online" : "Offline" }}
    </div>
    <div class="profile-details-contact">
      <div class="profile-details-call">
        <img
          src="../assets/img/call.svg"
          alt="Call"
          class="profile-details-callIcon"
        />
        <span>Call</span>
      </div>
      <div class="profile-details-email">
        <img
          src="../assets/img/email.svg"
          alt="Email"
          class="profile-details-emailIcon"
        />
        <span>Email</span>
      </div>
    </div>
    <section class="profile-details-table">
      <div class="profile-details-row">
        <div>Followers</div>
        <div>{{ currentTweet?.user?.followers_count }}</div>
      </div>
      <div class="profile-details-row">
        <div>Following</div>
        <div>{{ currentTweet?.user?.friends_count }}</div>
      </div>
      <div class="profile-details-row">
        <div>Username</div>
        <div>{{ "@" + currentTweet?.user?.screen_name }}</div>
      </div>
    </section>

    <Tasks />
  </section>
</template>

<script>
import Tasks from "./Tasks";
import DefaultProfile from "./DefaultProfile";

export default {
  name: "Profile",
  components: { Tasks, DefaultProfile },
  props: {
    currentTweet: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.profile-details {
  @include flex-col-h-cen;
  min-width: 250px;
  width: 30%;
  border-left: 1px solid #dbdbdb;
  position: relative;
}

.cross-icon {
  width: 12px;
  height: 12px;
  background: #f7f6f3;
  padding: 5px;
  border-radius: 50%;
  align-self: flex-end;
  margin: 10px 20px;
}

.profile-details-pic {
  max-width: 80px;
  border-radius: 50%;
}

.profile-details-name {
  padding-top: 10px;
  font-size: 14px;
  color: black;
}

.profile-details-status {
  font-size: 13px;
  padding-top: 2px;
  padding-bottom: 10px;
}
.green {
  color: green;
}
.grey {
  color: darkgrey;
}
.profile-details-contact {
  @include flex-row-sb;
  min-width: 170px;
  font-size: 14px;
}
.profile-details-call {
  background: #f7f6f3;
  border-radius: 10px;
  padding: 4px 14px;
  @include flex-row-v-cen;
}
.profile-details-callIcon {
  width: 10px;
  height: 10px;
  margin-right: 5px;
}
.profile-details-email {
  background: #f7f6f3;
  border-radius: 10px;
  padding: 4px 13px;
  @include flex-row-v-cen;
}
.profile-details-emailIcon {
  width: 11px;
  height: 11px;
  margin-right: 5px;
}
.profile-details-table {
  padding-top: 30px;
  min-width: 240px;
}

.profile-details-row {
  @include flex-row-sb;
  padding-bottom: 10px;
}

.profile-details-row div:first-child {
  color: grey;
}

.profile-details-row div:last-child {
  text-align: right;
}
</style>
