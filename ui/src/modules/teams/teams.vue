<script>
export default {
  methods: {
    handlerEdit(id) {
      this.$router.push(`/teams/${id}`);
    },
    handlerAdd() {
      this.$router.push('/teams/add');
    },
    handlerClose() {
      this.$router.push('/teams');
    },
  },
};
</script>
<template>
  <div>
    <v-card>
      <v-card-title class="pb-0">
        Команды
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
