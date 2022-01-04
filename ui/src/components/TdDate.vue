<script>
import { isoToString, stringToIso } from "../utils/date";

export default {
  name: "TdDate",
  props: {
    value: String,
    hide: Boolean,
    disabled: Boolean,
  },
  data: () => ({
    val: '',
  }),
  methods: {
    setVal() {
      this.val = isoToString(this.value);
    },
    handlerChange(val) {
      const response = stringToIso(val);
      this.val = response;
      this.$emit('input', response);
      this.$emit('change', response);
    },
  },
  watch: {
    value() {
      this.setVal();
    },
  },
  mounted() {
    this.setVal();
  },
};
</script>
<template>
  <td class="td-date">
    <div class="td-text__wrap" v-show="!hide">
      <v-text-field
          v-model="val"
          v-mask="'##.##.####'"
          @change="handlerChange"
          :disabled="disabled"
          class="pt-0 mt-0"
          hide-details
      />
    </div>
  </td>
</template>
<style lang="scss">
.td-date {
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
