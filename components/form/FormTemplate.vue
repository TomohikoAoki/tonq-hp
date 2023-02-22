<template>
  <div class="form">
    <ValidationObserver ref="obs" v-slot="ObserverProps">
      <form class="form">
        <fieldset class="form__group">
          <p class="form__group-header">
            <label class="form__group-label">
              タイトル<strong class="form__required-label">必須</strong>
            </label>
          </p>
          <div class="form__group-content">
            <ValidationProvider v-slot="{ errors, passed }" rules="required|max:30" name="title">
              <div class="text-input">
                <input v-model="formData.title" type="text" class="text-input__body"
                  :class="{ good: passed, bad: !!errors[0] }" placeholder="タイトル" />
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
                  <input class="radio__input" type="checkbox" v-model="formData.public" />
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
              <li v-for="(shop, index) in shopData" :key="index" class="form__group-list-item">
                <label class="checkbox">
                  <input class="checkbox__input" type="checkbox" :value="shop.id" v-model="formData.shop_ids"
                    :checked="checkShopId(shop.id)" />
                  <span class="checkbox__icon"></span>
                  <span class="checkbox__text">{{
                    shop.name.replace("とんかつとんＱ", "")
                  }}</span>
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
            <div v-if="preview"><img :src="preview"></div>
            <ValidationProvider v-slot="{ validate,errors }" rules="image|ext:jpg,png,gif" name="thumb_nail" ref="provider">
              <div class="form__file-select">
                <div class="file-select js-flie-select">
                  <input id="file" class="file-select__input" type="file" name="thumb_nail" @change="onFileChange" />
                  <label class="file-select__button" for="file">ファイルを選択する</label>
                </div>
                <span class="form__validation">
                  {{ errors[0] }}
                </span>
              </div>
            </ValidationProvider>
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
        <button @click.prevent="confirm" type="submit" class="button submit-btn"
          :class="{ disable: ObserverProps.invalid }" :disabled="ObserverProps.invalid ">
          確認
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import "~/assets/css/form.scss";

export default {
  data() {
    return {
      formData: {
        title: "",
        shop_ids: [],
        content: "",
        public: false,
      },
      imageFile: null,
      preview: null,
    };
  },
  props: {
    article: { required: false, default: null },
  },
  methods: {
    checkShopId(id) {
      return this.formData.shop_ids.includes(id);
    },
    confirm() {
      $nuxt.$loading.start()

      let imageFormData = null;

      if (this.imageFile) {
        imageFormData = new FormData();
        imageFormData.append("thumb_nail", this.imageFile);
      }

      this.$emit("sendData", {
        formData: this.formData,
        imageData: imageFormData,
      });
    },
    async onFileChange(e) {
      if (e.target.files.length === 0) return false;
      const result = await this.$refs.provider.validate(e)
      if(!result.valid) return false

      const reader = new FileReader();

      //プレビュー設定
      reader.onload = (f) => {
        this.preview = f.target.result
      };

      reader.readAsDataURL(e.target.files[0]);

      this.imageFile = e.target.files[0];
    },
  },
  computed: {
    ...mapState("shops", ["shopData"]),
    ...mapGetters({
      invalidMessage: "news/getInvalidMessage",
    })
  },
  watch: {
    article(val, old) {
      if (val) {
        this.formData.title = val.title;
        this.formData.shop_ids = JSON.parse(val.shop_ids);
        this.formData.public = val.public ? true : false;
        this.formData.content = val.content;
        if (val.thumb_filename) {
          this.preview = `${process.env.API_NEWS_BASE_URL}/cache/uploads/${val.thumb_filename}`
        }
      }
    },
    invalidMessage(val, old) {
      if (val) {
        this.$refs.obs.setErrors(this.invalidMessage);
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.submit-btn {
  display: block;
  margin: 50px auto 0 auto;
}
</style>
