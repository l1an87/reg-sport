<script>
export default {
  name: "TdText",
  props: {
    value: String,
    hide: Boolean,
    disabled: Boolean,
  },
};
</script>
<template>
  <td class="td-text">
    <div class="td-text__wrap" v-show="!hide">
      <v-text-field
          :value="value"
          @input="$emit('input', $event)"
          :disabled="disabled"
          class="pt-0 mt-0"
          hide-details
      />
    </div>
  </td>
</template>
<style lang="scss">
.td-text {
  &__wrap {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }

  .v-text-field .v-input__slot input {
    padding-left: 2px;
    font-size: 14px;
  }

  .v-text-field.v-input--is-disabled input {
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>
