<template>
  <main id="app">
    <!-- <Login /> -->
    <Conversations />
  </main>
</template>

<script>
// import Login from "./pages/Login";
import Conversations from "./pages/Conversations";

export default {
  name: "App",
  components: { Conversations },
};
</script>

<style>
body {
  margin: 0;
  box-sizing: border-box;
}
</style>
