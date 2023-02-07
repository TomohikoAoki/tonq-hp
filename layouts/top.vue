<template>
  <div>
    <Loading></Loading>
    <main>
      <Nuxt />
    </main>
    <LayoutPartsFooter id="footer"></LayoutPartsFooter>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'

export default {
  components: {
    Loading
  },
};
</script>
