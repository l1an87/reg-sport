<script>
export default {
  name: "TdCheck",
  props: {
    value: [String, Boolean],
    disabled: Boolean,
    hide: Boolean,
    label: [String, Boolean],
  },
};
</script>
<template>
  <td class="td-check">
    <div class="td-check__wrap">
      <v-checkbox
          v-show="!hide"
          :input-value="value"
          :value="label"
          :disabled="disabled"
          @change="$emit('input', $event); $emit('change', $event)"
          hide-details
          class="pt-0 mt-0"
          dense
      ></v-checkbox>
    </div>
  </td>
</template>
<style lang="scss">
.td-check {
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .v-input--selection-controls__input{
    margin-right: 0;
  }
}
</style>
