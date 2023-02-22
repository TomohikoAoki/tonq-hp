<template>
  <div class="header-area">
    <div class="header">
      <p class="form-name">TONQ NEWS FORM</p>
      <div v-show="isLogin" @click="logout" class="logout">LOGOUT</div>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');


.header {
  height: 80px;
  width: 100%;
  background-color: #5b5b5b;
  display: flex;
  justify-content: space-between;
  font-family: Alata;
  color: rgb(234, 234, 234);
  align-items: center;

  .form-name {
    font-weight: bold;
    font-size: 2.0em;
    padding: 0 0 0 1em;
  }

  .logout {
    width: 60px;
    height: 60px;
    background-color: #313131;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1em;
    font-size: 0.8em;
  }
}</style>
