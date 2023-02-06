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
          <div>Иван Иванов</div>
          <div>Общие вопросы</div>
          <div><a href="tel:+79267250577">+7 (926) 725-05-77</a></div>
          <div><a href="mailto:example@mail.ru">example@mail.ru</a></div>
        </div>
        <div class="screen-6__col">
          <div>Иван Иванов</div>
          <div>Общие вопросы</div>
          <div><a href="tel:+79267250577">+7 (926) 725-05-77</a></div>
          <div><a href="mailto:example@mail.ru">example@mail.ru</a></div>
        </div>
        <div class="screen-6__col">
          <div>Иван Иванов</div>
          <div>Общие вопросы</div>
          <div><a href="tel:+79267250577">+7 (926) 725-05-77</a></div>
          <div><a href="mailto:example@mail.ru">example@mail.ru</a></div>
        </div>
        <div class="screen-6__col">
          <div>Иван Иванов</div>
          <div>Общие вопросы</div>
          <div><a href="tel:+79267250577">+7 (926) 725-05-77</a></div>
          <div><a href="mailto:example@mail.ru">example@mail.ru</a></div>
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
