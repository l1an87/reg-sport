<script>
import api from "../utils/api";
import Loader from "./Loader.vue";

export default {
  name: "TdDownload",
  components: {
    Loader,
  },
  props: {
    value: String,
    url: String,
    disabled: Boolean,
    hide: Boolean,
    name: String,
    id: Number,
    urlAdd: String,
  },
  data: () => ({
    isLoading: false,
  }),
  methods: {
    addFile(file) {
      if (!file.size) return;
      const formData = new FormData();
      formData.set('file', file);
      this.isLoading = true;
      api
          .post(this.urlAdd, formData)
          .then(data => {
            this.$emit('update:id', data.id);
            this.$emit('update:name', data.name);
          })
          .finally(() => {
            this.isLoading = false;
          });
    },
  },
};
</script>
<template>
  <td class="td-download">
    <div class="td-download__wrap" v-show="!hide">
      <v-file-input
          v-if="!disabled"
          class="pt-0 mt-0 ml-0"
          hide-details
          hide-input
          @change="addFile"
          dense
          color="primary"
          title="Загрузить"
      />
      <v-btn
          v-if="disabled"
          v-show="url"
          class="ml-0"
          :to="url"
          target="_blank"
          icon
          small
          title="Скачать"
      >
        <v-icon v-text="'mdi-download'" color="primary"/>
      </v-btn>
    </div>
    <Loader v-model="isLoading"></Loader>
  </td>
</template>
<style lang="scss">
.td-download {
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .v-input {
    width: 28px;
    display: flex;
    justify-content: center;
    margin-left: 0;
  }

  .v-input__prepend-outer {
    margin-right: 0;
  }
}
</style>
