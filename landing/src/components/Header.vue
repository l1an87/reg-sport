<script>
export default {
  props: {
    icon: String,
    text: String,
  },
  name: "Header",
};
</script>
<template>
  <div>
    <a :name="`header-${icon}`"></a>
    <div class="header" :class="[`header--${icon}`]">
      <div class="header__icon"></div>
      <div class="header__text">{{ text }}</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 228px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  background: #00C3FF url("./img/header-bg.svg") 50% 0 no-repeat;
  border-top: 20px solid #D9000D;
  color: #011176;
  font-size: 80px;
  font-weight: bold;
  text-transform: uppercase;

  &__icon {
    width: 100px;
    height: 100px;
    margin-right: 60px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
  }

  &--1 {
    .header__icon {
      background-image: url("./img/header-1.svg");
    }
  }

  &--2 {
    .header__icon {
      background-image: url("./img/header-2.svg");
    }
  }

  &--3 {
    .header__icon {
      background-image: url("./img/header-3.svg");
    }
  }

  &--4 {
    .header__icon {
      background-image: url("./img/header-4.svg");
    }
  }

  &--5 {
    .header__icon {
      background-image: url("./img/header-5.svg");
    }
  }
}

@media (max-width: 1020px) {
  .header {
    height: 180px;
  }
  .header__icon{
    width: 80px;
    height: 80px;
  }
  .header__text{
    font-size: 60px;
  }
}

@media (max-width: 800px) {
  .header {
    height: 140px;
  }
  .header__icon{
    width: 60px;
    height: 60px;
    margin-right: 48px;
  }
  .header__text{
    font-size: 40px;
  }
}

@media (max-width: 600px) {
  .header {
    height: 120px;
  }
  .header__icon{
    width: 48px;
    height: 48px;
    margin-right: 36px;
  }
  .header__text{
    font-size: 32px;
  }
}

@media (max-width: 420px) {
  .header {
    height: 100px;
  }
  .header__icon{
    width: 36px;
    height: 36px;
    margin-right: 24px;
  }
  .header__text{
    font-size: 24px;
  }
}

</style>
