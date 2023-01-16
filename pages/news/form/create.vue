<template>
  <div>
    <FormFormatVue></FormFormatVue>
  </div>
</template>

<script>
import FormFormatVue from "../../../components/form/Format.vue";

export default {
  components: {
    FormFormatVue,
  },
  layout() {
    return "form";
  },
}
</script>

<style lang="scss">
</style>
