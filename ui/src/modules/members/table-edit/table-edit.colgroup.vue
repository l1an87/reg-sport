<script>

export default {
  props: {
    showTeam: Boolean,
  },
};
</script>
<template>
  <colgroup>
    <col span="1" width="140" v-if="showTeam">
    <col span="3">
    <col span="2" width="41">
    <col span="2" width="80">
    <col span="1">
    <col span="1" width="140">
    <col span="2" width="41">
<!--    <col span="2" width="38">-->
    <col span="1" width="50">
    <col span="1" width="70">
    <col>
  </colgroup>
</template>
