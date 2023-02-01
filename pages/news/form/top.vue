<template>
  <div class="top">
    <Confirm :mode="mode">Delete Complete!</Confirm>
    <h1 class="form-top-title">FORM TOP<span>-フォームトップ-</span></h1>
    <nuxt-link to="create">
      <div class="btn-create">ニュース新規作成</div>
    </nuxt-link>
    <div>
      <h2 class="title-list">記事一覧</h2>
      <Loading ref="loading"></Loading>
      <div v-if="error">{{ error }}</div>
      <div v-if="postData">
        <div class="topic-area">
          <div
            class="topic"
            v-for="(topic, index) in postData.news_data"
            :key="index"
          >
            <div class="topic-title">
              <div class="date">{{ $generateDate(topic.created_at) }}</div>
              <div class="title">{{ topic.title }}</div>
            </div>
            <div class="topic-button">
              <div class="edit btn">
                <nuxt-link
                  :to="{ path: '/news/form/edit', query: { id: topic.id } }"
                  >編集</nuxt-link
                >
              </div>
              <div class="delete btn" @click="pushDelete(topic.id)">削除</div>
            </div>
          </div>
        </div>
        <Pagination
            @paging="fetchPage"
            :paginate="postData.paginate"
          ></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Confirm from "../../../components/Confirm.vue";
import Pagination from "../../../components/news/Pagination2.vue";
import Loading from "../../../components/LoadingArticle.vue";
const axios = require("axios");

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      mode: "delete",
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
      postData: "getPostData",
      error: 'getErrorMessage',
    }),
  },
  methods: {
    //記事削除
    async pushDelete(id) {
      if (window.confirm("delete OK?")) {
        $nuxt.$loading.start();
        await this.$store.dispatch("deleteArticle", id);
        return false;
      }
      return false;
    },
    //ニュースデータ取得
    async fetchNews(page) {
      this.$refs.loading.start();
      await this.$store.dispatch("fetchNews", page);
      this.$refs.loading.finish();
    },
    fetchPage(n) {
      window.scrollTo({
        top: 0,
      });
      this.$refs.loading.start();
      this.fetchNews(n);
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>

<style scoped lang="scss">
.btn-create {
  width: 200px;
  border: 1px solid rgb(22, 74, 152);
  padding: 1em 0;
  text-align: center;
  font-weight: bold;
  color: rgb(22, 74, 152);
  border-radius: 5px;
  margin: 20px 0;
}

.top {
  max-width: 1300px;
  margin: 0 auto;
}

.form-top-title {
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
  padding: 0.7em 0;
  span {
    font-size: 0.5em;
    display: block;
  }
}

.title-list {
  font-weight: bold;
  color: #999;
  font-size: 1.2em;
}

.topic-area {
  max-width: 1366px;
  width: 95%;
  margin: 20px auto;
  > div:nth-child(even) {
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
        &.delete {
        }
        &.edit {
        }
      }
    }
  }
}
</style>
