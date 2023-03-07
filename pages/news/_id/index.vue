<template>
  <div>
    <NewsHeader></NewsHeader>
    <div class="news-contents-area">
      <div class="news-side-column column-left">
        <div v-if="postData" class="article">
          <div class="article-header">
            <div class="article-date">
              {{ $generateDate(postData.created_at) }}
            </div>
            <h2 class="article-title">{{ postData.title }}</h2>
          </div>
          <div class="article-content" v-html="postData.content"></div>
        </div>
      </div>
      <div class="news-side-column column-right">
        <Categories></Categories>
      </div>
    </div>
  </div>
</template>

<script>

import Categories from "../../../components/news/Categories.vue";
import NewsHeader from "../../../components/news/Header.vue";

export default {
  validate({ params }) {
    return /^[1-9][0-9]*$/.test(params.id)
  },
  data() {
    return {
      postData: null,
    };
  },
  asyncData({ params, $axios, error }) {
    const id = params.id
    return $axios.get(
      `${process.env.API_NEWS_BASE_URL}/articles/${id}`)
      .then((res) => {
        return { postData: res.data.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'NOT FOUND' })
      })
  },
  components: {
    Categories,
    NewsHeader,
  },
  layout() {
    return "main";
  },
  head() {
    return {
      title: `とんＱニュース ${this.postData.id}号`,
      meta: [
      { hid: "og:title", property: "og:title", content: `${this.postData.title}` },
        {
          hid: "description",
          name: "description",
          content:
            `${this.postData.content.replace(/(<([^>]+)>)/gi, '').substr( 0, 50 )}...`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
          `${this.postData.content.replace(/(<([^>]+)>)/gi, '').substr( 0, 50 )}...`,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `${process.env.BASE_URL}/news/${this.postData.id}`,
        },
      ],
    };
  },
  jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ton-q.com/news"
      },
      "headline": `${this.postData.title}`,
      //"alternativeHeadline": "リードや小見出し",
      "description": `${this.postData.content.replace(/(<([^>]+)>)/gi, '').substr( 0, 50 )}...`,
      "image": [
        `${this.$generateImageUrl(this.postData.thumb_filename)}`,
      ],
      "datePublished": `${this.postData.created_at}`, //記事の投稿日
      "dateModified": `${this.postData.updated_at}`,  //記事の更新日
      "publisher": {
        "@type": "Organization",
        "name": "とんきゅう株式会社",
        //"logo": {
        //  "@type": "ImageObject",
        //  "url": "ロゴ画像のURL"
        //}
      },
      "author": {
        "@type": "Person",
        "name": "Tomohiko aoki"
      },
    }
  },

};
</script>

<style lang="scss" scoped>
.news-contents-area {
  display: flex;
  max-width: 1360px;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 40px;

  .column-left {
    width: 70%;
    position: relative;
    min-height: 60vh;

    .loading {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%), translateY(-50%);
    }

    .error-message {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      width: 100%;
    }
  }

  .column-right {
    width: 28%;
  }
}

.article {
  padding-bottom: 40px;

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
