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
  mounted() {
    this.$store.dispatch('setTitle', 'Пользователи');
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
