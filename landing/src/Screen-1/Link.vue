<script>
export default {
  props: {
    icon: String,
    name: String,
  },
};
</script>
<template>
  <a class="link" :class="[`link--${icon}`]" :href="`#header-${icon}`">
    <div class="link__icon"></div>
    <div class="link__text">
      {{ name }}
    </div>
  </a>
</template>
<style scoped lang="scss">
.link {
  display: flex;
  align-items: center;
  padding: 24px;
  cursor: pointer;
  text-decoration: none;

  &__text {
    background: #ffffff;
    color: #011176;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
  }

  &__icon {
    width: 88px;
    height: 88px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &--1 {
    .link__icon {
      background-image: url("./img/link-1.svg");
    }
  }

  &--2 {
    .link__icon {
      background-image: url("./img/link-2.svg");
    }
  }

  &--3 {
    .link__icon {
      background-image: url("./img/link-3.svg");
    }
  }

  &--4 {
    .link__icon {
      background-image: url("./img/link-4.svg");
    }
  }

  &--5 {
    .link__icon {
      background-image: url("./img/link-5.svg");
    }
  }
}

@media (max-width: 1020px) {
  .link {
    width: 366px;
  }
}

@media (max-width: 900px) {
  .link {
    padding: 16px;
  }
  .link__text {
    flex: 1;
    margin-left: 16px;
  }
}

@media (max-width: 400px) {
  .link {
    width: 100%;
    padding: 16px 0;
  }
  .link__text {
    font-size: 16px;
  }
  .link__icon {
    width: 60px;
    height: 60px;
  }
}
</style>
