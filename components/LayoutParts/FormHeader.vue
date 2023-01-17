<template>
  <div>
    <div class="header"><p>NEWS FORM</p><div v-show="isLogin" @click="logout">LOGOUT</div></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    async logout() {
      $nuxt.$fire.auth.signOut().then((res) => {
        $nuxt.$router.push('/news/form/login');
      })
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'isLogin'
    })
  }
}
</script>

<style scoped lang="scss">
.header {
  height: 80px;
  width: 100%;
  background-color: rgb(202, 230, 221);
  display: flex;
  justify-content: space-between;
}
</style>
