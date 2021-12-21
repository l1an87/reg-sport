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
  mounted() {
    this.$store.dispatch('setTitle', 'Команды');
  },
};
</script>
<template>
  <div>
    <v-card>
      <router-view
          @add="handlerAdd"
          @update="handlerClose"
          @create="handlerClose"
          @cancel="handlerClose"
          @edit="handlerEdit"
      ></router-view>
    </v-card>
  </div>
</template>
