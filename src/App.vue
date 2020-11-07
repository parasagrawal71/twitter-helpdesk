<template>
  <main id="app">
    <Login />
  </main>
</template>

<script>
import Login from "./pages/Login";

export default {
  name: "App",
  components: { Login },
};
</script>

<style>
#app {
  margin: 0;
  box-sizing: border-box;
}
</style>
