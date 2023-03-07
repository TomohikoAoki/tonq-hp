<template>
  <div class="form-wrap">
    <Confirm backTo="referrer">Edit Complete!</Confirm>
    <h1 class="form-wrap__title">EDIT NEWS<span>ニュース編集</span></h1>
    <div v-if="error">{{ error }}</div>
    <FormTemplateVue :article="postData" @sendData="sendData" v-show="postData" class="form-area"></FormTemplateVue>
  </div>
</template>

<script>
import FormTemplateVue from "../../../components/form/FormTemplate.vue";
import Confirm from '../../../components/Confirm.vue'
const axios = require("axios");
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      mode: 'edit',
      articleId: null,
    }
  },
  components: {
    FormTemplateVue,
    Confirm
  },
  layout() {
    return "form";
  },
  computed: {
    ...mapGetters({
      postData: 'news/getPostData',
      error: 'news/getErrorMessage',
    })
  },
  methods: {
    async fetchArticle(id) {
      await this.$store.dispatch('news/fetchPost', id)
    },
    sendData(formData) {
      formData.mode = this.mode
      formData.formData.id = this.articleId
      this.$store.dispatch('news/sendArticle', formData)
    }
  },
  mounted() {
    const id = this.$route.query.id
    this.fetchArticle(id)
    this.articleId = id
  }
}
</script>

<style lang="scss" scoped>
.form-wrap {
  background-color: #333;
  padding:40px 0;
  min-height: calc(100vh - 80px);
  &__title {
    text-align: center;
    font-family: Alata;
    font-size: 2.3em;
    color:#989898;
    line-height: 1em;
    padding: 0.3em 0 1.3em 0;
    span {
      font-size: 0.6em;
      display: inline-block;
      width: 100%;
      &::before, &::after {
        content: "-";
      }
    }
  }
  .form-area {
    max-width:1000px;
  }
}
</style>
