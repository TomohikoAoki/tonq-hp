<template>
  <div class="top">
    <div class="slider-area"></div>
    <div class="concept">
      <div class="concept-inner inner">
        <p class="concept-inner__text">
          『とんかつとんＱ』は茨城県つくば市を中心に、
          茨城、千葉、埼玉へ店舗展開中のとんかつ専門店。
          農林水産大臣賞を受賞した
          国産ブランド「やまと豚」のとんかつをメインに、 お膳の五品
          〈とんかつ・キャベツ・ご飯・味噌汁・お新香〉
          すべてにこだわりをもってお作りし、
          友人を家に招いているような暖かい接客で お客様にご提供しております。
        </p>
      </div>
    </div>
    <div class="menu-and-shop">
      <div class="menu">とんＱのお品書き</div>
      <div class="shops">店舗紹介</div>
    </div>
    <div class="news">
      <p class="news-title">news</p>
      <div class="topic-area">
        <nuxt-link
          :to="{ path: '/news/_article', query: { id: news.id } }"
          class="topic"
          v-for="(news, index) in currentNews"
          :key="index"
        >
          <div class="topic-image">
            <img :src="generateImageUrl(news.thumb_filename)" />
          </div>
          <div class="topic-date">{{ generateDate(news.created_at) }}</div>
          <div class="topic-title">{{ news.title }}</div>
        </nuxt-link>
      </div>
    </div>
    <div class="link-area"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "IndexPage",
  layout() {
    return "MainLayouts";
  },
  data() {
    return {
      currentNews: null,
    };
  },
  methods: {
    async fetchNews() {
      const response = await axios.get(
        `${process.env.API_NEWS_BASE_URL}/posts/current`
      );

      if (response.status === 200) {
        this.currentNews = response.data;
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
  },
  mounted() {
    this.fetchNews();
  },
};
</script>

<style lang="scss" scoped>
.slider-area {
  height: 50vh;
  background-color: #666;
}
.concept {
  .concept-inner {
    display: flex;
    justify-items: center;
    height: 40vh;

    &__text {
      font-size: 1.2em;
      max-width: 600px;
      line-height: 1.7em;
      vertical-align: middle;
    }
  }
}
.menu {
  height: 40vh;
  background-color: rgb(235, 229, 221);
}

.news {
  .news-title {
    text-align: center;
    font-weight: bold;
    padding: 1em 0;
    font-size: 2em;
  }
  .topic-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1366px;
    margin: 0 auto;
    .topic {
      width: 32%;
      border: 1px solid;
      padding: 20px;
      .topic-title {
        font-weight: bold;
      }
      .topic-date {
        font-weight: bold;
      }
      .topic-image {
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
