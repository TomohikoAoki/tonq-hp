<template>
  <div class="news">
    <p class="news-title">最新情報<span>news</span></p>
    <div class="topic-area" :class="{ 'no-data': !currentNews }">
      <Loading class="loading" v-if="!currentNews && !errMessage"></Loading>
      <div
        @click="toDetail(news.id)"
        class="topic"
        v-for="(news, index) in currentNews"
        :key="index"
      >
        <div class="topic-image">
          <img :src="$generateImageUrl(news.thumb_filename)" />
        </div>
        <div class="topic-date">{{ $generateDate(news.created_at) }}</div>
        <div class="topic-title">{{ news.title }}</div>
      </div>
      <p v-if="errMessage" class="error-message">
        {{ errMessage }}
      </p>
      <div class="link-news-list">
        <div @click="toNewsList(shopId)" class="btn">ニュース一覧</div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../LoadingArticle.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    Loading,
  },
  props: {
    shopId: { type: Number, default: null, require: false },
  },
  computed: {
    ...mapGetters({
      currentNews: "news/getPostData",
      errMessage: "news/getErrorMessage",
    }),
  },
  methods: {
    toDetail(id) {
      this.$router.push(`/news/${id}`);
    },
    toNewsList(shopId = null) {
      if (shopId) {
        this.$router.push(`/news/categories/${this.$generateShopLabels(shopId)}`);
        return false;
      }
      this.$router.push(`/news`);
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
  padding: 60px;
  .news-title {
    text-align: center;
    font-weight: bold;
    padding: 1em 0;
    font-size: 2em;
    line-height: 1em;
    letter-spacing: 0.3em;
    span {
      display: inline-block;
      width: 100%;
      font-size: 0.6em;
      letter-spacing: 0.1em;
      &::before,&::after {
        content: "-";
      }
    }
  }
  .topic-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    &.no-data {
      padding-top: 25%;
    }
    .topic {
      width: 30%;
      border: 1px solid #b5bac0;
      padding: 20px 20px 20px 20px;
      background-color: #fff;
      border-radius: 5px;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(90%);
      }
      .topic-title {
        font-weight: bold;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 1.1em;
      }
      .topic-date {
        font-weight: bold;
        color: #233c5c;
        padding: 1em 0 0.1em 0;
      }
      .topic-image {
        width: 100%;
        height: 250px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .loading {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    .error-message {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .link-news-list {
      width: 100%;
      padding-top: 3em;
      .btn {
        display: block;
        width: 250px;
        margin: 0 auto;
        text-align: center;
        background-color: #233c5c;
        color: #fff;
        font-weight: bold;
        font-size: 1.3em;
        padding: 1em 0;
        cursor: pointer;
        border-radius: 10px;
      }
    }
  }
}
</style>
