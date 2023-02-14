<template>
  <div class="news-list">
    <NewsHeader></NewsHeader>
    <div class="news-contents-area">
      <div class="news-side-column column-left">
        <h2 class="news-list__title">
          {{ $generateShopLabels(shopId, "name") }}のニュース一覧
        </h2>
        <Loading ref="loading" class="loading"></Loading>
        <div v-if="postData">
          <List :postData="postData.news_data"></List>
          <Pagination
            @paging="fetchPage"
            :paginate="postData.pagination"
          ></Pagination>
        </div>
        <p v-else-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
      <div class="news-side-column column-right">
        <Categories :shopId="shopId"></Categories>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from "../../../components/news/Categories.vue";
import NewsHeader from "../../../components/news/Header.vue";
import List from "../../../components/news/NewsList.vue";
import Loading from "../../../components/LoadingArticle.vue";
import Pagination from "../../../components/news/Pagination2.vue";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      shopId: null,
      page: null,
    };
  },
  layout() {
    return "main"
  },
  components: {
    Categories,
    NewsHeader,
    Loading,
    Pagination,
    List,
  },
  computed: {
    ...mapGetters({
      postData: "news/getPostData",
      errorMessage: "news/getErrorMessage",
    }),
  },
  methods: {
    async fetchNewsByShop(shopId, page = null) {
      this.$refs.loading.start();
      await this.$store.dispatch("news/fetchNewsByShop", {
        shopId: shopId,
        page: page,
      });
      if (this.$refs.loading) this.$refs.loading.finish();
    },
    fetchPage(n) {
      this.page = Number(n);
      this.$router.push({ query: { page: this.page } });
      window.scrollTo({
        top: 0,
      });
    },
  },
  mounted() {
    let slug = this.$route.params.slug;
    this.shopId = this.$generateShopLabels(slug);
    this.page = this.$route.query.page ? this.$route.query.page : 1;
    this.fetchNewsByShop(this.shopId, this.page);
  },
  //pagination用　クエリの変化で稼働
  beforeRouteUpdate(to, from, next) {
    if (to.path === from.path) {
      this.page = to.query.page ? Number(to.query.page) : 1;
      this.fetchNewsByShop(this.shopId, this.page);
      next();
    }
    next();
  },
};
</script>

<style lang="scss" scoped>
.news-list {
  padding-bottom: 30px;
  .news-list__title {
    font-weight: bold;
    font-size: 1.5em;
    padding: 0 0 1em 0;
    color: rgb(132, 138, 138);
  }
  .news-contents-area {
    display: flex;
    max-width: 1360px;
    width: 95%;
    min-height: 60vh;
    margin: 0 auto;
    .column-left {
      width: 70%;
      position: relative;
      .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%),translateY(-50%);
      }
      .error-message {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        width: 100%;
      }
    }
    .column-right {
      width: 28%;
    }
  }
}

</style>
