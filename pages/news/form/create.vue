<template>
  <div class="form-wrap">
    <Confirm>Create Complete!</Confirm>
    <h1 class="form-wrap__title">CREATE NEWS<span>ニュース作成</span></h1>
    <FormTemplateVue @sendData="sendData" class="form-area"></FormTemplateVue>
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
      await this.$store.dispatch('news/sendArticle', formData)
    }
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
