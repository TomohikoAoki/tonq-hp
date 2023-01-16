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
      <div class="menu">
        とんＱのお品書き
      </div>
      <div class="shops">
        店舗紹介
      </div>
    </div>
    <div class="news">
      <p>news</p>
      <div class="topic">
        <div class="topic-image"></div>
        <div class="topic-date"></div>
        <div class="topic-title"></div>
      </div>
    </div>
    <div class="link-area"></div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout() {
    return "MainLayouts";
  },
  methods: {
    async fetchNews() {
      const response = await this.$axios.get("http://localhost/public/news")

      console.log(response.data)
    }
  },
  mounted() {
    this.fetchNews()
  }
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
</style>
