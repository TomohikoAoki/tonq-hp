<template>
  <div class="form">
    <Confirm>Create Complete!</Confirm>
    <FormTemplateVue @sendData="sendData"></FormTemplateVue>
  </div>
</template>

<script>
import FormTemplateVue from "../../../components/form/FormTemplate.vue";
import Confirm from '../../../components/Confirm.vue'

export default {
  data() {
    return {
      mode: 'create',
    }
  },
  components: {
    FormTemplateVue,
    Confirm
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
