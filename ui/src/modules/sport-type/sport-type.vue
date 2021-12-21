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
  mounted() {
    this.$store.dispatch('setTitle', 'Виды спорта');
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
