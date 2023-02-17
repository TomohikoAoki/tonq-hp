<template>
  <div>
    <template v-if="error.statusCode === 404">
      not found
    </template>
    <template v-else>
      server error
    </template>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
