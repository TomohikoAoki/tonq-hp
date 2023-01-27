<template>
  <div class="news-list">
    <NewsHeader></NewsHeader>
    <div class="news-contents-area">
      <div class="news-side-column column-left">
        <h2 class="news-list__title">ニュース一覧</h2>
        <Loading ref="loading"></Loading>
        <ul class="news-area">
          <li v-for="(news, index) in newsList" :key="index" class="news">
            <nuxt-link
              :to="{ path: '/news/_article', query: { id: news.id } }"
              class="news-wrap"
              ><div class="news-image">
                <img :src="generateImageUrl(news.thumb_filename)" />
              </div>
              <div class="news-title">
                <div class="date">{{ generateDate(news.created_at) }}</div>
                <div class="title">{{ news.title }}</div>
              </div>
            </nuxt-link>
          </li>
        </ul>
        <Pagination
          @paging="fetchPage"
          :paginate="paginate"
        ></Pagination>
      </div>
      <div class="news-side-column column-right">
        <Categories></Categories>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Categories from "../../components/news/Categories.vue";
import NewsHeader from "../../components/news/Header.vue";
import Loading from "../../components/LoadingArticle.vue";
import Pagination from "../../components/news/Pagination2.vue";

export default {
  components: {
    Categories,
    NewsHeader,
    Loading,
    Pagination,
  },
  data() {
    return {
      newsList: {},
      paginate: {
        page: 1,
        limit: null,
        count: null,
      },
    };
  },
  methods: {
    async fetchNews() {
      this.$refs.loading.start();
      const response = await axios.get(
        `${process.env.API_NEWS_BASE_URL}/posts/${this.paginate.page}`
      );

      if (response.status === 200) {
        this.$refs.loading.finish();
        this.newsList = response.data.news_data;
        this.paginate.page = response.data.page;
        this.paginate.limit = response.data.limit;
        this.paginate.count = response.data.count;
      }
    },
    generateDate(date) {
      return date.substr(0, 10);
    },
    generateImageUrl(filename) {
      if (filename) {
        return `${process.env.API_NEWS_BASE_URL}/cache/uploads/${filename}`;
      }
      return require("@/assets/image/news/thumb-default.gif");
    },
    fetchPage(n) {
      this.paginate.page = n;
      this.newsList = null;
      window.scrollTo({
        top: 0,
      });
      this.$refs.loading.start();
      this.fetchNews();
    },
  },
  mounted() {
    this.fetchNews();
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
