<template>
  <div class="main-contents">
    <div class="top">
      <div class="top-content">
        <div class="main-title">
          <h1 class="main-title__title">
            <span class="h1main">
              とんきゅうグループの<span class="ib">ポイントカード </span>
              <span class="card-name">
                <img src="~assets/image/qcard/card-name.svg" />
              </span>
            </span>
          </h1>
          <p>
            <span class="ib">とんきゅうグループ全店で使えるポイントカード、</span><span class="ib">その名もQ-CARD。</span><span class="ib">今まで以上に使いやすくなります。</span>
          </p>
        </div>
        <div class="card-image">
          <img src="~assets/image/qcard/card-image.svg" />
          <div class="over-lay"></div>
        </div>
      </div>
    </div>
    <div class="middle">
      <section class="tokuten">
        <h2 class="tokuten-title">
          <span class="tokuten-title__icon">その１</span
          ><span class="tokuten-title__text">グループ全店共通</span>
        </h2>
        <div class="tokuten-content">
          <p>
            Q-CARDはとんきゅうグループ<span class="ib"
              >各店舗でご利用できます。</span
            >
          </p>
          <dl class="shop">
            <dt>ご利用可能店舗</dt>
            <dd>
              <ul>
                <li>とんかつとんＱ</li>
                <li>焼肉赤牛</li>
                <li>アルゾーニ・イタリア</li>
              </ul>
            </dd>
          </dl>
        </div>
      </section>
      <section class="tokuten">
        <h2 class="tokuten-title">
          <span class="tokuten-title__icon">その２</span
          ><span class="tokuten-title__text">１ポイント=１円</span>
        </h2>
        <div class="tokuten-content">
          <p>
            お会計金額１００円につき１ポイントつきます。<br />
            ポイントは次回ご来店より１ポイント１円相当として、お会計でご利用できます。
          </p>
        </div>
      </section>
      <section class="tokuten">
        <h2 class="tokuten-title">
          <span class="tokuten-title__icon">その３</span
          ><span class="tokuten-title__text">特典がいっぱい！</span>
        </h2>
        <div class="tokuten-content">
          <ul class="ippai">
            <li>
              入会特典として１００ポイントプレゼント、さらにカード裏面のＱＲコードからモバイルで会員情報を登録していただくと更に１００ポイントプレゼント
            </li>
            <li>お誕生月にはポイント３倍<span>※</span></li>
            <li>１０回のご来店毎に３００ポイント付与</li>
          </ul>
          <p class="tyui">
            ※会員情報を登録されたお客様のみのサービスとなります。<br />※お誕生月特典は入会の翌日からの特典となります。
          </p>
        </div>
      </section>
    </div>
    <p class="nyukai">入会は各店頭で<span class="sp_block">受付中！</span></p>
    <nav class="lastlink">
      <ul>
        <li>
          <a href="https://ton-kyu.com/terms/index.html" class="tremlink"
            ><i class="fa fa-forward" aria-hidden="true"></i>&nbsp;利用規約</a
          >
        </li>
        <li>
          <a href="mailto:member@ton-kyu.com" class="mail"
            ><i class="fa fa-forward" aria-hidden="true"></i
            >&nbsp;カードに関するお問い合わせ</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  layout() {
    return "main";
  },
  head() {
    return {
      title: "とんきゅうグループのＱ-CARD",
      meta: [
        { hid: "og:title", property: "og:title", content: "とんＱのＱ-CARD" },
        {
          hid: "description",
          name: "description",
          content: `とんきゅうグループ全店（一部の店舗を除く）で使える「Ｑ-CARD」。お会計１００円につき１ポイント付与、次回ご利用時より１ポイント１円でご利用いただけます。`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "とんきゅうグループ全店（一部の店舗を除く）で使える「Ｑ-CARD」。お会計１００円につき１ポイント付与、次回ご利用時より１ポイント１円でご利用いただけます。",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `${process.env.BASE_URL}/qcard`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$main-color: #114b7c;
$sub-color: #c4ad00;
/* Scss Document */
.main-contents {
  width: 100%;
  margin: 0;
  padding: 0 0 40px 0;
  box-sizing: border-box;
  float: none;

  .top {
    width: 100%;
    padding: 50px 0;
    background-image: url(~assets/image/qcard/bg-top.jpg);
    background-size: cover;
    background-repeat: no-repeat;

    .top-content {
      display: flex;
      max-width: 1100px;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
      .main-title {
        width: 50%;
        margin-right: 20px;
        .main-title__title {
          .h1main {
            color: $main-color;
            line-height: 1.2em;
            font-size: 1.6em;
            @media screen and (max-width: 599px) {
              font-size: 1.4em;
            }
          }
          .card-name {
            display: block;
            padding: 0.6em 0 1.2em 0;
          }
        }
        p {
          color: #453d3d;
          width: 95%;
          max-width: 900px;
          margin: 0 auto;
          font-size: 1.3em;
          line-height: 1.5em;
        }
      }
      .card-image {
        width: 45%;
        position: relative;
        img {
          filter: drop-shadow(10px 10px 7px #999);
        }
        .over-lay {
          position: absolute;
          mix-blend-mode: overlay;
          background: linear-gradient(
            120deg,
            rgba(45, 45, 45, 1) 0%,
            rgba(176, 176, 176, 1) 13%,
            rgba(255, 255, 255, 1) 18%,
            rgba(159, 159, 159, 1) 27%,
            rgba(240, 240, 240, 1) 34%,
            rgba(184, 184, 184, 1) 42%,
            rgba(60, 60, 60, 1) 100%
          );
          opacity: 60%;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          mask-image: url(~static/image/qcard/test-card-mask.svg), none;
        }
      }
    }
  }
}
.middle {
  width: 100%;
  box-sizing: border-box;
  max-width: 1366px;
  display: flex;
  margin: 0 auto;
  @media screen and (max-width: 549px) {
    width: 100%;
  }
  .tokuten {
    padding: 0px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    max-width: 1000px;
    width: 95%;
    margin: 50px 10px;
    border: 1px solid $main-color;
    @media screen and (max-width: 549px) {
      width: 95%;
      max-width: 480px;
      margin: 50px auto;
    }
    .tokuten-title {
      background-color: $main-color;
      font-weight: 900;
      line-height: 1em;
      color: #fff;
      display: flex;
      width: 100%;
      align-items: center;
      padding: 0.3em;
      font-size: 2em;
      margin: 0;
      @media screen and (max-width: 549px) {
        font-size: 2.2em;
        margin: 0 0 10px 0;
      }
      &__icon {
        display: inline-block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: $sub-color;
        color: #fff;
        text-align: center;
        line-height: 60px;
        vertical-align: middle;
        font-size: 16px;
        text-shadow: none;
        margin: 0 0.7em 0 0;
        transform: rotate(-5deg);
      }
      &__text {
      }
    }
    .tokuten-content {
      width: 100%;
      padding: 2em;
      box-sizing: border-box;
      p {
        margin: 0 0;
        font-size: 1.3em;
        line-height: 1.5em;
        @media screen and (max-width: 949px) {
          width: 100%;
          box-sizing: border-box;
        }
        @media screen and (max-width: 749px) {
        }
      }
      .shop {
        background-color: #dcebf6;

        padding: 10px 30px;
        @media screen and (min-width: 650px) {
          display: inline-block;
          margin: 20px 0 0 90px;
        }
        @media screen and (max-width: 649px) {
          margin: 20px auto 0 auto;
          display: block;
          width: 90%;
          box-sizing: border-box;
        }
        dt {
          margin: 0;
        }
        dd {
          margin: 0;
          padding: 0;
          ul {
            margin: 0;
            padding: 0;
            li {
              margin: 0 0 0 1.5em;
              padding: 0;
              line-height: 1.5em;
            }
          }
        }
      }
      .ippai {
        margin: 10px 0;
        padding: 0 0 0 0;

        @media screen and (max-width: 949px) and (min-width: 750px) {
          width: 95%;
          box-sizing: border-box;
          margin: 10px auto 10px 0;
          padding: 0 0 0 110px;
        }
        @media screen and (max-width: 749px) {
          width: 95%;
          margin: 10px auto;
          padding: 0 0 0 1em;
          box-sizing: border-box;
        }
        li {
          margin: 0.4em 0;
          padding: 0;
          line-height: 1.2em;
          span {
            color: #7e165b;
          }
        }
      }
      .tyui {
        font-size: 0.85em;
        color: #7e165b;
      }
    }
  }
  section {
    @media screen and (min-width: 950px) {
      &:nth-child(1) {
        //background-image: url(image/bgtokuten01.gif);
        background-repeat: no-repeat;
        background-position: right 30px center;
        background-size: contain;
      }
      &:nth-child(2) {
        //background-image: url(image/bgtokuten02.gif);
        background-repeat: no-repeat;
        background-position: right 30px center;
        background-size: contain;
      }
      &:nth-child(3) {
        //background-image: url(image/bgtokuten03.gif);
        background-repeat: no-repeat;
        background-position: right 20px center;
        background-size: contain;
      }
    }
  }
}
.nyukai {
  text-align: center;
  font-size: 3em;
  font-weight: bold;
  line-height: 1.3em;
}

.lastlink {
  ul {
    background-color: #dadada;
    max-width: 400px;
    width: 90%;
    margin: 50px auto;
    padding: 30px 1.5em;
    box-sizing: border-box;
    list-style: none;
    li {
      margin: 1em 0;
      a {
        color: #453d3d;
        text-decoration: underline;
      }
    }
  }
}
</style>
