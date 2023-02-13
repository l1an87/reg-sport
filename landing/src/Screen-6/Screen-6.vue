<script>
import Header from '../components/Header.vue';

export default {
  name: "Screen-6",
  components: {
    Header,
  },
};
</script>
<template>
  <div class="screen-6">
    <Header
        icon="5"
        text="КОНТАКТЫ"
    />
    <div class="wrap">
      <div class="screen-6__row">
        <div class="screen-6__col">
          <div>Понамарчук Маргарита</div>
          <div>Административные вопросы</div>
          <div><a href="tel:+79055466906">+7 (905) 546-69-06</a></div>
        </div>
        <div class="screen-6__col">
          <div>Должкова Ксения</div>
          <div>Организационные вопросы</div>
          <div><a href="tel:+79164916411">+7 (916) 491-64-11</a></div>
        </div>
        <div class="screen-6__col">
          <div>Юськин Валерий</div>
          <div>Парковка и трансфер</div>
          <div><a href="tel:+7905546906">+7 (905) 546-69-06</a></div>
        </div>
        <div class="screen-6__col">
          <div>Кобзев Андрей</div>
          <div>Безопасность</div>
          <div><a href="tel:+79853988854">+7 (985) 398-88-54</a></div>
        </div>
        <div class="screen-6__col">
          <div>Маркин Андрей</div>
          <div>Спорт</div>
          <div><a href="tel:+79166575115">+7 (916) 657-51-15</a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.screen-6 {
  &__row {
    display: flex;
    margin: 48px;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  &__col {
    padding: 24px;
    border-top: 6px solid #00C3FF;
    border-bottom: 6px solid #00C3FF;
    font-size: 32px;
    color: #ffffff;
    line-height: 2;
    margin: 24px 0;
    font-weight: bold;
    width: 45%;
    box-sizing: border-box;
    text-align: center;
  }

  a {
    color: #00C3FF;
    text-decoration: none;
  }
}

@media (max-width: 1020px) {
  .screen-6__row {
    margin: 0;
  }
  .screen-6__col {
    padding: 24px;
    font-size: 24px;
  }
}

@media (max-width: 800px) {
  .screen-6__col {
    padding: 24px;
    font-size: 18px;
    margin: 12px 0;
  }
}

@media (max-width: 600px) {
  .screen-6__col {
    padding: 16px;
    font-size: 14px;
    margin: 8px 0;
  }
}

@media (max-width: 480px) {
  .screen-6__col {
    width: 90%;
  }
}
</style>
