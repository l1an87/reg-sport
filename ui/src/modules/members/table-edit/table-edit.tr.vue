<script>
import TdText from "../../../components/TdText.vue";
import TdRadio from "../../../components/TdRadio.vue";
import TdCheck from "../../../components/TdCheck.vue";
import TdDownload from "../../../components/TdDownload.vue";
import TdSelect from "../../../components/TdSelect.vue";
import TdDate from "../../../components/TdDate.vue";
import { MembersEntity } from "../members.entity";
import { MembersService } from "../members.service";

export default {
  components: {
    TdText,
    TdRadio,
    TdCheck,
    TdDownload,
    TdSelect,
    TdDate,
  },
  props: {
    item: Object,
    edit: Number,
    sportTypes: Array,
    team: Object,
    showTeam: Boolean,
    add: Boolean,
  },
  data: () => ({
    form: new MembersEntity({}),
    isLoading: false,
  }),
  computed: {
    disabledAll() {
      return !this.$store.state.isEdit;
    },
    isEdit() {
      return (this.form?.id || 0) === this.edit;
    },
    isDisabled() {
      if (this.disabledAll) {
        return true;
      }
      if (this.edit) {
        return !this.isEdit;
      }
      return true;
    },
    sortingSportTypes() {
      if (this.add) return this.sportTypes;
      return [
        ...this.sportTypes,
        ...this.form.sportTypes,
      ];
    },
  },
  methods: {
    setForm() {
      const item = this.add ? {
        id: -1,
        team: this.team,
      } : this.item;
      this.form = new MembersEntity(item);
    },
    handlerEdit() {
      this.$emit('edit', this.form.id);
    },
    handlerRemove() {
      this.isLoading = true;
      MembersService.remove(this.item.id)
          .then(() => {
            this.$emit('remove', this.item);
          })
          .finally(() => {
            this.isLoading = false;
          });
    },
    handlerSave() {
      const promise = this.add ? this.handlerCreate : this.handlerUpdate;
      this.isLoading = true;
      promise()
          .then((data) => {
            this.$emit('save', data.id);
          })
          .finally(() => {
            this.isLoading = false;
          });
    },
    handlerCreate() {
      const {
        id,
        ...form
      } = this.form;
      return MembersService
          .create(form);
    },
    handlerUpdate() {
      return MembersService
          .update(this.item.id, this.form);
    },
    handlerCancel() {
      this.setForm();
      this.$emit('cancel');
    },
    handlerAdmitted() {
      MembersService.admitted(this.form.id)
          .then((data) => {
            this.form.admitted = data.admitted;
          });
    },
  },
  watch: {
    item() {
      this.setForm();
    },
  },
  mounted() {
    this.setForm();
  },
};
</script>
<template>
  <tr
      v-if="form"
      :class="{'members-table-tr':true, 'members-table-tr--edit': isEdit}"
  >
    <TdText
        v-if="showTeam"
        v-model="form.teamName"
        disabled
    />
    <TdText
        v-model="form.lastName"
        :disabled="isDisabled"
    />
    <TdText
        v-model="form.firstName"
        :disabled="isDisabled"
    />
    <TdText
        v-model="form.middleName"
        :disabled="isDisabled"
    />
    <TdRadio
        v-model="form.gender"
        :disabled="isDisabled"
        label="М"
    />
    <TdRadio
        v-model="form.gender"
        :disabled="isDisabled"
        label="Ж"
    />
    <TdDate
        v-model="form.birthday"
        :disabled="isDisabled"
    />
    <TdDate
        v-model="form.inJob"
        :disabled="isDisabled"
    />
    <TdText
        v-model="form.position"
        :disabled="isDisabled"
    />
    <TdSelect
        v-model="form.sportTypes"
        :items="sortingSportTypes"
        :disabled="isDisabled"
        chips
        multiple
    />
    <TdCheck
        v-model="form.medicalType"
        :disabled="isDisabled"
        label="group"
        :hide="!!add"
    />
    <TdCheck
        v-model="form.medicalType"
        :disabled="isDisabled"
        label="personal"
        :hide="!!add"
    />
    <TdDownload
        :disabled="isDisabled"
        :hide="form.medicalType!=='personal' || !!add"
        :url-add="`/members/add-medical-certificate/${form.id}`"
        :id.sync="form.medicalCertificateId"
        :name.sync="form.medicalCertificateName"
        :url="form.medicalCertificateUrl"
    />
    <TdDownload
        :hide="!!add"
        :disabled="isDisabled"
        :url-add="`/members/add-photo/${form.id}`"
        :id.sync="form.photoId"
        :name.sync="form.photoName"
        :url="form.photoUrl"
    />
    <TdCheck
        :hide="!!add"
        v-model="form.admitted"
        :disabled="!$store.state.isAdmin"
        @change="handlerAdmitted"
    />
    <td v-if="isEdit && !disabledAll">
      <v-btn class="mx-1" @click="handlerSave" icon small title="Сохранить">
        <v-icon color="primary"> mdi-content-save</v-icon>
      </v-btn>
      <v-btn @click="handlerCancel" icon small title="Отмена">
        <v-icon color="primary"> mdi-close</v-icon>
      </v-btn>
    </td>
    <td v-if="!isEdit && !disabledAll">
      <v-btn class="mx-1" @click="handlerEdit" icon small :disabled="!!edit" title="Редактировать">
        <v-icon color="primary"> mdi-pencil</v-icon>
      </v-btn>
      <v-btn v-if="!add" @click="handlerRemove" icon small :disabled="!!edit" title="Удалить">
        <v-icon color="primary"> mdi-delete</v-icon>
      </v-btn>
    </td>
  </tr>
</template>
<style lang="scss">
.members-table-tr {
  td {
    border-right: 1px solid #ddd;
    padding: 0 0 !important;
  }

  &--edit {
    td {
      background: #dfd;
    }
  }
}
</style>
