<template>
  <div>
    <img class="bigImage" src='~/assets/images/empty.svg' alt="EMPTY">
    <p> لا يوجد{{text}}</p>

    <!-- NOTE: btn background looks buggy! -->
    <NuxtLink to="#" class="text-center">
      <img class="icon" src="~/assets/images/icons/plus.svg" alt="">
      <b-button variant="link">
        {{buttonText}}
      </b-button>
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    name: 'EmptyState',
    props: {
      text: String,
      buttonText: String,
    },
    data() {
      return {}
    }
  }

</script>

<style scoped>
  p {
    padding-top: 40px;
    font-size: 20px;
  }

  .bigImage {
    width: 200px;
    height: 200px;
  }

  .icon {
    margin-left: -40px;
    margin-right: 20px;
  }

</style>
