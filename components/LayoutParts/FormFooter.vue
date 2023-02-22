<template>
  <div class="footer">
    <div class="footer-link"><nuxt-link to="/" class="btn to-top">HP TOP</nuxt-link><nuxt-link to="/news/form/" class="btn to-form-top">FORM TOP</nuxt-link></div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  background-color: #333;
  height: 100px;
  .footer-link {
    display: flex;
    justify-content: center;
    .btn {
      display: block;
      width: 150px;
      padding: 1em 0;
      background-color: rgb(101, 101, 101);
      color:#fff;
      text-align: center;
      border-radius: 10px;
      margin: 0 1em;
      &.to-top {}
      &.to-form-top {}
    }
  }
}
</style>
