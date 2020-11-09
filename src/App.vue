<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@font-face {
  font-family: "Poppins-Light";
  src: url("~@/assets/fonts/Poppins/Poppins-Light.ttf") format("truetype");
}

@font-face {
  font-family: "Poppins-Regular";
  src: url("~@/assets/fonts/Poppins/Poppins-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Poppins-Medium";
  src: url("~@/assets/fonts/Poppins/Poppins-Medium.ttf") format("truetype");
}

@font-face {
  font-family: "Poppins-SemiBold";
  src: url("~@/assets/fonts/Poppins/Poppins-SemiBold.ttf") format("truetype");
}

body {
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins-Regular";
  font-size: 14px;
}
</style>
