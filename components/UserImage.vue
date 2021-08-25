<template>
  <div class="user-image">
    <img v-if="url" class="user-image__with-url" :src="url" />
    <img
      v-else
      class="user-image__default"
      src="../../assets/images/icons/member-wight-full.svg"
      alt="user image"
    />
  </div>
</template>

<script>
export default {
  name: "UserImage",
  props: {
    url: String,
  },
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
