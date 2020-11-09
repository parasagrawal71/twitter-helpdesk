<template>
  <section class="tweetbox">
    <div class="tweetbox--left">
      <img
        :src="tweetData?.user?.profile_image_url"
        alt="Profile Picture"
        class="tweetbox-profilePic"
      />
    </div>
    <div class="tweetbox--right">
      <div class="tweetbox-header">
        <div class="tweetbox-header-name">{{ tweetData?.user?.name }}</div>
        <div class="green_dot" v-if="tweetData?.user?.geo_enabled"></div>
        <div
          class="tweetbox-header-msgCount"
          v-if="tweetData?.user?.listed_count !== 0"
        >
          {{ tweetData?.user?.listed_count }}
        </div>
      </div>

      <div class="tweetbox-msg">
        {{ tweetData?.text.replace("@shop__anywhere", "") }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TweetBox",
  props: {
    tweetData: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.tweetbox {
  border: 1px solid lightgrey;
  border-radius: 3px;
  max-height: 60px;
  @include flex-row;
  padding: 15px 10px;
  margin-bottom: 10px;
}
.tweetbox:hover {
  cursor: pointer;
}

.tweetbox--left {
  width: 15%;
}

.tweetbox-profilePic {
  max-width: 20px;
  height: auto;
  border-radius: 50%;
  margin-top: 4px;
}

.tweetbox--right {
  text-align: left;
  padding-left: 15px;
  width: 100%;
}

.tweetbox-header {
  position: relative;
  @include flex-row-v-cen;
  padding-bottom: 5px;
  width: 100%;
}

.tweetbox-header-name {
  padding-right: 5px;
  font-size: 14px;
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
  font-size: 13px;
  color: grey;
}
</style>
