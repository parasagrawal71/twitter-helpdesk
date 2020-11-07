<template>
  <main class="conversations">
    <section class="conversations--left"><Sidebar /></section>
    <section class="conversations--right">
      <Header />
      <SubHeader />
    </section>
  </main>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

export default {
  name: "Conversations",
  components: { Sidebar, Header, SubHeader },
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.conversations {
  @include flex-row;
}
.conversations--left {
  width: 5%;
}
.conversations--right {
  width: 95%;
  padding: 20px 80px;
}
</style>
