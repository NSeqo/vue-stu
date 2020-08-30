<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
/*

    最外层form组件

    维护整个表单的数据，接受校验规则

    对外暴露api
    
    validate校验方法（本身也没法去校验，是一个代理方法）


 */
export default {
  provide() {
    return {
      form: this,
    };
  },

  props: {
    model: {
      // 表单数据
      type: Object,
      required: true,
    },

    rules: Object, // 校验规则
  },

  methods: {
    validate(callback) {
      // 获取$children的引用
      const tasks = this.$children
        .filter((item) => item.prop)
        .map((item) => item.validate());

      Promise.all(tasks)
        .then(() => callback(true))
        .catch(() => callback(false));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>