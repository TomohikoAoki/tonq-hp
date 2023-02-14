<template>
  <div>
    <div class="shop-wrap" v-if="mounted">
      <ShopTopVue :shopData="filteredShopData"></ShopTopVue>
      <WrapCalendarVue
        :shopData="filteredShopData"
        class="calendar"
        v-if="filteredShopData.calendar"
      ></WrapCalendarVue>
      <ShopNavVue></ShopNavVue>
      <div class="shop-bottom-layout">
        <ShopInfoVue :shopData="filteredShopData" class="info"></ShopInfoVue>
        <ShopLinkVue class="link" :shopData="filteredShopData"></ShopLinkVue>
      </div>
    </div>
  </div>
</template>

<script>
import ShopTopVue from "../../components/shop/Top.vue";
import ShopNavVue from "../../components/shop/Nav.vue";
import WrapCalendarVue from "../../components/shop/WrapCalendar.vue";
import ShopInfoVue from "../../components/shop/Info.vue";
import ShopLinkVue from "../../components/shop/Link.vue";

import { mapGetters } from "vuex";

import '~/assets/css/shop-common.scss'


export default {
  data() {
    return {
      mounted: false,
      shopId: 1,
    };
  },
  head() {
    return this.$generateHead(this.shopId)
  },
  jsonld() {
    return this.$generateJsonLd(this.shopId)
  },
  components: {
    ShopTopVue,
    ShopNavVue,
    WrapCalendarVue,
    ShopInfoVue,
    ShopLinkVue,
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
  created() {
    if (this.shopData) {
      this.mounted = true;
    }
  },
};
</script>


