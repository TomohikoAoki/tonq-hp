<template>
  <div>
    <FormTemplateVue @sendData="sendData"></FormTemplateVue>
  </div>
</template>

<script>
import FormTemplateVue from "../../../components/form/FormTemplate.vue";

export default {
  data() {
    return {
      mode: 'create',
    }
  },
  components: {
    FormTemplateVue,
  },
  layout() {
    return "form";
  },
  methods: {
    async sendData(formData) {
      formData.mode = this.mode
      await this.$store.dispatch('sendArticle', formData)
    }
  }
}
</script>

<style lang="scss">
</style>
