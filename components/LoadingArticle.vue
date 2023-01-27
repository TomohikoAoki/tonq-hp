<template>
  <div class="wrap" v-if="loading">
    <div class="loading">
      <svg viewBox="0 0 30 30" role="img" aria-label="loading">
        <rect rx="1.5" x="13.5" class="loading-path _no1" />
        <rect
          rx="1.5"
          transform="rotate(45 22.425 7.576)"
          x="20.925"
          y="3.075"
          class="loading-path _no2"
        />
        <rect
          rx="1.5"
          transform="rotate(90 25.5 15)"
          x="24"
          y="10.5"
          class="loading-path _no3"
        />
        <rect
          rx="1.5"
          transform="rotate(-45)"
          x="-1.5"
          y="28"
          class="loading-path _no4"
        />
        <rect rx="1.5" x="13.5" y="21" class="loading-path _no5" />
        <rect
          rx="1.5"
          transform="rotate(45)"
          x="19.5"
          y="6"
          class="loading-path _no6"
        />
        <rect
          rx="1.5"
          transform="rotate(90 4.5 15)"
          x="3"
          y="10.5"
          class="loading-path _no7"
        />
        <rect
          rx="1.5"
          transform="rotate(135 7.576 7.575)"
          x="6.075"
          y="3.075"
          class="loading-path _no8"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: true,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 50px;
}

.loading {
  width: 65px;
  height: 65px;
  margin: auto;

  &-path {
    animation: fadeColor infinite 0.8s reverse;
    width: 3px;
    height: 9px;
    fill: #d4e0e8;

    @for $i from 1 to 9 {
      &._no#{$i} {
        animation-delay: $i * 0.1s;
      }
    }
  }
}

@keyframes fadeColor {
  to {
    fill: #406b9d;
  }
}
</style>
