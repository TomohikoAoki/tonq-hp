<template>
  <div class="error400">
    <div>400番台エラー</div>
    <nuxt-link to="/" class="btn home">ホームに戻る</nuxt-link>
  </div>
</template>

<script>
export default {
  layout() {
    return "main";
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
