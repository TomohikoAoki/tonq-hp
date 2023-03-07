<template>
  <div class="link-wrap">
    <div class="shop-link">
      <h2 class="shop-link__title"><span>他の店舗</span></h2>
      <nav class="link-nav">
        <h3 class="link-nav__title">茨城県</h3>
        <ul class="nav">
          <li><nuxt-link to="/shop/tsukuba">つくば本店</nuxt-link></li>
          <li><nuxt-link to="/shop/iias">イーアスつくば店</nuxt-link></li>
          <li><nuxt-link to="/shop/senba">水戸千波店</nuxt-link></li>
          <li><nuxt-link to="/shop/moriya">守谷ふれあい店</nuxt-link></li>
        </ul>
        <h3 class="link-nav__title">埼玉県</h3>
        <ul class="nav">
          <li><nuxt-link to="/shop/kasukabe">春日部店</nuxt-link></li>
          <li><nuxt-link to="/shop/fujimino">ふじみ野店</nuxt-link></li>
        </ul>
        <h3 class="link-nav__title">千葉県</h3>
        <ul class="nav">
          <li><nuxt-link to="/shop/narita">成田ニュータウン店</nuxt-link></li>
          <li><nuxt-link to="/shop/kashiwa">柏高島屋店</nuxt-link></li>
        </ul>
      </nav>
    </div>
    <Banner :shopData="shopData" :hideFlags="['qcard']" class="banner"></Banner>
  </div>
</template>

<script>
import Banner from '../common/banner'
export default {
  props: ["shopData"],
  components: {
    Banner,
  }
};
</script>

<style scoped lang="scss">
.link-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
.shop-link {
  border: 1px solid;
  padding: 40px 20px 20px 20px;
  box-sizing: border-box;
  max-width: 400px;
  width: 100%;
  flex: 1;
  @media screen and (max-width: 900px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 550px) {
    margin: 20px auto;
    width: 90%;
    min-width: 350px;
  }
  &__title {
    text-align: center;
    @media screen and (min-width: 550px) {
      margin: 0;
    }
    span {
      background-color: #333;
      color: #fff;
      padding: 0.7em 1.2em;
      border-radius: 50px;
    }
  }
  .link-nav {
    &__title {
      margin: 30px 0 0 0;
      font-weight: bold;
    }
    .nav {
      margin: 0;
      padding: 0;
      li {
        line-height: 1.2em;
        font-size: 1.1em;
        margin: 0 0 0 1em;
        padding: 0.5em 0 0.3em 0;
        color: #3f3f3f;
        a {
          color: #3f3f3f;
        }
      }
    }
  }
}
.banner {
  padding-top: 1em;
  :deep(.banner-item) {
    margin: 10px 0;
  }
}
</style>
