<template>
  <div>
    <FormTemplateVue @sendData="sendData"></FormTemplateVue>
  </div>
</template>

<script>
import FormTemplateVue from "../../../components/form/FormTemplate.vue";

export default {
  components: {
    FormTemplateVue,
  },
  layout() {
    return "form";
  },
  methods: {
    async sendData(formData) {
      await this.$store.dispatch('createArticle', formData)
    }
  }
}
</script>

<style lang="scss">
</style>
