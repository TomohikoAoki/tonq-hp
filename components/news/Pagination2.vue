<template>
  <div class="pagination" v-if="paginate.limit">
    <div
      class="pagination-item"
      v-for="n of generateIcon"
      :key="n"
      :class="{ active: paginate.page === n }"
      @click="paging(n)"
    >
      <span class="icon">{{ n }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['paginate'],
  methods: {
    paging(n) {
      console.log('paging', n)
      this.$emit('paging', n)
    }
  },
  computed: {
    generateIcon() {
      console.log(this.paginate)
      return Math.ceil(this.paginate.count / this.paginate.limit);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
  .pagination-item {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(28, 62, 126);
    margin: 0 0.4em;
    color: #fff;
    cursor:pointer;
    &.active {
      background-color: rgb(161, 178, 210);
      color: rgb(18, 32, 93);
      font-weight: bold;
    }
    .icon {
      display: block;
      height: 100%;
      width: 100%;
      text-align: center;
      height: 50px;
      line-height: 50px;
    }
  }
}
</style>
