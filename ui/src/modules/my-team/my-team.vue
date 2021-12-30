<script>

import TeamsItem from "../teams/teams.item.vue";

export default {
  components: {
    TeamsItem,
  },
  methods: {
  },
  mounted() {
    if (!this.$store.state.isTeam) {
      this.$router.push('/');
      return;
    }
    this.$store.dispatch('setTitle', 'Моя команда');
  },
};
</script>
<template>
  <div>
    <v-card>
      <TeamsItem
          :id="$store.state.team.id"
          hide-action
      ></TeamsItem>
    </v-card>
  </div>
</template>
