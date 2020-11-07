<template>
  <section class="profile-details">
    <img src="../assets/img/icon.png" alt="Cross Icon" class="cross-icon" />
    <img
      src="../assets/img/circular.png"
      alt="Profile"
      class="profile-details-pic"
    />
    <div class="profile-details-name">Paras Agrawal</div>
    <div class="profile-details-status">Online</div>
    <div class="profile-details-contact">
      <div class="profile-details-call">
        <img
          src="../assets/img/circular.png"
          alt="Call"
          class="profile-details-callIcon"
        />
        <span>Call</span>
      </div>
      <div class="profile-details-email">
        <img
          src="../assets/img/circular.png"
          alt="Email"
          class="profile-details-emailIcon"
        />
        <span>Email</span>
      </div>
    </div>
    <section class="profile-details-table">
      <div v-for="item in [0, 1, 2]" :key="item" class="profile-details-row">
        <div>Room</div>
        <div>102</div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.profile-details {
  @include flex-col-h-cen;
  width: 250px;
  border-left: 1px solid #dbdbdb;
}

.cross-icon {
  width: 20px;
  height: 20px;
  align-self: flex-end;
  margin: 20px;
}

.profile-details-pic {
  max-width: 70px;
  border-radius: 50%;
}

.profile-details-name {
  padding-top: 10px;
  font-size: 16px;
  color: black;
}

.profile-details-status {
  font-size: 14px;
  color: green;
  padding-top: 2px;
  padding-bottom: 10px;
}

.profile-details-contact {
  @include flex-row-sb;
  min-width: 150px;
  font-size: 14px;
}

.profile-details-callIcon {
  width: 10px;
  height: 10px;
  margin-right: 5px;
}

.profile-details-call {
  background: lightgray;
  border-radius: 10px;
  padding: 4px 13px;
}

.profile-details-emailIcon {
  width: 10px;
  height: 10px;
  margin-right: 5px;
}

.profile-details-email {
  background: lightgray;
  border-radius: 10px;
  padding: 4px 13px;
}

.profile-details-table {
  padding-top: 30px;
  min-width: 150px;
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
