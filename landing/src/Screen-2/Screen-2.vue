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
          <div class="screen-2__time">11:00 - 11:30</div>
          <div class="screen-2__desc">Церемония открытия</div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">11:45 – 12:45</div>
          <div class="screen-2__desc">Семейная эстафета</div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">11:45 – 15:30</div>
          <div class="screen-2__desc">Соревнования по керлингу</div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">12:00 – 15:30</div>
          <div class="screen-2__desc">Турнир по практической стрельбе</div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">12:00</div>
          <div class="screen-2__desc">Лыжная гонка жен.<br> классический стиль</div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">12:20</div>
          <div class="screen-2__desc">Лыжная гонка муж.<br> классический стиль</div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">12:30 – 14:30</div>
          <div class="screen-2__desc">Соревнования по зимней рыбалке</div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">12:40</div>
          <div class="screen-2__desc">Лыжная гонка жен.<br> свободный стиль</div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">13:00</div>
          <div class="screen-2__desc">Лыжная гонка муж. <br> свободный стиль</div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">13:30 – 15:00</div>
          <div class="screen-2__desc">Лыжная гонка.<br>Спринт муж./жен.</div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">15:00</div>
          <div class="screen-2__desc">Лыжная гонка.
            Эстафета
          </div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">15:30 – 16:00</div>
          <div class="screen-2__desc">Викторина, <br>
            розыгрыш подарков
          </div>
        </div>
        <div class="screen-2__line">
          <div class="screen-2__time">16:00 – 16:30</div>
          <div class="screen-2__desc">Церемония награждения</div>
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
      <div class="screen-2__h3">Изумрудный лес</div>
      <div class="screen-2__h4">Активности на улице:</div>
      <div class="screen-2__name">09:30 – 11:00 СБОР ГОСТЕЙ</div>
      <div class="screen-2__desc2">Сбор гостей, регистрация спортсменов</div>
      <div class="screen-2__name">11:00 – 15:00 ШКОЛА РЕГБИ</div>
      <div class="screen-2__desc2">Почувствуй себя настоящим игроком «Зимнего Регби» и занеси свои первые мячи в ворота виртуального соперника.</div>
      <div class="screen-2__name">10:30 – 15:30 РАБОТА ФОТОЗОНЫ</div>
      <div class="screen-2__desc2">Экспресс-печать фото с Енотом обнимашкой.</div>
      <div class="screen-2__name">12:00 – 15:30 ЭКСКУРСИИ В "САФАРИ-ПАРК"</div>
      <div class="screen-2__desc2">Организован трансфер от ФОК</div>
      <div class="screen-2__name">13:00 – 15:30 КАТАНИЕ НА КОНЬКАХ</div>
      <div class="screen-2__desc2">Мастер-классы по элементам фигурного катания, аренда коньков</div>
      <div class="screen-2__name">12:00 – 15:30 КАТАНИЕ НА ТЮБИНГАХ</div>
      <div class="screen-2__desc2">Анимационные программы для детей</div>
      <div class="screen-2__name">12:00 – 15:30 ДЕТСКАЯ ИГРОВАЯ ЗОНА</div>
      <div class="screen-2__desc2">Анимационные программы для детей</div>
      <div class="screen-2__name">12:15 -15:15 КАТАНИЕ НА ОЛЕНЯХ</div>
<!--      <div class="screen-2__desc2">.</div>-->
      <div class="screen-2__name">15:15 -15:30 ЗАЕЗД НА ЛЫЖАХ</div>
      <div class="screen-2__desc2">В РАМКАХ ОНЛАЙН-МАРАФОНА #НАЛЫЖНЕ за каждого участника БФ «Система» переводит средства на реализацию фандрайзингового образовательного проекта «Лифт без отказа»</div>
      <div class="screen-2__h4">Активности в здании ФОК «Аквамарин»:</div>
      <div class="screen-2__name">09:30 – 13:00 ПЛАВАНИЕ</div>
      <div class="screen-2__desc2">Свободное посещение бассейна</div>
      <div class="screen-2__name">10:00 – 16:00 МАСТЕР-КЛАСС ПО РИСОВАНИЮ</div>
      <div class="screen-2__desc2">Мастер-классы для детей по русскому народному промыслу родом из Подмосковья, известном во всем мире – гжели</div>
      <div class="screen-2__name">10:00 – 16:00 ЭКО ИГРА ОТ МТС</div>
      <div class="screen-2__desc2">Семейная интерактивная экологическая настольная игра</div>

      <div class="screen-2__h3">Усадьба охотника</div>
      <div class="screen-2__name screen-2--c2">11:30 – 15:30 ВЫСТАВКА ВЕЗДЕХОДОВ</div>
<!--      <div class="screen-2__desc2">.</div>-->
      <div class="screen-2__name screen-2--c2">12:00 – 15:00 КАЗАЧЬЯ ШАШКА</div>
      <div class="screen-2__desc2">Показательное выступление по рубке шашкой и мастер-класс по крутке шашкой и ее практическому применению</div>
      <div class="screen-2__name screen-2--c2">12:00 – 15:30 ДЕТСКАЯ АНИМАЦИЯ</div>
      <div class="screen-2__desc2">Детская анимация с мишкой Умкой, катание на тюбингах</div>
      <div class="screen-2__name screen-2--c2">12:15 – 15:00 ХОККЕЙ ДЛЯ ДЕТЕЙ </div>
      <div class="screen-2__desc2">Тренеры обучат ребят технике катания, владения клюшкой и броскам по воротам с различных дистанций и положений.
        <br> Участникам желательно приезжать со своей экипировкой</div>
      <div class="screen-2__name screen-2--c2">10:00 – 16:00 МАСТЕР-КЛАСС ПО РИСОВАНИЮ</div>
      <div class="screen-2__desc2">Мастер-классы для детей по русскому народному промыслу родом из Подмосковья, известном во всем мире – гжели</div>
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
    justify-content: center;
    text-align: center;
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

  &__h3 {
    font-size: 49px;
    text-align: center;
    font-weight: 700;
    margin: 48px 0;
  }

  &__h4 {
    font-size: 40px;
    text-align: left;
    margin-top: 64px;
  }

  &__name {
    font-size: 40px;
    padding: 4px 8px;
    margin: 32px 0;
    background: #F27C00;
  }

  &__desc2 {
    font-size: 30px;
  }

  &--c2 {
    background: #00595D;
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
  .screen-2__h3 {
    font-size: 40px;
  }
  .screen-2__h4 {
    font-size: 32px;
  }
  .screen-2__name {
    font-size: 32px;
  }
  .screen-2__desc2 {
    font-size: 24px;
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
  .screen-2__h3 {
    font-size: 32px;
    margin: 32px 0;
  }
  .screen-2__h4 {
    font-size: 28px;
    margin-top: 32px;
  }
  .screen-2__name {
    font-size: 28px;
  }
  .screen-2__desc2 {
    font-size: 20px;
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
  .screen-2__h3 {
    font-size: 28px;
  }
  .screen-2__h4 {
    font-size: 24px;
  }
  .screen-2__name {
    font-size: 24px;
  }
  .screen-2__desc2 {
    font-size: 16px;
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
  .screen-2__h3 {
    font-size: 22px;
  }
  .screen-2__h4 {
    font-size: 18px;
  }
  .screen-2__name {
    font-size: 18px;
  }
  .screen-2__desc2 {
    font-size: 12px;
  }
}
</style>
