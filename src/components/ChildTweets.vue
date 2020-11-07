<template>
  <main class="childtweets">
    <section class="childtweets-header">
      <img
        src="../assets/img/circular.png"
        alt="Profile Picture"
        class="childtweets-profilePic"
      />
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

.childtweets-profilePic {
  width: 20px;
  height: auto;
  border-radius: 50%;
}
</style>
