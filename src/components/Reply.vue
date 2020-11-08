<template>
  <section class="reply">
    <img src="../assets/img/circular.png" alt="assitant" class="profile-pic" />
    <input type="text" class="reply-input" placeholder="Reply..." />
    <img
      src="../assets/img/circular.png"
      alt="attachment-icon"
      class="attachment-icon"
    />
  </section>
</template>

<script>
export default {
  name: "Reply",
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.reply {
  @include flex-row-v-start;
  padding-left: 10px;
  width: 100%;
  position: relative;
}
.profile-pic {
  max-width: 20px;
  height: auto;
  border-radius: 50%;
}
.reply-input {
  outline: none;
  color: grey;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  padding-left: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
}
.attachment-icon {
  max-width: 20px;
  height: auto;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: 10px;
}
</style>
