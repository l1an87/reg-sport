<script>
import { UsersService } from "./users.service";
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
    hideEmail: Boolean,
    hideRoles: Boolean,
    hideTeam: Boolean,
    hideBanned: Boolean,
    hideActions: Boolean,
    hideSearch: Boolean,
    disabledBanned: Boolean,
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
      if (!this.hideEmail) {
        headers.push({
          text: "Email",
          value: "email",
        });
      }
      if (!this.hideRoles) {
        headers.push({
          text: "Роли",
          value: "rolesName",
        });
      }
      if (!this.hideTeam) {
        headers.push({
          text: "Команда",
          value: "teamName",
        });
      }
      if (!this.hideBanned) {
        headers.push({
          text: "Заблокирован",
          value: "isBanned",
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
    isMy(id) {
      return this.$store.state.user.id === +id;
    },
    handlerGet() {
      this.isLoading = true;
      this.items = [];
      UsersService
        .findAll()
        .then(data => {
          this.items = data || [];
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    handlerBan(item) {
      if (this.isMy(item.id)) return;
      this.isLoading = true;
      UsersService
        .ban(item.id)
        .then(data => {
          item.isBanned = !!data.isBanned;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    handlerRemove(id) {
      if (this.isMy(id)) return;
      UsersService
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
      <template v-slot:item.isBanned="{ item }">
        <v-btn text small @click="handlerBan(item)" :disabled="disabledBanned">
          {{ item.isBanned ? 'Да' : 'Нет' }}
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
