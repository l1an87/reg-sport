<script>

import { MembersService } from "../members/members.service";
import { TeamsService } from "../teams/teams.service";
import { SportTypeService } from "../sport-type/sport-type.service";

export default {
  data: () => ({
    items: [],
    sortBy: "id",
    sortDesc: true,
    isLoading: false,
    headers: [
      {
        text: "Команда",
        value: "teamName",
        filterable: false,
      },
      {
        text: "Фамилия",
        value: "lastName",
      },
      {
        text: "Имя",
        value: "firstName",
      },
      {
        text: "Отчество",
        value: "middleName",
      },
      {
        text: "Пол",
        value: "gender",
        width: 80,
        filterable: false,
      },
      {
        text: "Дата рождения",
        value: "birthdayName",
      },
      {
        text: "",
        value: "photoId",
        width: 100,
        filterable: false,
      },
    ],
    form: {
      search: '',
      team: null,
      sportType: null,
    },
    teams: [],
    sportTypes: [],
    photo: {
      show: false,
      title: '',
      url: '',
    },
  }),
  computed: {
    sortingItems() {
      const teamId = this.form.team?.id || 0;
      const sportTypeId = this.form.sportType?.id || 0;
      if (teamId || sportTypeId) {
        return this.items.filter(i => {
          if (teamId && teamId !== i.team?.id) {
            return false;
          }
          if (sportTypeId && !i.sportTypes.find(j => j.id === sportTypeId)) {
            return false;
          }
          return true;
        });
      }
      return this.items;
    },
  },
  methods: {
    init() {
      this.items = [];
      this.getMembers();
      this.getTeams();
      this.getSportTypes();
    },
    getMembers() {
      return MembersService
          .findAll()
          .then((data = []) => {
            this.items = data;
            return this.items;
          });
    },
    getTeams() {
      return TeamsService
          .findAll()
          .then((data) => {
            this.teams = data;
            return data;
          });
    },
    getSportTypes() {
      return SportTypeService
          .findAll()
          .then((data) => {
            this.sportTypes = data;
            return data;
          });
    },
    handlerOpenPhoto(item) {
      const { photo } = this;
      photo.show = true;
      photo.title = item.fio;
      photo.url = item.photoUrl;
    },
    handlerClosePhoto() {
      const { photo } = this;
      photo.show = false;
      photo.title = '';
      photo.url = '';
    },
  },
  mounted() {
    if (!this.$store.state.isTeam) {
      this.$router.push('/');
      return;
    }
    this.$store.dispatch('setTitle', 'Участники');
    this.init();
  },
};
</script>
<template>
  <div>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-text-field label="Фильтр" v-model="form.search"></v-text-field>
          </v-col>
          <v-col :cols="6">
            <v-select
                label="Вид спорта"
                v-model="form.sportType"
                :items="sportTypes"
                item-text="name"
                item-value="id"
                return-object
                clearable
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-data-table
          :headers="headers"
          :items="sortingItems"
          :search="form.search"
          :sort-by="sortBy"
          :sort-desc="sortDesc"
      >
        <template v-slot:item.admitted="{ item }">
          <v-checkbox
              :input-value="item.admitted"
              disabled
              hide-details
              class="pt-0 mt-0"
              dense
          ></v-checkbox>
        </template>
        <template v-slot:item.photoId="{ item }">
          <v-btn v-if="item.photoId" small @click="handlerOpenPhoto(item)">
            Фото
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog
        v-model="photo.show"
        max-width="700"
    >
      <v-card>
        <v-card-title>{{ photo.title }}</v-card-title>
        <v-card-text class="d-flex justify-center pa-0">
          <img :src="photo.url" style="max-width: 100%" alt="">
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
