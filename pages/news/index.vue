<template>
  <div class="news-list">
    <p>ニュース一覧</p>
    <ul class="news-area">
      <li v-for="(news, index) in newsList" :key="index" class="news">
        <nuxt-link
          :to="{ path: '/news/_article', query: { id: news.id } }"
          class="news-wrap"
          ><div class="news-title">
            <div class="date">{{ news.created_at }}</div>
            <div class="title">{{ news.title }}</div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newsList: {},
    };
  },
  methods: {
    async fetchNews() {
      const response = await axios.get(
        `${process.env.API_NEWS_BASE_URL}/articles`
      );

      if (response.status === 200) {
        this.newsList = response.data;
      }
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>

<style lang="scss" scoped>
.news-area {
  > div:nth-child(odd) {
    background-color: rgb(240, 240, 240);
  }
  .news {
    padding: 1em 0;

    .news-wrap {
      display: block;
      > div:nth-child(odd) {
        background-color: rgb(240, 240, 240);
      }
      .news-title {
        .title {
          font-weight: bold;
          font-size: 1.3em;
        }
        .date {
          font-weight: bold;
          color: rgb(114, 101, 101);
        }
      }
    }
  }
}
</style>
