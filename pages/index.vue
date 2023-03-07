<template>
  <div class="top">
    <div class="top-of-top">
      <div class="header-nav">
        <ul class="header-link-list">
          <li class="header-link-item">
            <nuxt-link to="menu">お品書き</nuxt-link>
          </li>
          <li class="header-link-item">
            <nuxt-link to="kodawari">こだわり</nuxt-link>
          </li>
          <li class="header-link-item">
            <nuxt-link to="shop">店舗紹介</nuxt-link>
          </li>
          <li class="header-link-item">
            <nuxt-link to="news">お知らせ</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="slider-area">
        <div class="main-title-image">
          <img src="~assets/image/top/title-main-sub.svg" class="slide-title" />
          <img src="~assets/image/top/title-main.svg" class="slide-title fadeout" />
        </div>
        <img src="~assets/image/top/image-top.webp" class="main-bg-image" />
      </div>
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
        <div class="link-btn-tag">
          <img src="~assets/image/top/title-menu.svg" alt="お品書き" /><span>MENU</span>
        </div>
      </nuxt-link>
      <nuxt-link to="shop" class="menu-and-shop__item">
        <div class="link-btn-image shops">
          <div class="link-btn__inner"></div>
        </div>
        <div class="link-btn-tag">
          <img src="~assets/image/top/title-shop.svg" alt="店舗紹介" /><span>SHOP</span>
        </div>
      </nuxt-link>
    </div>
    <CurrentNewsVue></CurrentNewsVue>
    <BannerVue class="banner-wrap"></BannerVue>
  </div>
</template>

<script>
import CurrentNewsVue from "../components/news/CurrentNewsList.vue";
import BannerVue from "../components/common/banner.vue"
import { mapGetters } from "vuex";

export default {
  name: "IndexPage",
  layout() {
    return "top";
  },
  head() {
    return {
      title: 'とんかつとんＱ',
      titleTemplate: ""
    }
  },
  jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "website",
      "name": "とんかつとんＱ",
      "inLanguage": "jp", //ウェブサイトの言語
      "publisher": {
        "@type": "Organization",
        "name": "とんきゅう株式会社",
        "logo": {
          "@type": "ImageObject",
          "url": "ロゴ画像のURL"
        }
      },
      "copyrightYear": "2009-01-01T10:50:37+0000",//コピーライトの日付
      "headline": "とんかつとんＱ",
      "description": "とんかつとんＱは茨城県つくば市を中心に、茨城、千葉、埼玉へ店舗展開中のとんかつ専門店。農林水産大臣賞を受賞した国産ブランド「やまと豚」のとんかつをメインに、 お膳の五品〈とんかつ・キャベツ・ご飯・味噌汁・お新香〉すべてにこだわりをもってお作りし、友人を家に招いているような暖かい接客で お客様にご提供しております。",
      "url": "https://ton-q.com"
    }
  },
  components: {
    CurrentNewsVue,
    BannerVue,
  },
  computed: {
    ...mapGetters({
      currentNews: "news/getPostData",
      errMessage: "news/getErrorMessage",
    }),
  },
  methods: {
    async fetchNews() {
      await this.$store.dispatch("news/fetchCurrentNews");
    },
    slideImage() {
      const images = document.getElementsByClassName("slide-title");
      setTimeout(() => {
        images[0].classList.add("fadeout");
        images[1].classList.remove("fadeout");
        images[1].classList.add("fadein");
      }, 2000);
    },
  },
  created() {
    this.fetchNews();
  },
  mounted() {
    this.slideImage();
  },
};
</script>

<style lang="scss" scoped>
.top {
  position: relative;
  padding-bottom: 30px;
}

.header-nav {
  position: absolute;
  top: 2em;
  right: 0;
  z-index: 4;

  .header-link-list {
    display: flex;
    list-style: none;
    border-bottom: 1px solid #fff;
    padding: 0 10em 1em 0;

    .header-link-item {
      color: #fff;
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
  position: relative;
  height: 44.38vw;

  .main-title-image {
    position: absolute;
    top: 8%;
    left: 8%;
    height: 100%;
    width: 18%;
    filter: drop-shadow(0 0 20px #000) drop-shadow(0 0 15px #000);

    img {
      position: absolute;
    }
  }

  .main-bg-image {
    width: 100%;
  }
}

.fadein {
  opacity: 1;
  transition: opacity 1.5s;
}

.fadeout {
  opacity: 0;
  transition: opacity 1.5s;
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
        position: absolute;
        bottom: 1em;
        left: 0;
        right: 0;
      }
    }
  }
}
.banner-wrap {
  :deep(.banner-item) {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
