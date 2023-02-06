<script>
import Header from '../components/Header.vue';

export default {
  name: "Screen-4",
  components: {
    Header,
  },
};
</script>
<template>
  <div class="screen-54">
    <Header
        icon="3"
        text="РЕЗУЛЬТАТЫ"
    />
    <div class="screen-54__link">
      <a href="http://start.nashaliga.ru/" target="_blank">
        <img src="./img/link.svg" alt="">
      </a>
    </div>
  </div>
</template>
<style scoped lang="scss">
.screen-54 {
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
