<template>
  <div>
    <ShopLayout v-if="mounted" :shopData="filteredShopData"></ShopLayout>
  </div>
</template>

<script>
import ShopLayout from "../../components/shop/Layout.vue";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      mounted: false,
      shopId: 5,
    };
  },
  head() {
    return this.$generateHead(this.shopId)
  },
  jsonld() {
    return this.$generateJsonLd(this.shopId)
  },
  components: {
    ShopLayout
  },
  layout() {
    return "main";
  },
  computed: {
    ...mapGetters({
      shopData: "shops/getShop",
    }),
    filteredShopData() {
      return this.shopData.find((item) => item.id === this.shopId);
    },
  },
  methods: {
    async fetchCurrentNewsOfShop(id) {
      await this.$store.dispatch('news/fetchCurrentNews', id)
    }
  },
  created() {
    this.fetchCurrentNewsOfShop(this.shopId)
    if (this.shopData) {
      this.mounted = true;
    }
  },
};
</script>


