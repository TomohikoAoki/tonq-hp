<template>
  <div class="top">
    <div class="header-nav">
      <ul class="header-link-list">
        <li class="header-link-item"><nuxt-link to="menu">お品書き</nuxt-link></li>
        <li class="header-link-item"><nuxt-link to="kodawari">こだわり</nuxt-link></li>
        <li class="header-link-item"><nuxt-link to="shop">店舗紹介</nuxt-link></li>
        <li class="header-link-item"><nuxt-link to="news">お知らせ</nuxt-link></li>
      </ul>
    </div>
    <div class="slider-area">
      <img src="~assets/image/top/image-top.webp">
    </div>
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
          <span class="btn-concept"></span>
        </p>
      </div>
    </div>
    <div class="menu-and-shop">
      <nuxt-link to="menu" class="menu-and-shop__item">
        <div class="link-btn-image menu">
          <div class="link-btn__inner"></div>
        </div>
        <div class="link-btn-tag"><img src="~assets/image/top/title-menu.svg" alt="お品書き"><span>MENU</span></div>
      </nuxt-link>
      <nuxt-link to="shop" class="menu-and-shop__item">
        <div class="link-btn-image shops">
          <div class="link-btn__inner"></div>
        </div>
        <div class="link-btn-tag"><img src="~assets/image/top/title-shop.svg" alt="店舗紹介"><span>SHOP</span></div>
      </nuxt-link>
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
    return "top";
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
.top {
  position: relative;
}

.header-nav {
  position:absolute;
  top:2em;
  right:0;
  .header-link-list {
    display: flex;
    list-style: none;
    border-bottom: 1px solid #fff;
    padding: 0 10em 1em 0 ;
    .header-link-item {
      color:#fff;
      width: 150px;
      text-align: center;
      font-size: 1.2em;
      font-weight: bold;

      a {
        text-decoration: none;
      }
    }
  }
}
.slider-area {
  background-color: #666;
  img {
    width: 100%;
  }
}
.concept {
  background-image: url(static/image/top/bg-concept.webp);
  background-position: right center;
  background-repeat: no-repeat;
  .concept-inner {
    display: flex;
    justify-items: center;
    position: relative;
    max-width: 1366px;
    margin: 0 auto;
    height: 600px;
    &__text {
      font-size: 1.2em;
      max-width: 600px;
      line-height: 1.7em;
      vertical-align: middle;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      .btn-concept {
        display: block;
        width: 350px;
        height: 80px;
        background-color: #233c5c;
        margin: 2em 0 0 0;
      }
    }
  }
}
.menu-and-shop {
  display: flex;
  width: 100%;
  background-color: rgb(235, 229, 221);
  background-image: url(static/image/top/bg-menu-and-shops-l.svg);
  background-position: left -100px center;
  background-repeat: no-repeat;
  justify-content: center;
  padding: 70px 0;
  &__item {
    width: 520px;
    position: relative;
    margin: 0 20px;
    &:hover {
      filter: brightness(110%);
    }
    .link-btn-image {
      width: 450px;
      height: 450px;
      position: relative;
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 7px solid #233c5c;
        border-radius: 50%;
      }
      .link-btn__inner {
        display: block;
        width: 100%;
        height: 100%;
      }
      &.menu {
        .link-btn__inner {
          background-image: url(static/image/top/bg-menu.webp);
          clip-path: circle(50% at center);
        }
      }
      &.shops {
        .link-btn__inner {
          background-image: url(static/image/top/bg-shop.webp);
          clip-path: circle(50% at center);
        }
      }
    }
    .link-btn-tag {
      position: absolute;
      top: 0;
      right: 0;
      height: 75%;
      width: 90px;
      background-color: #233c5c;
      text-align: center;
      padding: 1em 0 0 0;
      box-sizing: border-box;
      img {
        width: 80%;
      }
      span {
        color: #fff;
        position:absolute;
        bottom:1em;
        left:0;
        right: 0;
      }
    }
  }
}

.news {
  padding: 60px;
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
