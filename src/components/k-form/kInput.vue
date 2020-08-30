<template>
  <div>
    <!-- 自定义组件的双向绑定 1，属性绑定， 2， 事件监听 -->
    <input :type="type" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },

  methods: {
    onInput(e) {
      console.log('$emit:input', e.target.value); //sy-log
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>