<script>
export default {
  methods: {
    handlerEdit(id) {
      this.$router.push(`/sport-type/${id}`);
    },
    handlerAdd() {
      this.$router.push('/sport-type/add');
    },
    handlerClose() {
      this.$router.push('/sport-type');
    },
  },
};
</script>
<template>
  <div>
    <v-card>
      <v-card-title class="pb-0">
        Виды спорта
        <v-spacer/>
        <v-btn color="primary" @click="handlerAdd">Создать</v-btn>
      </v-card-title>
      <router-view
          @update="handlerClose"
          @create="handlerClose"
          @cancel="handlerClose"
          @edit="handlerEdit"
      ></router-view>
    </v-card>
  </div>
</template>
