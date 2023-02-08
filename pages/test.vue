<template>
  <div>
    <div><button @click="test" class="button">テスト</button></div>
    <div>現在のページ:{{ page }}</div>
    <div>レスポンスデータ:{{ data }}</div>
    <div><button @click="test2" class="button">テスト2</button></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: null,
      page: 1,
    };
  },
  methods: {
    test() {
      this.page++
      console.log('ページ表示', this.page)
      this.$router.push({ query: { page: this.page } });
    },
    async fetchData(page) {
      let response = null;
      try {
        response = await axios.get(
          `${process.env.API_NEWS_BASE_URL}/test?page=${page}`
        );
      } catch (err) {
        console.log(err.response.data);
      }

      this.data = response.data;
    },
    test2() {
      console.log('これは動くのか？？？')
    }
  },
  mounted() {
    this.fetchData(this.page);
  },
  beforeRouteUpdate(to, from, next) {
    this.page = (to.query.page) ? Number(to.query.page)  : 1
    this.fetchData(this.page)
    next()
  }
};
</script>
