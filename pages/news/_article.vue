<template>
  <div>
    <div v-if="article">
    <h2 class="article-title">{{ article.title }}</h2>
    <div class="article-date">{{ article.created_at }}</div>
    <div class="articel-content" v-html="article.content">
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      article: null
    }
  },
  methods: {
    async fetchArticle(id) {
      const response = await axios.get(`${process.env.API_NEWS_BASE_URL}/articles/${id}`)

      if(response.status === 200) {
        this.article = response.data
      }
    }
  },
  mounted() {
    const id = this.$route.query.id
    this.fetchArticle(id)
  }
}
</script>

<style lang="scss" scoped></style>
