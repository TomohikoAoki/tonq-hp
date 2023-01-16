<template>
  <div>
    <ValidationObserver ref="obs" v-slot="ObserverProps">
      <form class="form">
        <fieldset class="form__group">
          <p class="form__group-header">
            <label class="form__group-label">
              タイトル<strong class="form__required-label">必須</strong>
            </label>
          </p>
          <div class="form__group-content">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|max:30"
              name="title"
            >
              <div class="text-input">
                <input
                  v-model="formData.title"
                  type="text"
                  class="text-input__body"
                  placeholder="タイトル"
                />
                <span class="text-input__validator"></span>
                <span class="form__validation">
                  {{ errors[0] }}
                </span>
              </div>
            </ValidationProvider>
          </div>
        </fieldset>
        <fieldset class="form__group">
          <legend class="form__group-header">
            <span class="form__group-label">トップで公開</span>
          </legend>
          <div class="form__group-content">
            <ul class="form__group-list">
              <li class="form__group-list-item">
                <label class="radio">
                  <input
                    class="radio__input"
                    type="checkbox"
                    v-model="formData.public"
                  />
                  <span class="radio__icon"></span>
                  <span class="radio__text">する</span>
                </label>
              </li>
            </ul>
          </div>
        </fieldset>
        <fieldset class="form__group">
          <legend class="form__group-header">
            <span class="form__group-label">店舗ページで公開</span>
          </legend>
          <div class="form__group-content">
            <ul class="form__group-list">
              <li
                v-for="(shop, index) in shopData"
                :key="index"
                class="form__group-list-item"
              >
                <label class="checkbox">
                  <input
                    class="checkbox__input"
                    type="checkbox"
                    id="checkbox1"
                    :value="shop.id"
                    v-model="formData.shopId"
                  />
                  <span class="checkbox__icon"></span>
                  <span class="checkbox__text">{{ shop.name.replace("とんかつとんＱ", "") }}</span>
                </label>
              </li>
            </ul>
          </div>
        </fieldset>
        <fieldset class="form__group">
          <p class="form__group-header">
            <span class="form__group-label">サムネ画像</span>
          </p>
          <div class="form__group-content">
            <div class="form__file-select">
              <div class="file-select js-flie-select">
                <input
                  id="file"
                  class="file-select__input"
                  type="file"
                  name="thumbnail"
                />
                <label class="file-select__button" for="file"
                  >ファイルを選択する</label
                >
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="form__group">
          <legend class="form__group-header">
            <span class="form__group-label">内容</span>
          </legend>
          <div class="form__group-content">
            <quill-editor v-model="formData.content" />
          </div>
        </fieldset>

        <button
          @click.prevent="confirm"
          type="submit"
          class="button"
          :class="{ disable: ObserverProps.invalid }"
          :disabled="ObserverProps.invalid || !ObserverProps.validated"
        >
          確認
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapState } from "vuex";
import "~/assets/css/form.scss";

export default {
  data() {
    return {
      formData: {
        title: "",
        shopId: [],
        content: "",
        public: false,
      },
    };
  },
  computed: {
    ...mapState("shops", ["shopData"]),
  },
};
</script>

<style lang="scss" scoped>

</style>
