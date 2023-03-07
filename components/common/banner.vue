<template>
  <div class="banner">
    <nav class="banner-link">
      <ul class="banner-link__list">
        <li class="qcard banner-item" v-if="!hideFlags || !hideFlags.includes('qcard')">
          <nuxt-link to="/q-card"
            ><img
              src="~assets/image/common/banner/bnr-qcard.gif"
              alt="Ｑカード"
          /></nuxt-link>
        </li>
        <li class="recruit banner-item" v-if="!hideFlags || !hideFlags.includes('recruit')">
          <a href="https://www.baitoru.com/op121428/alist/"
            ><img
              src="~assets/image/common/banner/bnr-recruit.png"
              alt="求人情報リンク"
          /></a>
        </li>
        <div v-if="shopData">
          <li class="twitter banner-item" v-if="shopData.sns.twitter">
            <a :href="shopData.sns.twitter"
              ><img
                src="~assets/image/shop/bnr-twitter.gif"
                alt="ツイッターリンク"
            /></a>
          </li>
          <li class="insta banner-item" v-if="shopData.sns.instagram">
            <a :href="shopData.sns.instagram"
              ><img
                src="~assets/image/shop/bnr-insta.gif"
                alt="インスタグラムリンク"
            /></a>
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    shopData: {
      type: Object,
      default: null,
      require: false,
    },
    hideFlags: {
      type: Array,
      default: null,
      require: false
    }
  },
};
</script>

<style scoped lang="scss">
.banner {
  max-width: 1366px;
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    width: 40%;
  }
  @media screen and (max-width: 550px) {
    width: 350px;
    margin: 0 auto;
  }
  .banner-link {
    &__list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      li {
        max-width: 350px;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        filter: drop-shadow(2px 2px 1px #888) grayscale(30%) brightness(100%);
        border: 1px solid #333;
        transition: filter 0.2s ease-in-out;
        &:hover {
          filter: drop-shadow(2px 2px 1px #666) grayscale(0) brightness(110%);
        }
        &.recruit {
          border: 1px solid #333;
        }
        &.twitter {
          border: 1px solid rgb(32, 81, 121);
        }
        &.insta {
          border: 1px solid rgb(93, 22, 95);
        }
        a {
          display: block;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
