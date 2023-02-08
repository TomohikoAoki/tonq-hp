<template>
  <div class="news-list">
    <NewsHeader></NewsHeader>
    <div class="news-contents-area">
      <div class="news-side-column column-left">
        <h2 class="news-list__title">
          {{ $generateShopLabels(shopLabels, shopId, "name") }}のニュース一覧
        </h2>
        <Loading ref="loading"></Loading>
        <div v-if="postData">
          <ul class="news-area">
            <li
              v-for="(news, index) in postData.news_data"
              :key="index"
              class="news"
            >
              <div @click="toDetail(news.id)" class="news-wrap">
                <div class="news-image">
                  <img :src="$generateImageUrl(news.thumb_filename)" />
                </div>
                <div class="news-title">
                  <div class="date">{{ $generateDate(news.created_at) }}</div>
                  <div class="title">{{ news.title }}</div>
                </div>
              </div>
            </li>
          </ul>
          <Pagination
            @paging="fetchPage"
            :paginate="postData.paginate"
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
import Categories from "../../../components/news/Categories.vue";
import NewsHeader from "../../../components/news/Header.vue";
import Loading from "../../../components/LoadingArticle.vue";
import Pagination from "../../../components/news/Pagination2.vue";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      shopId: null,
      page: 1,
    };
  },
  components: {
    Categories,
    NewsHeader,
    Loading,
    Pagination,
  },
  computed: {
    ...mapGetters({
      postData: "getPostData",
      errorMessage: "getErrorMessage",
      shopLabels: "shops/getShopLabels",
    }),
  },
  methods: {
    async fetchNewsByShop(shopId, page) {
      this.$refs.loading.start();
      await this.$store.dispatch("fetchNewsByShop", {
        shopId: shopId,
        page: page,
      });
      this.$refs.loading.finish();
    },
    fetchPage(n) {
      this.page = Number(n);
      window.scrollTo({
        top: 0,
      });
      this.fetchNewsByShop(this.shopId, this.page);
    },
    toDetail(id) {
      this.$router.push(`/news/${id}`);
    },
  },
  mounted() {
    let slug = this.$route.params.slug;
    let result = this.shopLabels.find((item) => item.slug === slug);
    this.shopId = result.id;
    this.fetchNewsByShop(this.shopId, this.page);
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
    margin: 0 auto;
    .column-left {
      width: 70%;
    }
    .column-right {
      width: 28%;
    }
  }
}

.news-area {
  > li:nth-child(odd) {
    background-color: rgb(244, 248, 255);
  }
  .news {
    background-color: #fff;
    &:hover {
      filter: brightness(93%);
    }
    .news-wrap {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      padding: 10px 0 10px 10px;
      .news-image {
        width: 120px;
        height: 90px;
        background-color: rgb(192, 192, 192);
        img {
          width: 100%;
        }
      }
      .news-title {
        flex: 1;
        margin-left: 1em;
        .title {
          font-weight: bold;
          font-size: 1.3em;
        }
        .date {
          font-weight: bold;
          color: rgb(114, 101, 101);
          padding: 0 0 0.3em 0;
        }
      }
    }
  }
}
</style>
