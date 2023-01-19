<template>
    <div>
      <LayoutPartsFormHeader></LayoutPartsFormHeader>
      <main>
        <Nuxt />
      </main>
      <LayoutPartsFormFooter></LayoutPartsFormFooter>
    </div>
  </template>

  <script>
export default {
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
