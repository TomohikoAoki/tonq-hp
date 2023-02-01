<template>
  <div>
    <Confirm>Edit Complete!</Confirm>
    <div v-if="error">{{ error }}</div>
    <FormTemplateVue :article="postData" @sendData="sendData" v-show="postData"></FormTemplateVue>
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
      articleId:null,
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
      postData: 'getPostData',
      error: 'getErrorMessage',
    })
  },
  methods: {
    async fetchArticle(id) {
      await this.$store.dispatch('fetchPost', id)
    },
    sendData(formData) {
      formData.mode = this.mode
      formData.formData.id = this.articleId
      this.$store.dispatch('sendArticle', formData)
    }
  },
  mounted() {
    const id = this.$route.query.id
    this.fetchArticle(id)
    this.articleId = id
  }
}
</script>

<style lang="scss">
</style>
