<script>
import Header from '../components/Header.vue';

export default {
  name: "Screen-3",
  components: {
    Header,
  },
};
</script>
<template>
  <div class="screen-3">
    <Header
        icon="2"
        text="КАРТЫ И СХЕМЫ"
    />
    <div class="screen-3__title-1"><span>СХЕМА ТЕРРИТОРИИ</span></div>
    <div class="screen-3__map-1">
      <a href="/img/map-1.svg" target="_blank">
        <img src="./img/map-1.svg" alt="">
      </a>
    </div>
    <!--    <div class="wrap">-->
    <!--      <div class="screen-3__row">-->
    <!--        <div class="screen-3__col">-->
    <!--          1. Стартовый городок (лыжная гонка) <br>-->
    <!--          2. Керлинг<br>-->
    <!--          3. Хоккей<br>-->
    <!--          4. Зимняя рыбалка<br>-->
    <!--          5. Врач<br>-->
    <!--          6. Автобус в "Сафари парк"<br>-->
    <!--          7. Катание на тюбинге<br>-->
    <!--          8. Детская лыжная трасса<br>-->
    <!--          9. Выставка вездеходов<br>-->
    <!--          10. Питание<br>-->
    <!--          11. Детская зона<br>-->
    <!--          12. Раздевалки для спортсменов<br>-->
    <!--          13. Сервисная зона / Прокат<br>-->
    <!--          14. Камера хранения<br>-->
    <!--          15. Сцена-->
    <!--        </div>-->
    <!--        <div class="screen-3__col">-->
    <!--          16. Игровая комната<br>-->
    <!--          17. Буфетная линия / Питание спортсменов<br>-->
    <!--          18. Сауна<br>-->
    <!--          19. Бассейн<br>-->
    <!--          20. Туалеты<br>-->
    <!--          21. Катание на Хаски<br>-->
    <!--          22. Школа регби<br>-->
    <!--          23. Снежная горка<br>-->
    <!--          24. Стрелковый комплекс<br>-->
    <!--          25. Хоккейные активности<br>-->
    <!--          26. Раздевалка для хоккеистов<br>-->
    <!--          27. Эко-тропа<br>-->
    <!--          28. Катание на коньках<br>-->
    <!--          <img src="./img/icon-1.svg" alt=""> Остановка ШАТЛА (каждые 15 мин.)<br>-->
    <!--          <img src="./img/icon-2.svg" alt=""> Маршрут ШАТЛА (в «Усадьбу Охотника»)-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="screen-3__title-2"><span>ЭКО-ОТЕЛЬ "ИЗУМРУДНЫЙ лес"</span></div>
    <div class="wrap">
      <div class="screen-3__map-2">
        <a href="/img/map-2.svg" target="_blank">
          <img src="./img/map-2.svg" alt="">
        </a>
      </div>
    </div>
    <div class="screen-3__title-2"><span>"УСАДЬБА ОХОТНИКА"</span></div>
    <div class="wrap">
      <div class="screen-3__map-2">
        <a href="/img/map-3.svg" target="_blank">
          <img src="./img/map-3.svg" alt="">
        </a>
      </div>
    </div>
    <div class="wrap">
      <div class="screen-3__map-d">
        <img src="./img/map-d.svg" alt="">
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.screen-3 {
  &__title-1 {
    margin: 48px 0;
    display: flex;
    justify-content: center;

    span {
      font-size: 56px;
      padding: 24px 48px;
      color: #011176;
      border-radius: 8px;
      font-weight: bold;
      align-items: center;
      display: flex;
      justify-content: center;
      background: #00C3FF;
    }
  }

  &__title-2 {
    margin: 48px 0;
    display: flex;
    justify-content: center;

    span {
      font-size: 40px;
      padding: 16px 48px;
      color: #011176;
      border-radius: 8px;
      font-weight: bold;
      align-items: center;
      display: flex;
      justify-content: center;
      background: #00C3FF;
    }
  }

  &__map-1 {
    background: #ffffff;
    text-align: center;
    padding: 36px;

    img {
      max-width: 100%;
    }
  }

  &__map-2 {
    text-align: center;
    padding: 36px;

    img {
      max-width: 100%;
    }
  }

  &__map-d {
    text-align: center;
    padding: 36px;

    img {
      max-width: 750px;
      width: 100%;
    }
  }

  &__row {
    display: flex;
  }

  &__col {
    width: 50%;
    padding: 36px 0;
    font-size: 22px;
    color: #ffffff;
    line-height: 1.5;
  }
}

@media (max-width: 1020px) {
  .screen-3__title-1 span {
    font-size: 36px;
  }
  .screen-3__title-2 {
    margin: 16px 0;
  }
  .screen-3__col {
    font-size: 18px;

    img {
      width: 22px;
    }
  }
  .screen-3__title-2 span {
    font-size: 32px;
  }
}

@media (max-width: 800px) {
  .screen-3__row {
    display: block;
    margin-bottom: 16px;
  }
  .screen-3__col {
    padding: 0;
    width: auto;
  }
  .screen-3__title-1 span {
    font-size: 32px;
  }
  .screen-3__title-2 {
    margin: 0;
  }
  .screen-3__title-2 span {
    font-size: 24px;
  }
}

@media (max-width: 600px) {
  .screen-3__title-1 span {
    font-size: 28px;
  }
  .screen-3__title-2 span {
    font-size: 22px;
  }
}

@media (max-width: 480px) {
  .screen-3__col {
    font-size: 14px;

    img {
      width: 18px;
    }
  }
  .screen-3__title-1 span {
    font-size: 22px;
  }
  .screen-3__title-2 {
    margin: 0;
  }
  .screen-3__title-2 span {
    font-size: 16px;
  }
}
</style>
