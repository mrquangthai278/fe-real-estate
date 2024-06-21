<template>
  <div v-if="error" class="hidden"></div>
  <template v-else><slot></slot></template>
</template>
  
  <script>
export default {
  data() {
    return {
      error: null,
    };
  },

  errorCaptured(error, vm, info) {
    this.error = error;
    return false;
  },
};
</script>