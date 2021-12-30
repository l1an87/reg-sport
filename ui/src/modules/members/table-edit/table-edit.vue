<script>
import TableEditTr from "./table-edit.tr.vue";
import TableEditThead from "./table-edit.thead.vue";
import TableEditColgroup from "./table-edit.colgroup.vue";
import { MembersService } from '../members.service';
import { SportTypeService } from '../../sport-type/sport-type.service';

export default {
  components: {
    TableEditTr,
    TableEditThead,
    TableEditColgroup,
  },
  props: {
    teamId: [Number, String],
  },
  data: () => ({
    items: [],
    edit: 0,
    sportTypes: [],
    isLoading: false,
  }),
  computed: {
    team() {
      return {
        id: this.teamId,
      };
    },
    sortingSportTypes() {
      return this.sportTypes.filter(sport => {
        if (!sport.limit) return true;
        const members = this.items.filter(item => !!item.sportTypes.find(i => i.id === sport.id));
        console.log(sport.name, sport.limit, members.length, members, sport);
        return members.length < sport.limit;
      });
    },
  },
  methods: {
    init() {
      this.isLoading = true;
      this.edit = 0;
      this.items = [];
      MembersService.findByTeamId(this.teamId)
          .then((data) => {
            this.items = data || [];
          })
          .finally(() => {
            this.isLoading = false;
          });
    },
    getSportTypes() {
      SportTypeService.findAll()
          .then((data) => {
            this.sportTypes = data || [];
          });
    },
  },
  mounted() {
    this.getSportTypes();
    this.init();
  },
};

</script>
<template>
  <div class="members-table">
    <v-simple-table dense border v-if="!isLoading">
      <template v-slot:default>
        <TableEditColgroup/>
        <TableEditThead/>
        <tbody>
        <TableEditTr
            v-for="item in  items"
            :key="item.id"
            :item="item"
            :edit="edit"
            :sportTypes="sortingSportTypes"
            @edit="edit=$event"
            @save="init"
            @remove="init"
            @cancel="edit=0"
        />
        <TableEditTr
            :edit="edit"
            :team="team"
            :sportTypes="sortingSportTypes"
            @edit="edit=$event"
            @save="init"
            @cancel="edit=0"
            add
        />
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<style lang="scss">
</style>
