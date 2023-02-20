<template>
  <div class="error400">
    <div class="error-view">
      <div class="error-main"><span>404</span>NOT FOUND</div>
      <nuxt-link to="/" class="btn error-to-home"><span>HOME</span></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout() {
    return "error";
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
};
</script>

<style scoped lang="scss">
.error400 {
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
      font-size:1.4em;
    }
  }
}
</style>
