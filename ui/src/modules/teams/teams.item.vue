<script>
import Loader from '../../components/Loader.vue';
import { TeamsService } from './teams.service';

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
      email: '',
      password: '',
    },
    userId: 0,
    isValidate: true,
    isLoading: false,
  }),
  methods: {
    setForm(data = {}) {
      const { form } = this;
      form.name = data.name || '';
      form.email = data.user?.email || '';
      form.password = '';
      this.userId = data.user?.id || 0;
    },
    handlerGet() {
      if (!+this.id) {
        this.setForm({});
        return;
      }
      this.isLoading = true;
      TeamsService.findById(+this.id)
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
      TeamsService.create(this.form)
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
      TeamsService.update(+this.id, this.form)
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
        <v-row>
          <v-col cols="4">
            <v-text-field
                label="Название"
                v-model="form.name"
                :rules="[ v => !!v || 'Введите название']"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Email"
                v-model="form.email"
                :rules="[ v => !!v || 'Введите email']"
                :readonly="!!id"
                :class="{'v-input--is-disabled': !!id}"
                required
            >
              <v-btn
                  slot="append"
                  v-if="userId"
                  icon
                  :to="`/users/${userId}`"
                  small
              >
                <v-icon v-text="'mdi-pencil'" small/>
              </v-btn>
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Пароль"
                v-if="!id"
                v-model="form.password"
                :rules="[ v => !!v || 'Введите пароль']"
                required
            ></v-text-field>
          </v-col>
        </v-row>
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
