<script>
import Loader from '../../components/Loader.vue';
import { TeamsService } from './teams.service';
import MembersTable from '../members/table-edit/table-edit.vue';

export default {
  props: {
    id: [String, Number],
    hideAction: Boolean,
  },
  components: {
    Loader,
    MembersTable,
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      password: '',
      division: '',
      userId: 0,
      medicalCertificateId: 0,
      medicalCertificateName: '',
      medicalCertificateUrl: '',
    },
    isValidate: true,
    isLoading: false,
    isLoadingFile: false,
  }),
  computed: {
    disabled() {
      return !this.$store.state.isEdit;
    },
  },
  methods: {
    setForm(data = {}) {
      const { form } = this;
      form.name = data.name || '';
      form.email = data.user?.email || '';
      form.password = '';
      form.userId = data.user?.id || 0;
      form.medicalCertificateId = data.medicalCertificateId || '';
      form.medicalCertificateName = data.medicalCertificateName || '';
      form.medicalCertificateUrl = data.medicalCertificateUrl || '';
      form.division = data.division || '';
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
    handlerSaveFile(file) {
      if (!file.size) return;
      this.isLoadingFile = true;
      TeamsService.addMedicalCertificate(this.id, file)
          .then(this.setForm)
          .finally(() => {
            this.isLoadingFile = false;
          });
    },
    openReport() {
      TeamsService.report(this.id, `${this.form.name}.xlsx`);
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
          <v-col cols="3">
            <v-text-field
                label="Название"
                v-model="form.name"
                :rules="[ v => !!v || 'Введите название']"
                required
                :disabled="!$store.state.isAdmin"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
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
                  v-if="form.userId"
                  icon
                  :to="`/users/${form.userId}`"
                  small
                  :disabled="!$store.state.isAdmin"
              >
                <v-icon v-text="'mdi-pencil'" small/>
              </v-btn>
            </v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Дивизион"
                v-model="form.division"
                :readonly="!!id"
            >
            </v-text-field>
          </v-col>
          <v-col cols="4" v-if="!id">
            <v-text-field
                label="Пароль"
                v-model="form.password"
                :rules="[ v => !!v || 'Введите пароль']"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="2" v-if="!!id">
            <v-file-input
                label="Командный мед. допуск"
                :value="{name: form.medicalCertificateName}"
                :loading="isLoadingFile"
                @change="handlerSaveFile"
                :clearable="false"
                :disabled="disabled"
            >
              <v-btn
                  slot="append"
                  v-if="form.userId"
                  icon
                  :to="form.medicalCertificateUrl"
                  small
                  target="_blank"
              >
                <v-icon v-text="'mdi-download'" small/>
              </v-btn>
            </v-file-input>
          </v-col>
          <v-col cols="2" v-if="!!id">
            <v-btn
                block
                color="primary"
                class="mt-3"
                v-text="'Распечатать'"
                @click="openReport"
                target="_blank"
            />
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <MembersTable v-if="id" :team-id="id" style="border-bottom: 1px solid #ddd" class="mb-4"/>
    <v-card-actions v-if="!hideAction">
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
