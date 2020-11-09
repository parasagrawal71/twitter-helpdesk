<template>
  <main class="subheader">
    <section class="subheader--left">
      <div class="subheader-text">Conversations</div>
      <div class="subheader-searchbox">
        <Searchbox />
      </div>
      <div class="subheader-filter">
        <img
          src="../assets/img/filter.svg"
          alt="filter-icon"
          class="filter-icon"
        />
        <div class="subheader-filter-text">Filter</div>
      </div>
    </section>
    <div class="subheader--right">
      <div class="green-dot"></div>
      <div class="subheader-online">Online</div>
    </div>
  </main>
</template>

<script>
import Searchbox from "./Searchbox";

export default {
  name: "SubHeader",
  components: { Searchbox },
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.subheader {
  @include flex-row-b-sb-cen;
  flex: 1;
  padding-top: 30px;
}
.subheader--left {
  @include flex-row-v-cen;
}
.subheader-text {
  color: #161616;
  font-size: 28px;
  font-weight: bold;
  padding-right: 20px;
}
.subheader-searchbox {
  padding-right: 20px;
}
.subheader-filter {
  @include flex-row-v-cen;
  background: #f7f6f3;
  padding: 4px 15px;
  border-radius: 15px;
}
.filter-icon {
  width: 15px;
  height: 15px;
}
.subheader-filter-text {
  font-size: 14px;
  padding-left: 10px;
}
.subheader--right {
  @include flex-row-v-cen;
  padding: 2px 7px;
  border: 1px solid #f0efef;
  border-radius: 10px;
}
.green-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #29cb41;
}
.subheader-online {
  padding-left: 10px;
}
</style>
