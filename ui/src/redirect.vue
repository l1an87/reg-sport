<script>
export default {
  mounted() {
    if (this.$store.state.isAdmin) {
      this.$router.push('/users');
      return;
    }
    if (this.$store.state.isTeam) {
      this.$router.push('/my-team');
    }
    if (this.$store.state.isSport) {
      this.$router.push('/member-to-sport');
    }
  },
};
</script>
<template>
  <div></div>
</template>
