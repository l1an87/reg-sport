<script>
import { SportTypeService } from "./sport-type.service";
import Loader from '../../components/Loader.vue';

export default {
  props: {
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
    hideSearch: Boolean,
  },
  components: {
    Loader,
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
          text: "Лимит",
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
  data: () => ({
    items: [],
    isLoading: false,
    search: '',
  }),
  methods: {
    handlerGet() {
      this.isLoading = true;
      this.items = [];
      SportTypeService
        .findAll()
        .then(data => {
          this.items = data || [];
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    handlerRemove(id) {
      SportTypeService
        .remove(id)
        .then(() => {
          this.handlerGet();
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.handlerGet();
  },
};
</script>
<template>
    <v-card-text>
      <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :sort-by="sortBy"
          :sort-desc="sortDesc"
      >
        <template v-slot:top v-if="!hideSearch">
          <v-text-field
              v-model="search"
              label="Поиск"
              class="mx-4"
          ></v-text-field>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn class="mr-2" @click="$emit('edit', item.id)" icon small>
            <v-icon small> mdi-pencil</v-icon>
          </v-btn>
          <v-icon small @click="handlerRemove(item.id)"> mdi-delete</v-icon>
        </template>
      </v-data-table>
      <Loader v-model="isLoading"></Loader>
    </v-card-text>
</template>
