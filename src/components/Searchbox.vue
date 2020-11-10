<template>
  <section class="searchbox">
    <img
      src="../assets/img/search-icon.svg"
      alt="Search Icon"
      class="search-icon"
    />
    <input
      class="searchbox-input"
      type="text"
      placeholder="Quick Search"
      v-model="searchText"
    />
  </section>
</template>

<script>
export default {
  name: "Searchbox",
  data() {
    return {
      searchText: "",
    };
  },
  watch: {
    searchText: function() {
      this.$emit("search-text", this.searchText);
    },
  },
};
</script>

<style lang="scss" scoped>
.searchbox {
  position: relative;
}
.search-icon {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 7px;
  left: 15px;
}
.searchbox-input {
  outline: none;
  border: 1px solid #d5d5d5;
  border-radius: 15px;
  padding: 5px 0 5px 40px;
}
</style>
