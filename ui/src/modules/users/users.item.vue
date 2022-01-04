<script>
import Loader from '../../components/Loader.vue';
import { RolesService } from '../roles/roles.service';
import { UsersService } from './users.service';

export default {
  props: {
    id: [String, Number],
    hideForm: Boolean,
    hideActions: Boolean,
  },
  components: {
    Loader,
  },
  data: () => ({
    form: {
      email: '',
      password: '',
      teamName: '',
      teamId: 0,
      isBanned: false,
      roles: [],
    },
    roles: [],
    isValidate: true,
    isLoading: false,
  }),
  methods: {
    setForm(data = {}) {
      const { form } = this;
      form.email = data.email || '';
      form.password = data.password || '';
      form.teamName = data.team?.name || '';
      form.teamId = data.team?.id || '';
      form.isBanned = data.isBanned || false;
      form.roles = data.roles || [];
    },
    getRoles() {
      return RolesService.findAll().then(this.setRoles);
    },
    setRoles(data) {
      this.roles = data;
    },
    handlerGet() {
      if (!+this.id) {
        this.setForm({});
        return;
      }
      this.isLoading = true;
      UsersService.findById(+this.id)
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
      UsersService.create(this.form)
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
      UsersService.update(+this.id, this.form)
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
    this.getRoles();
    this.handlerGet();
  },
};
</script>
<template>
  <div>
    <v-card-text>
      <v-form
          v-if="form && !hideForm"
          :value="isValidate"
          @input="$emit('input', $event)"
          ref="form"
          lazy-validation
      >
        <v-text-field
            label="Email"
            v-model="form.email"
            :rules="[ v => !!v || 'Введите email']"
            required
        ></v-text-field>
        <v-text-field
            label="Пароль"
            v-model="form.password"
            :rules="[ v => !!id || !!v || 'Введите пароль']"
            :required="!id"
        ></v-text-field>
        <v-select
            label="Роли"
            v-model="form.roles"
            :items="roles"
            multiple
            return-object
        />
        <v-text-field
            label="Команда"
            v-model="form.teamName"
            readonly
            class="v-input--is-disabled"
        >
          <v-btn
              slot="append"
              v-if="form.teamId"
              icon
              :to="`/teams/${form.teamId}`"
              small
          >
            <v-icon v-text="'mdi-pencil'" small/>
          </v-btn>
        </v-text-field>
        <v-checkbox
            v-model="form.isBanned"
            label="Заблокировать"
        />
      </v-form>
    </v-card-text>
    <v-card-actions
        v-if="!hideActions"
    >
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
