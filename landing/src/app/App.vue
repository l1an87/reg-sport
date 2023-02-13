<script>
import Screen1 from '../Screen-1/Screen-1.vue';
import Screen2 from '../Screen-2/Screen-2.vue';
import Screen3 from '../Screen-3/Screen-3.vue';
import Screen4 from '../Screen-4/Screen-4.vue';
import Screen5 from '../Screen-5/Screen-5.vue';
import Screen6 from '../Screen-6/Screen-6.vue';

export default {
  components: {
    Screen1,
    Screen2,
    Screen3,
    Screen4,
    Screen5,
    Screen6,
  },
  name: "App",
};
</script>
<template>
  <div class="app">
    <a name="top"></a>
    <Screen1></Screen1>
        <Screen2></Screen2>
        <Screen3></Screen3>
        <Screen4></Screen4>
        <Screen5></Screen5>
        <Screen6></Screen6>
  </div>
</template>
<style lang="scss">
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src: local("Montserrat"),
  url("./font/Montserrat-VariableFont_wght.ttf") format("woff");
}

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  src: local("Montserrat"),
  url("./font/Montserrat-Bold.ttf") format("woff");
}

body {
  margin: 0;
  background: #001275;
  font-family: 'Montserrat', sans-serif;
}

.app {
  background: url("./img/bg.svg") 50% -650px no-repeat;
  min-height: 300vh;
}

.wrap {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 36px;
}

@media (max-width: 860px) {
  .wrap {
    padding: 24px;
  }
}

@media (max-width: 640px) {
  .wrap {
    padding: 16px;
  }
}
</style>
