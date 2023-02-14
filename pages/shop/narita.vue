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



export default {
  data() {
    return {
      mounted: false,
      shopId: 4,
    };
  },
  head() {
    return {
      title: this.filteredShopData.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.filteredShopData.description,
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: this.filteredShopData.name,
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: this.filteredShopData.url,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.filteredShopData.name,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.filteredShopData.description,
        },
        //{ hid: "og:image", property: "og:image", content: "画像のURL" },
        //{ name: "twitter:card", content: "summary" }, //　twitterの画像サイズ
      ],
    };
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

<style scoped lang="scss">
.shop-wrap {
  padding-bottom: 50px;
}

.calendar {
  margin: 30px auto 40px auto;
}
.shop-bottom-layout {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1300px;
  width: 95%;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    display: block;
  }
  .info {
    width: 70%;
    max-width: 900px;
    flex: 1;
    margin-right: 30px;
    @media screen and (max-width: 1000px) {
      width: 95%;
      margin: 0 auto;
    }
  }
  .link {
    width: 350px;
    @media screen and (max-width: 1000px) {
      width: 90%;
      margin: 30px auto;
    }
  }
}
</style>
