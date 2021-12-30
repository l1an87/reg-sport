<script>
export default {
  name: "TdSelect",
  props: {
    value: [Number, String, Object, Array],
    items: Array,
    hide: Boolean,
    disabled: Boolean,
    multiple: Boolean,
    chips: Boolean,
  },
};
</script>
<template>
  <td class="td-select">
    <div class="td-text__wrap" v-show="!hide">
      <v-select
          :value="value"
          :items="items"
          :disabled="disabled"
          @input="$emit('input', $event)"
          hide-details
          class="pt-0 mt-0"
          item-text="name"
          item-value="id"
          return-object
          :multiple="multiple"
          :chips="chips"
          :small-chips="chips"
          :deletable-chips="chips"
      />
    </div>
  </td>
</template>
<style lang="scss">
.td-select {
  &__wrap {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }

  .v-text-field__slot input {
    padding-left: 2px;
    font-size: 14px;
  }

  .v-chip--select {
    width: 90%;
    position: relative;
    background: #001275!important;
    color:#fff;

    .v-chip__close {
      position: absolute;
      right: 8px;
      color:#ffffff;
    }
  }

  .v-select .v-select__selection {
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>
