<template>
  <div>
    <NewsHeader></NewsHeader>
    <div class="news-contents-area">
      <div class="news-side-column column-left">
        <Loading ref="loading"></Loading>
        <div v-if="article" class="article">
          <div class="article-header">
            <h2 class="article-title">{{ article.title }}</h2>
            <div class="article-date">
              {{ generateDate(article.created_at) }}
            </div>
          </div>
          <div class="article-content" v-html="article.content"></div>
        </div>
        <div class="news-side-column"></div>
      </div>
      <div class="news-side-column column-right">
        <Categories></Categories>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Categories from "../../components/news/Categories.vue"
import NewsHeader from "../../components/news/Header.vue"
import Loading from "../../components/LoadingArticle.vue"

export default {
  components: {
    Categories,
    NewsHeader,
    Loading
  },
  data() {
    return {
      article: null,
    };
  },
  methods: {
    async fetchArticle(id) {
      this.$refs.loading.start()
      const response = await axios.get(
        `${process.env.API_NEWS_BASE_URL}/articles/${id}`
      );

      if (response.status === 200) {
        this.$refs.loading.finish()
        this.article = response.data;
      }
    },
    generateDate(date) {
      return date.substr(0, 10);
    },
  },
  mounted() {
    const id = this.$route.query.id;
    this.fetchArticle(id);
  },
};
</script>

<style lang="scss" scoped>

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
.article {
  .article-header {
    border-bottom: 1px solid;
    padding: 2em 0;
    .article-title {
      font-weight: bold;
      font-size: 2vw;
      color: rgb(84, 84, 84);
    }
    .article-date {
      font-weight: bold;
    }
  }
}

.article-content {
  font-size: 1em;
  line-height: 1.4em;
  padding: 20px;
  :deep(strong) {
    font-weight: bold;
  }
  :deep(em) {
    font-style: italic;
  }
  :deep(u) {
    text-decoration: underline;
  }
  :deep(a) {
    color: rgb(47, 15, 150);
    text-decoration: underline;
  }
  :deep(a:visited) {
    color: rgb(145, 15, 150);
  }

  :deep(ol) {
    list-style: decimal;
    padding-left: 2em;
  }
  :deep(ul) {
    list-style: disc;
    padding-left: 2em;
  }
  :deep(.ql-size-small) {
    font-size: 0.7em;
    line-height: 1.4em;
  }
  :deep(.ql-size-large) {
    font-size: 2em;
    line-height: 1.4em;
  }
  :deep(.ql-size-huge) {
    font-size: 3em;
    line-height: 1.4em;
  }
  :deep(.ql-indent-1) {
    padding-left: 1em;
  }
}
</style>
