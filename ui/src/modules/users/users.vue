<script>
export default {
  methods: {
    handlerEdit(id) {
      this.$router.push(`/users/${id}`);
    },
    handlerAdd() {
      this.$router.push('/users/add');
    },
    handlerClose() {
      this.$router.push('/users');
    },
  },
};
</script>
<template>
  <div>
    <v-card>
      <v-card-title class="pb-0">
        Пользователи
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
