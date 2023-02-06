<script>
import Header from '../components/Header.vue';

export default {
  name: "Screen-5",
  components: {
    Header,
  },
};
</script>
<template>
  <div class="screen-5">
    <Header
        icon="4"
        text="ПРЯМОЙ ЭФИР"
    />
    <div class="screen-5__link">
      <img src="./img/link.svg" alt="">
    </div>
  </div>
</template>
<style scoped lang="scss">
.screen-5 {
  &__link {
    text-align: center;
    padding: 36px;
    margin: 48px 0;

    img {
      max-width: 100%;
    }
  }
}
</style>
