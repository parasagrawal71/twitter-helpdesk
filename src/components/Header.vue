<template>
  <main class="header">
    <div class="header--left">Updates</div>
    <section class="header--right">
      <div class="header-session">Session: 34 minutes</div>
      <div class="header-user">User: {{ currUser?.name }}</div>
    </section>
  </main>
</template>

<script>
import { readCookie } from "../utils/cookie";

export default {
  name: "Header",
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

.header {
  @include flex-row-b-sb-cen;
  flex: 1;
  color: #a5a5a5;
}
.header--left {
  padding-bottom: 5px;
  border-bottom: 1px solid #a5a5a5;
}
.header--right {
  color: #878787;
  @include flex-row-v-cen;
}
.header-session {
}
.header-user {
  padding-left: 50px;
}
</style>
