<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<template>
  <v-overlay v-if="value">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>
<style lang="scss">

</style>
