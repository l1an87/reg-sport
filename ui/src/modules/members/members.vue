<script>

import { MembersService } from "./members.service";
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
        text: "ID",
        value: "id",
        width: 80,
      },
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
        text: "Виды спорта",
        value: "sportTypes",
      },
      {
        text: "Мед допуск",
        value: "medicalType",
        width: 190,
      },
      {
        text: "Допущен ГСК",
        value: "admitted",
        width: 90,
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
    reportList: [
      {
        text: 'Допущенные',
        value: 'sports',
        callback: () => MembersService.report(`Участники.xlsx`),
      },
      {
        text: 'Все участники',
        value: 'members-sports',
        callback: () => MembersService.membersReport(`Все участники.xlsx`),
      },
    ],
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
    getTeamCertificateUrl(item) {
      const { team } = item;
      if (!team) return '';
      if (!team.medicalCertificateId) return '';
      return `/api/files/${team.medicalCertificateId}/${team.medicalCertificateName}`;
    },
    disabledAdmitted(item) {
      if (!item.medicalType) return true;
      if (item.medicalType === 'group' && !this.getTeamCertificateUrl(item)) return true;
      if (item.medicalType === 'personal' && !item.medicalCertificateId) return true;
      return false;
    },
    handlerAdmitted(item) {
      MembersService.admitted(item.id)
          .then((data) => {
            item.admitted = data.admitted;
          })
          .catch(() => {
            item.admitted = !item.admitted;
          });
    },
  },
  mounted() {
    if (!this.$store.state.isAdmin) {
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
          <v-col cols="2">
            <v-select
                label="Команда"
                v-model="form.team"
                :items="teams"
                item-text="name"
                item-value="id"
                return-object
                clearable
            />
          </v-col>
          <v-col cols="2">
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
          <v-col cols="2">
            <v-overflow-btn
                class="mt-0"
                :items="reportList"
                label="Распечатать"
                segmented
                hide-details
            ></v-overflow-btn>
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
              hide-details
              class="pt-0 mt-0"
              dense
              @change="handlerAdmitted(item)"
          ></v-checkbox>
        </template>
        <template v-slot:item.sportTypes="{ item }">
          <div v-for="sport in item.sportTypes" :key="sport.id">{{ sport.name }}</div>
        </template>
        <template v-slot:item.medicalType="{ item }">
          <template v-if="item.medicalType==='group'">
            <v-btn v-if="getTeamCertificateUrl(item)" small :to="getTeamCertificateUrl(item)" target="_blank">
              Груповой
            </v-btn>
          </template>
          <template v-if="item.medicalType==='personal'">
            <v-btn v-if="item.medicalCertificateId" small :to="item.medicalCertificateUrl" target="_blank">
              Индивидуальный
            </v-btn>
          </template>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
