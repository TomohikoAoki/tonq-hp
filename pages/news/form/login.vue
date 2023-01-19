<template>
  <div class="login">
    <ValidationObserver ref="obs" v-slot="ObserverProps">
      <form class="login-form form">
        <fieldset class="form__group">
          <p class="form__group-header">
            <label class="form-group__label" for="email">メールアドレス</label>
          </p>
          <div class="form__group-content">
            <ValidationProvider
              v-slot="{ errors, passed }"
              rules="required|email"
              name="email"
            >
              <div class="form__text-input -wide">
                <p class="text-input">
                  <input
                    v-model="formData.email"
                    class="text-input__body"
                    :class="{ good: passed, bad:!!errors[0] }"
                    type="email"
                    placeholder="メールアドレス"
                  />
                  <span class="text-input__validator"></span>
                </p>
                <span class="form__validation">
                  {{ errors[0] }}
                </span>
              </div>
            </ValidationProvider>
          </div>
        </fieldset>
        <fieldset class="form__group">
          <p class="form__group-header">
            <label class="form-group__label" for="password">パスワード</label>
          </p>
          <div class="form__group-content">
            <ValidationProvider
              v-slot="{ errors,passed }"
              rules="required"
              name="password"
            >
              <div class="form__text-input -wide">
                <p class="text-input">
                  <input
                    v-model="formData.password"
                    class="text-input__body"
                    :class="{ good: passed,bad:!!errors[0] }"
                    type="password"
                    placeholder="パスワード"
                  />
                  <span class="text-input__validator"></span>
                </p>
              </div>
              <span class="form__validation">
                {{ errors[0] }}
              </span>
            </ValidationProvider>
          </div>
        </fieldset>
        <div class="form__submit">
          <button
            @click.prevent="login"
            type="submit"
            class="button"
            :class="{ disable: ObserverProps.invalid }"
            :disabled="ObserverProps.invalid || !ObserverProps.validated"
          >
            LOGIN
          </button>
        </div>
      </form>
    </ValidationObserver>
    <div class="error">
      <p>メールアドレスかパスワードが間違っています。</p>
    </div>
  </div>
</template>

<script>
import "~/assets/css/form.scss";
import { mapGetters } from "vuex";

export default {
  layout() {
    return "form";
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      const user = await this.$fire.auth.signInWithEmailAndPassword(
        this.formData.email,
        this.formData.password
      );
      return true;


    },
    redirectTop() {
      this.$router.push("/news/form/top");
      return false;
    },
  },
  computed: {
    ...mapGetters({
      isLogin: "isLogin",
    }),
  },
  watch: {
    isLogin(val, old) {
      if (val) {
        this.redirectTop();
      }
    },
  },
  created() {
    if (this.isLogin) {
      this.redirectTop();
    }
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  margin: 0 auto;
  max-width: 1400px;
}
</style>
