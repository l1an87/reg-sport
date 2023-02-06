<script>
import Link from './Link.vue';

export default {
  name: "Screen-1",
  components: {
    Link,
  },
};
</script>
<template>
  <div class="screen-1">
    <div class="wrap">
      <div class="screen-1__logo">
        <img src="./img/logo.svg" alt="">
      </div>
      <div class="screen-1__head">
        <div class="screen-1__date">
          <b>18</b>&nbsp;февраля
          <div class="screen-1__date-bg"></div>
        </div>
        <div class="screen-1__text">
          <b>Дорогие друзья!</b>
          Добро пожаловать на зимнюю спартакиаду<br>
          ПАО АФК "СИСТЕМА"
        </div>
      </div>
      <div class="screen-1__menu">
        <Link
            icon="1"
            name="Расписание"
        />
        <Link
            icon="2"
            name="Карты и схемы"
        />
        <Link
            icon="3"
            name="Результаты"
        />
        <Link
            icon="4"
            name="Прямой эфир"
        />
        <Link
            icon="5"
            name="КОНТАКТЫ"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.screen-1 {
  color: #ffffff;

  &__logo {
    padding: 24px 0;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  &__head {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
  }

  &__date {
    font-size: 38px;
    flex-shrink: 0;
    padding: 16px;

    &-bg {
      background: url("./img/date-bg.svg") 0 0 no-repeat;
      height: 30px;
    }

    b {
      font-weight: 400;
      font-size: 60px;
    }
  }

  &__text {
    font-size: 28px;
    padding: 16px;
    text-align: right;

    b {
      font-size: 40px;
      display: block;
      font-weight: 400;
    }
  }

  &__menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 60px;
  }
}

@media (max-width: 1020px) {
  .screen-1__text {
    font-size: 22px;
  }
}

@media (max-width: 760px) {
  .screen-1__date {
    font-size: 28px;

    b {
      font-size: 42px;
    }
  }
  .screen-1__text {
    font-size: 18px;

    b {
      font-size: 28px;
    }
  }
}

@media (max-width: 540px) {
  .screen-1__head {
    margin-top: 36px;
    flex-direction: column;
  }
  .screen-1__menu {
    margin-top: 36px;
  }
  .screen-1__text {
    text-align: left;
  }
}
</style>
