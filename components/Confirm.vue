<template>
  <div v-if="flag" class="confirm-layer">
    <div class="confirm-content">
      <div class="confirm-text">
        <slot></slot>
      </div>
      <div class="to-top-button" @click="changeSuccessFlag">FORM TOP</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

export default {
  props: {
    backTo: {
      type: String,
      default: 'top',
      require: false,
    }
  },
  computed: {
    ...mapGetters({
      flag: "news/getSuccessFlag",
    }),
  },
  methods: {
    changeSuccessFlag() {
      this.$store.dispatch('news/changeSuccessFlag')
      switch (this.backTo) {
        case 'fetch': this.$emit('fetchNews')
          break;
        case 'prevPage': this.$emit('fetchPage')
          break;
        case 'referrer': this.$router.back();
          break;
        default: this.$router.push('/news/form/');
      }
    }
  },
  mounted() {
    if (this.flag) {
      const modal = document.querySelector(".confirm-layer");
      disableBodyScroll(modal);
    }
  },
  beforeDestroy() {
    clearAllBodyScrollLocks();
  },
};
</script>

<style scoped lang="scss">
.confirm-layer {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;

  .confirm-content {
    width: 50%;
    max-width: 500px;
    position: absolute;
    padding: 40px;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform: translateY(-50%) translateX(-50%);
    background-color: rgb(238, 236, 233);

    .confirm-text {
      font-weight: bold;
      font-size: 2em;
      text-align: center;
      color: rgb(78, 95, 157);
    }

    .to-top-button {
      display: block;
      text-align: center;
      width: 120px;
      margin: 2em auto 0 auto;
      background-color: rgb(78, 95, 157);
      color: #fff;
      padding: 1em 0;
      border-radius: 5px;
    }
  }
}
</style>
