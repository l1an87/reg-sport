<script>
import { TeamsService } from "./teams.service";
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
    hideUser: Boolean,
    hideFile: Boolean,
    hideMedicalCertificate: Boolean,
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
      if (!this.hideUser) {
        headers.push({
          text: "Пользователь",
          value: "userName",
        });
      }
      if (!this.hideMedicalCertificate) {
        headers.push({
          text: "Командное страхование",
          value: "medicalCertificateName",
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
      TeamsService
        .findAll()
        .then(data => {
          this.items = data || [];
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    handlerRemove(id) {
      TeamsService
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
  <div>
    <v-card-title class="pb-0">
      <v-text-field
          v-if="!hideSearch"
          v-model="search"
          label="Поиск"
          class="mr-4"
      ></v-text-field>
      <v-btn color="primary" @click="$emit('add')">Создать</v-btn>
    </v-card-title>
    <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        :sort-by="sortBy"
        :sort-desc="sortDesc"
    >
      <template v-slot:item.medicalCertificateName="{ item }">
        <v-btn v-if="item.medicalCertificateId" small :to="item.medicalCertificateUrl" target="_blank">
          скачать
        </v-btn>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn class="mr-2" @click="$emit('edit', item.id)" icon small>
          <v-icon small> mdi-pencil</v-icon>
        </v-btn>
        <v-icon small @click="handlerRemove(item.id)"> mdi-delete</v-icon>
      </template>
    </v-data-table>
    <Loader v-model="isLoading"></Loader>
  </div>
</template>
