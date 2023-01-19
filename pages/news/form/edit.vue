<template>
  <div>
    <FormTemplateVue :article="article" @sendData="sendData" v-show="article"></FormTemplateVue>
  </div>
</template>

<script>
import FormTemplateVue from "../../../components/form/FormTemplate.vue";
const axios = require("axios");

export default {
  data() {
    return {
      article: null
    }
  },
  components: {
    FormTemplateVue,
  },
  layout() {
    return "form";
  },
  methods: {
    async fetchArticle(id) {
      const response = await axios.get(`http://localhost/public/api/news/articles/${id}`)

      if (response.status === 200) {
        this.article = response.data
      }
    },
    sendData(formData) {
      this.$store.dispatch('editArticle', formData)
    }

  },
  mounted() {
    const id = this.$route.query.id
    this.fetchArticle(id)
  }
}
</script>

<style lang="scss">
</style>
