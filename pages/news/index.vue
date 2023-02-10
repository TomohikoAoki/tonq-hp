<template>
  <div class="news-list">
    <NewsHeader></NewsHeader>
    <div class="news-contents-area">
      <div class="news-side-column column-left">
        <h2 class="news-list__title">ニュース一覧</h2>
        <Loading ref="loading"></Loading>
        <div v-if="postData">
          <List :postData="postData.news_data"></List>
          <Pagination
            @paging="fetchPage"
            :paginate="postData.pagination"
          ></Pagination>
        </div>
        <div v-else-if="errorMessage">{{ errorMessage }}</div>
      </div>
      <div class="news-side-column column-right">
        <Categories></Categories>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from "../../components/news/Categories.vue";
import NewsHeader from "../../components/news/Header.vue";
import List from "../../components/news/NewsList.vue";
import Loading from "../../components/LoadingArticle.vue";
import Pagination from "../../components/news/Pagination2.vue";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      page: null,
    };
  },
  components: {
    Categories,
    NewsHeader,
    Loading,
    Pagination,
    List,
  },
  layout() {
    return "main"
  },
  computed: {
    ...mapGetters({
      postData: "news/getPostData",
      errorMessage: "news/getErrorMessage",
    }),
  },
  methods: {
    async fetchNews(page = null) {
      this.$refs.loading.start();
      await this.$store.dispatch("news/fetchNews", page);
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
    this.page = this.$route.query.page ? this.$route.query.page : 1;
    this.fetchNews(this.page);
  },
  //pagination用　クエリの変化で稼働
  beforeRouteUpdate(to, from, next) {
    if (to.path === from.path) {
      this.page = to.query.page ? Number(to.query.page) : 1;
      this.fetchNews(this.page);
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
    }
    .column-right {
      width: 28%;
    }
  }
}


</style>
