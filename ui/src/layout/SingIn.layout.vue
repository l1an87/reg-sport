<script>
export default {
  data: () => ({
    isLoading: false,
    isValidate: false,
    error: "",
    formData: {
      email: "",
      password: "",
    },
  }),
  methods: {
    async handlerSingIn() {
      if (this.isLoading || !this.$refs.form.validate()) {
        return;
      }
      this.error = "";
      try {
        await this.$store.dispatch("singIn", this.formData);
      } catch (e) {
        console.log(e);
        this.error = e.message;
      }
      this.isLoading = false;
    },
  },
};
</script>
<template>
  <v-app>
    <v-dialog :value="true" persistent max-width="290">
      <v-card>
        <v-card-title>Вход в систему</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form
            v-model="isValidate"
            ref="form"
            lazy-validation
            @submit="handlerSingIn"
            @keyup.enter="handlerSingIn"
          >
            <v-text-field
              label="Email"
              v-model="formData.email"
              :rules="[(v) => !!v || 'Введите email']"
              required
              @keyup.enter="handlerSingIn"
            />
            <v-text-field
              label="Пароль"
              type="password"
              v-model="formData.password"
              :rules="[(v) => !!v || 'Введите пароль']"
              @keyup.enter="handlerSingIn"
              required
            />
          </v-form>
          <v-alert
            class="mt-1"
            v-if="!!error"
            outlined
            type="error"
            v-text="error"
            dense
          />
          <v-btn
            @click="handlerSingIn"
            block
            color="primary"
            class="mt-3"
            :disabled="!isValidate"
            >Войти</v-btn
          >
          <v-overlay :value="isLoading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>
