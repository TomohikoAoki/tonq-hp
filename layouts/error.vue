<template>
  <div>
    <LayoutPartsHeader></LayoutPartsHeader>
    <template>
      <div class="error">
        <div class="error-view">
          <div class="error-main">
            <span>{{ error.statusCode }}</span
            >{{ generateErrorMessage(error.statusCode) }}
          </div>
          <nuxt-link to="/" class="btn error-to-home"
            ><span>HOME</span></nuxt-link
          >
        </div>
      </div>
    </template>
    <LayoutPartsFooter></LayoutPartsFooter>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layoutTransition: {
    name: "layout",
    mode: "out-in",
  },
  head() {
    return {
      title: "エラー画面",
      meta: [
        {
          hid: "robots",
          name: "robots",
          content: "noindex,nofollow",
        },
      ],
    };
  },
  methods: {
    generateErrorMessage(status) {
      if (400 <= status && status < 500) {
        switch (status) {
          case 400:
            return "BAD REQUEST";
          case 401:
            return "UNAUTHORISED";
          case 403:
            return "FORBIDDEN";
          case 404:
            return "NOT FOUND";
          case 405:
            return "METHOD NOT ALLOWED";
          default:
            return "UNKNOWN 400ERROR";
        }
      }
      switch (status) {
        case 500:
          return "SERVER ERROR";
        case 501:
          return "NOT IMPLEMENTED";
        default:
          return "UNKNOWN 500ERROR";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.error {
  position: relative;
  width: 100%;
  min-height: 80vh;
}
.error-view {
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translateX(-50%) translateY(-50%);

  .error-main {
    text-align: center;
    font-weight: bold;
    font-size: 4em;
    color: #ccc;
    span {
      font-size: 2em;
      display: inline-block;
      width: 100%;
    }
  }
  .error-to-home {
    background-color: #ccc;
    width: 200px;
    display: block;
    padding: 1em 0.5em;
    text-align: center;
    margin: 3em auto 0 auto;
    border-radius: 10px;
    span {
      color: #fff;
      font-weight: bold;
      font-size: 1.4em;
    }
  }
}
</style>
