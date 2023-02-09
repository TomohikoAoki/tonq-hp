<template>
  <ul class="news-area">
    <li v-for="(news, index) in postData" :key="index" class="news">
      <div @click="toDetail(news.id)" class="news-wrap">
        <div class="news-image">
          <img :src="$generateImageUrl(news.thumb_filename)" />
        </div>
        <div class="news-title">
          <div class="date">{{ $generateDate(news.created_at) }}</div>
          <div class="title">{{ news.title }}</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['postData'],
  methods: {
    toDetail(id) {
      this.$router.push(`/news/${id}`);
    },
  }
}
</script>

<style lang="scss" scoped>
.news-area {
  > li:nth-child(odd) {
    background-color: rgb(244, 248, 255);
  }
  .news {
    background-color: #fff;
    &:hover {
      filter: brightness(93%);
    }
    .news-wrap {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      padding: 10px 0 10px 10px;
      .news-image {
        width: 120px;
        height: 90px;
        background-color: rgb(192, 192, 192);
        img {
          width: 100%;
        }
      }
      .news-title {
        flex: 1;
        margin-left: 1em;
        .title {
          font-weight: bold;
          font-size: 1.3em;
        }
        .date {
          font-weight: bold;
          color: rgb(114, 101, 101);
          padding: 0 0 0.3em 0;
        }
      }
    }
  }
}
</style>
