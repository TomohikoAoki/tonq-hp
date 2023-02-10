<template>
  <div>
    <NewsHeader></NewsHeader>
    <div class="news-contents-area">
      <div class="news-side-column column-left">
        <Loading ref="loading"></Loading>
        <div v-if="postData" class="article">
          <div class="article-header">
            <div class="article-date">
              {{ $generateDate(postData.created_at) }}
            </div>
            <h2 class="article-title">{{ postData.title }}</h2>
          </div>
          <div class="article-content" v-html="postData.content"></div>
        </div>
        <div v-else-if="errorMessage">{{ errorMessage }}</div>
        <div class="news-side-column"></div>
      </div>
      <div class="news-side-column column-right">
        <Categories></Categories>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from "../../../components/news/Categories.vue"
import NewsHeader from "../../../components/news/Header.vue"
import Loading from "../../../components/LoadingArticle.vue"

import { mapGetters } from "vuex";

export default {
  components: {
    Categories,
    NewsHeader,
    Loading
  },
  layout() {
    return "main"
  },
  computed: {
    ...mapGetters({
      postData: 'news/getPostData',
      errorMessage: 'news/getErrorMessage',
    })
  },
  methods: {
    async fetchArticle(id) {
      this.$refs.loading.start()
      await this.$store.dispatch('news/fetchPost', id)
      this.$refs.loading.finish()
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.fetchArticle(id);
  },
};
</script>

<style lang="scss" scoped>

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
      color: #556ea0;
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
