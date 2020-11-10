<template>
  <img
    src="../assets/img/default-profile.svg"
    alt="Default Profile"
    class="default-profile"
    :style="{ width, height }"
  />
</template>

<script>
export default {
  name: "DefaultProfile",
  props: ["width", "height"],
};
</script>

<style scoped>
.default-profile {
  width: 20px;
  height: auto;
  border-radius: 50%;
}
</style>
