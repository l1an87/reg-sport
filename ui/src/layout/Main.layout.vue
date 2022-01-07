<script>
export default {
  data: () => ({
    driver: null,
    isHistoryState: false,
  }),
  computed: {
    isBack() {
      const path = (this.$route.fullPath || "/").match(/\//g);

      return path.length > 2 && this.isHistoryState;
    },
    title() {
      return this.$store.state.title;
    },
    roleName() {
      return this.roles[0]?.description || '';
    },
    roles() {
      return this.$store.state.roles || [];
    },
    isAdmin() {
      return this.$store.state.isAdmin;
    },
    isSport() {
      return this.$store.state.isSport;
    },
    isTeam() {
      return this.$store.state.isTeam;
    },
    teamName() {
      return this.$store.state.team.name;
    },
  },
  methods: {
    handlerSingOut() {
      this.$store.dispatch("singOut");
      if (this.$route.fullPath !== "/") {
        this.$router.push("/");
      }
    },
    validRole(...roles) {
      return !!this.roles.find(i => roles.includes(i.code));
    },
  },
  mounted() {
    this.isHistoryState = !!window.history.state;
  },
  updated() {
    this.isHistoryState = !!window.history.state;
  },
};
</script>
<template>
  <v-app>
    <v-app-bar app color="primary" dense dark>
      <v-app-bar-nav-icon v-if="!isBack" @click="driver = !driver"/>
      <v-app-bar-nav-icon v-if="isBack" @click="$router.back()">
        <v-icon v-text="'mdi-arrow-left'"/>
      </v-app-bar-nav-icon>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-btn icon @click="handlerSingOut">
        <v-icon v-text="'mdi-exit-to-app'"/>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="driver">
      <v-list-item>
        <v-list-item-avatar color="primary">
          <v-icon dark v-text="'mdi-account'"/>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title" v-text="roleName"/>
          <v-list-item-subtitle v-if="teamName" v-text="teamName"/>
        </v-list-item-content>
      </v-list-item>
      <v-divider/>
      <v-list>
        <v-list-item to="/users" v-if="isAdmin">
          <v-list-item-icon>
            <v-icon v-text="'mdi-account'"/>
          </v-list-item-icon>
          <v-list-item-content> Пользователи</v-list-item-content>
        </v-list-item>
        <v-list-item to="/sport-type" v-if="isAdmin">
          <v-list-item-icon>
            <v-icon v-text="'mdi-basketball'"/>
          </v-list-item-icon>
          <v-list-item-content> Виды спорта</v-list-item-content>
        </v-list-item>
        <v-list-item to="/teams" v-if="isAdmin">
          <v-list-item-icon>
            <v-icon v-text="'mdi-account-group'"/>
          </v-list-item-icon>
          <v-list-item-content> Команды</v-list-item-content>
        </v-list-item>
        <v-list-item to="/my-team" v-if="isTeam">
          <v-list-item-icon>
            <v-icon v-text="'mdi-account-group'"/>
          </v-list-item-icon>
          <v-list-item-content>Моя Команда</v-list-item-content>
        </v-list-item>
        <v-list-item to="/members" v-if="isAdmin">
          <v-list-item-icon>
            <v-icon v-text="'mdi-account'"/>
          </v-list-item-icon>
          <v-list-item-content> Участники</v-list-item-content>
        </v-list-item>
        <v-list-item to="/member-to-sport" v-if="isSport">
          <v-list-item-icon>
            <v-icon v-text="'mdi-account'"/>
          </v-list-item-icon>
          <v-list-item-content> Участники</v-list-item-content>
        </v-list-item>
        <v-list-item to="/member-team" v-if="isTeam">
          <v-list-item-icon>
            <v-icon v-text="'mdi-account'"/>
          </v-list-item-icon>
          <v-list-item-content> Участники</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<style lang="scss">
.img-max-width {
  img {
    max-width: 100%;
  }
}
</style>
