<template>
  <div class="top">
    <Confirm>Delete Complete!</Confirm>
    <h1 class="form-top-title">FORM TOP<span>フォームトップ</span></h1>
    <nuxt-link to="create">
      <div class="btn-create">ニュース新規作成</div>
    </nuxt-link>
    <div class="list">
      <h2 class="title-list">記事一覧</h2>
      <Loading v-if="!error && !postData"></Loading>
      <div v-if="error">{{ error }}</div>
      <div v-if="postData">
        <div class="topic-area">
          <div class="topic" v-for="(topic, index) in postData.news_data" :key="index">
            <div class="topic-title">
              <div class="date">{{ $generateDate(topic.created_at) }}</div>
              <div class="title">{{ topic.title }}</div>
            </div>
            <div class="topic-button">
              <div class="edit btn" @click="toDetail(topic.id)">
                編集
              </div>
              <div class="delete btn" @click="pushDelete(topic.id)">削除</div>
            </div>
          </div>
        </div>
        <Pagination @paging="fetchPage" :paginate="postData.pagination"></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Confirm from "../../../components/Confirm.vue";
import Pagination from "../../../components/news/Pagination2.vue";
import Loading from "../../../components/LoadingArticle.vue";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      page: null,
    };
  },
  layout() {
    return "form";
  },
  components: {
    Confirm,
    Pagination,
    Loading,
  },
  computed: {
    ...mapGetters({
      postData: "news/getPostData",
      error: 'news/getErrorMessage',
    }),
  },
  methods: {
    //記事削除
    async pushDelete(id) {
      if (window.confirm("delete OK?")) {
        $nuxt.$loading.start();
        await this.$store.dispatch("news/deleteArticle", id);
        return false;
      }
      return false;
    },
    toDetail(id) {
      this.$router.push(`/news/form/edit?id=${id}`)
    },
    //ニュースデータ取得
    async fetchNews(page) {
      await this.$store.dispatch("news/fetchNews", page);
    },
    fetchPage(n) {
      this.page = Number(n);
      this.$router.push({ query: { page: this.page } });
      window.scrollTo({
        top: 0,
      });
    },
  },
  created() {
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

<style scoped lang="scss">
.top {
  margin: 0 auto;
  background-color: #333;
  padding: 40px 0;
  min-height: calc(100vh - 80px);

  .form-top-title {
    text-align: center;
    font-family: Alata;
    font-size: 2.3em;
    color:#989898;
    line-height: 1em;
    padding: 0.3em 0 1.3em 0;
    span {
      font-size: 0.6em;
      display: inline-block;
      width: 100%;
      &::before, &::after {
        content: "-";
      }
    }
  }

  .btn-create {
    width: 200px;
    border: 1px solid rgb(22, 74, 152);
    padding: 1em 0;
    text-align: center;
    font-weight: bold;
    color: rgb(22, 74, 152);
    border-radius: 5px;
    margin: 10px auto 40px auto;
  }

  .list {
    max-width: 1366px;
    width: 95%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 2%;
    .title-list {
      font-weight: bold;
      color: #999;
      font-size: 1.2em;
    }

    .topic-area {
      max-width: 1366px;
      width: 95%;
      margin: 20px auto;

      >div:nth-child(even) {
        background-color: rgb(240, 240, 240);
      }

      .topic {
        display: flex;
        padding: 1.5em 0;
        justify-content: space-between;

        .topic-title {
          padding: 0 0 0 1em;

          .title {
            font-weight: bold;
            font-size: 1.3em;
          }

          .date {
            font-weight: bold;
            color: rgb(114, 101, 101);
          }
        }

        .topic-button {
          display: flex;
          width: 250px;
          align-items: center;

          .btn {
            width: 100px;
            text-align: center;
            border-radius: 5px;
            border: 1px solid #999;
            margin: 0 10px;
            padding: 0.7em 0;
            cursor: pointer;

            &.delete {}

            &.edit {}
          }
        }
      }
    }

  }
}
</style>
