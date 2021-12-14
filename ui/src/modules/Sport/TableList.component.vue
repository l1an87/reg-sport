<script>
export default {
  props: {
    search: String,
    items: {
      type: Array,
      default: () => [],
    },
    sortBy: {
      type: String,
      default: "id",
    },
    sortDesc: {
      type: Boolean,
      default: true,
    },
    hideId: Boolean,
    hideName: Boolean,
    hideLimit: Boolean,
    hideActions: Boolean,
  },
  computed: {
    headers() {
      const headers = [];
      if (!this.hideId) {
        headers.push({
          text: "Id",
          value: "id",
          width: 80,
        });
      }
      if (!this.hideName) {
        headers.push({
          text: "Название",
          value: "name",
        });
      }
      if (!this.hideLimit) {
        headers.push({
          text: "Лимиты",
          value: "limit",
        });
      }
      if (!this.hideActions) {
        headers.push({
          text: "",
          value: "actions",
          sortable: false,
          width: 100,
        });
      }
      return headers;
    },
  },
};
</script>
<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :search="search"
    :sort-by="sortBy"
    :sort-desc="sortDesc"
  >
    <template v-slot:item.actions="{ item }">
      <v-btn class="mr-2" @click="$emit('open', item)" icon small>
        <v-icon small> mdi-pencil </v-icon>
      </v-btn>
      <v-icon small @click="$emit('delete', item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>
