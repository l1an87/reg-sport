<script>
import Header from '../components/Header.vue';

export default {
  name: "Screen-2",
  components: {
    Header,
  },
};
</script>
<template>
  <div class="screen-2">
    <Header
        icon="1"
        text="Расписание"
    />
    <div class="wrap">
      <div class="screen-2__schedule">
        <div class="screen-2__line">
          <div class="screen-2__time">09:30 - 11:00</div>
          <div class="screen-2__desc">Сбор гостей</div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">11:00 - 11:30</div>
          <div class="screen-2__desc">Торжественное открытие</div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">11:30 - 15:10</div>
          <div class="screen-2__desc">Соревнования по всем дисциплинам</div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">15:10 - 15:40</div>
          <div class="screen-2__desc">Награждение победителей</div>
        </div>
        <div class="screen-2__arrow"></div>
      </div>
      <div class="screen-2__title">
        <img src="./img/icon.svg" alt="">
        <div class="screen-2__title-txt">
          ПРОГРАММА <br>
          ДЛЯ ГОСТЕЙ И БОЛЕЛЬЩИКОВ
        </div>
      </div>
      <div class="screen-2__txt">
        - Детская анимация,<br>
        - Экскурсии в «Сафари парк»,<br>
        - Выставка вездеходов,<br>
        - Катание на тюбинге,<br>
        - Квест по эко-тропе,<br>
        - Конкурсы от ведущего,<br>
        - Катание на коньках и лыжах,<br>
        - Катание на Хаски,<br>
        - Горячее питание.
      </div>
      <div class="screen-2__btn">
        ПОСМОТРЕТЬ ПОДРОБНОЕ РАСПИСАНИЕ
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.screen-2 {
  color: #ffffff;

  &__line {
    margin: 48px -16px;
    display: flex;
  }

  &__time {
    background: #ffffff;
    color: #011176;
    width: 320px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    border-radius: 8px;
    margin: 0 16px;
  }

  &__desc {
    flex: 1;
    background: #00C3FF;
    color: #011176;
    height: 80px;
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: bold;
    border-radius: 8px;
    padding: 0 48px;
    margin: 0 16px;
  }

  &__arrow {
    height: 40px;
    background: url('./img/arrow.svg') 0 0 no-repeat;
    background-size: contain;
    margin: 0 0;
  }

  &__title {
    display: flex;
    margin: 60px 0;
  }

  &__title-txt {
    flex: 1;
    display: flex;
    align-items: center;
    color: #011176;
    font-size: 36px;
    font-weight: bold;
    background: #00C3FF;
    border-radius: 8px;
    padding: 8px 48px;
    margin-left: 16px;
  }

  &__txt {
    margin: 32px 0;
    font-size: 40px;
  }

  &__btn {
    margin: 48px 0;
    font-size: 28px;
    color: #011176;
    height: 100px;
    border-radius: 8px;
    border: 10px solid #D9000D;
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
    background: #00C3FF;
  }
}

@media (max-width: 1020px) {
  .screen-2__time {
    font-size: 32px;
    width: 240px;
    height: 60px;
  }
  .screen-2__desc {
    height: 60px;
    font-size: 22px;
    padding: 0 36px;
  }
  .screen-2__title-txt {
    font-size: 28px;
  }
  .screen-2__txt {
    font-size: 28px;
  }
  .screen-2__arrow {
    height: 32px;
  }
}

@media (max-width: 800px) {
  .screen-2__time {
    font-size: 24px;
    width: 180px;
    height: 48px;
  }
  .screen-2__desc {
    height: 48px;
    font-size: 18px;
    padding: 0 24px;
  }
  .screen-2__title-txt {
    font-size: 22px;
    padding: 8px 24px;
  }
  .screen-2__title img {
    height: 68px;
  }
  .screen-2__btn {
    font-size: 18px;
    border: 4px solid #D9000D;
    margin: 36px 0;
    height: 60px;
  }
  .screen-2__arrow {
    height: 26px;
  }
}

@media (max-width: 600px) {
  .screen-2__time {
    font-size: 18px;
    width: 140px;
    height: 36px;
  }
  .screen-2__desc {
    height: 36px;
    font-size: 14px;
    padding: 0 16px;
  }
  .screen-2__title-txt {
    font-size: 18px;
    padding: 8px 16px;
  }
  .screen-2__title img {
    height: 56px;
  }
  .screen-2__txt {
    font-size: 22px;
  }
  .screen-2__btn {
    font-size: 14px;
    height: 48px;
  }
  .screen-2__arrow {
    height: 20px;
  }
}

@media (max-width: 480px) {
  .screen-2__time {
    font-size: 16px;
    width: 120px;
    height: 36px;
    border-radius: 8px 0 0 8px;
    margin-right: 0;
  }
  .screen-2__desc {
    height: 36px;
    font-size: 12px;
    padding: 0 8px;
    margin-left: 0;
    border-radius: 0 8px 8px 0;
  }
  .screen-2__title-txt {
    font-size: 13px;
    padding: 4px 8px;
  }
  .screen-2__title img {
    height: 48px;
  }
  .screen-2__txt {
    font-size: 18px;
  }
  .screen-2__btn {
    font-size: 13px;
    height: 48px;
  }
  .screen-2__arrow {
    height: 16px;
  }
}
</style>
