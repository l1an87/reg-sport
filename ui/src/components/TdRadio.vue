<script>
export default {
  name: "TdRadio",
  props: {
    value: String,
    disabled: Boolean,
    hide: Boolean,
    label: String,
  },
};
</script>
<template>
  <td class="td-radio">
    <div class="td-radio__wrap">
      <v-radio-group
          v-show="!hide"
          :value="value"
          @change="$emit('input', $event)"
          :disabled="disabled"
          class="pt-0 mt-0"
          column
          hide-details
          dense
      >
        <v-radio :value="label"/>
      </v-radio-group>
    </div>
  </td>
</template>
<style lang="scss">
.td-radio {
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
