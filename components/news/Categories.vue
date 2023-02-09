<template>
  <div class="categories">
    <p class="category-title">Category</p>
    <div>
      <p class="category-title__sub">店舗別</p>
      <ul class="category__list">
        <li v-for="(shop, index) in shops" :key="index" class="list-item" :class="{active: shop.id === shopId}">
          <div @click="toShopIndex(shop)">
          {{ shop.name.replace("とんかつとんＱ", "") }}
        </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ['shopId'],
  computed: {
    ...mapGetters({
      shops: "shops/getShop",
    }),
  },
  methods: {
    toShopIndex(shop) {
      this.$router.push(`/news/categories/${shop.slug}`)
    }
  }
};
</script>

<style lang="scss" scoped>
.categories {
  width: 100%;
  border-left: 1px dotted #999;
  height: 100%;
  padding: 20px 0 20px 20px;
  margin-left: 2em;
  .category-title {
    font-size: 1.5em;
    font-weight: bold;
    color: rgb(132, 138, 138);
  }
  .category-title__sub {
    font-weight: bold;
    padding: 1em 0;
  }
  .category__list {
    padding: 0 0 0 1em;
    .list-item {
      padding: 0.3em 0;
      cursor:pointer;
      &.active {
        color: cadetblue;
        font-weight: bold;
      }
    }
  }
}
</style>
