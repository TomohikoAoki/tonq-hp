<template>
    <div class="layout-form">
      <Loading></Loading>
      <LayoutPartsFormHeader></LayoutPartsFormHeader>
      <main>
        <Nuxt />
      </main>
      <LayoutPartsFormFooter></LayoutPartsFormFooter>
    </div>
  </template>

  <script>

  import Loading from '../components/Loading.vue'


export default {
  components: {
    Loading
  },
  //middleware: 'AuthMiddleware',
  head() {
    return {
      title:'フォーム',
      meta: [
        { hid: 'http-equiv', name: 'http-equiv', content: 'no-cache' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.layout-form {
  position: relative;
}
</style>
