<script>
import Loader from "../../components/Loader.vue";
import TableListComponent from "./TableList.component.vue";

export default {
  components: {
    TableListComponent,
    Loader,
  },
  data: () => ({
    isLoading: false,
    items: [],
  }),
  methods: {
    handlerList() {},
    handlerAdd() {},
    handlerOpen() {},
    handlerDelete() {},
  },
  mounted() {
    this.handlerList();
  },
};
</script>
<template>
  <div>
    <v-card>
      <v-card-title class="pb-0">
        Спорт
        <v-spacer />
        <v-btn color="primary" @click="handlerAdd">Создать</v-btn>
      </v-card-title>
      <v-card-text> </v-card-text>
      <TableListComponent
        :items="items"
        @open="handlerOpen"
        @delete="handlerDelete"
      />
    </v-card>
    <Loader v-model="isLoading"></Loader>
  </div>
</template>
