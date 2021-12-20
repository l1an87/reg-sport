<script>
import Loader from '../../components/Loader.vue';
import { SportTypeService } from "./sport-type.service";

export default {
  props: {
    id: [String, Number],
  },
  components: {
    Loader,
  },
  data: () => ({
    form: {
      name: '',
      limit: 0,
    },
    roles: [],
    isValidate: true,
    isLoading: false,
  }),
  methods: {
    setForm(data = {}) {
      const { form } = this;
      form.name = data.name || '';
      form.limit = data.limit || 0;
    },
    handlerGet() {
      if (!+this.id) {
        this.setForm({});
        return;
      }
      this.isLoading = true;
      SportTypeService.findById(+this.id)
        .then(this.setForm)
        .finally(() => {
          this.isLoading = false;
        });
    },
    handlerCreate() {
      if (!this.isValidate || !this.$refs.form.validate() || this.isLoading) {
        return;
      }
      this.isLoading = true;
      SportTypeService.create(this.form)
        .then((data) => {
          this.$emit('create', data);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    handlerUpdate() {
      if (!this.isValidate || !this.$refs.form.validate() || this.isLoading) {
        return;
      }
      this.isLoading = true;
      SportTypeService.update(+this.id, this.form)
        .then((data) => {
          this.$emit('update', data);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    handlerCancel() {
      this.$emit('cancel');
    },
  },
  watch: {
    id() {
      this.handlerGet();
    },
  },
  mounted() {
    this.handlerGet();
  },
};
</script>
<template>
  <div>
    <v-card-text>
      <v-form
          v-if="form"
          :value="isValidate"
          @input="$emit('input', $event)"
          ref="form"
          lazy-validation
      >
        <v-text-field
            label="Название"
            v-model="form.name"
            :rules="[ v => !!v || 'Введите название']"
            required
        ></v-text-field>
        <v-text-field
            label="Лимит"
            v-model="form.limit"
            type="number"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn @click="handlerCancel">Отмена</v-btn>
      <v-btn v-if="!id" @click="handlerCreate" color="primary">Создать</v-btn>
      <v-btn v-if="id" @click="handlerUpdate" color="primary">Сохранить</v-btn>
    </v-card-actions>
    <Loader v-model="isLoading"></Loader>
  </div>
</template>
<style scoped>

</style>
