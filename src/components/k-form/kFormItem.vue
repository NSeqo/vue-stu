<template>
  <div>
    <label>{{label}}</label>
    <slot></slot>
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
import Validator from "async-validator";

export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      error: "",
    };
  },
  methods: {
    validate() {
      // 获取该属性的校验规则prop
      const rules = this.form.rules[this.prop];
      if (rules && rules.length > 0) {
        const value = this.form.model[this.prop];

        const schema = new Validator({
          [this.prop]: rules,
        });

        return schema.validate(
          {
            [this.prop]: value,
          },
          (errors) => {
            if (errors) {
              this.error = errors[0].message; // 取第一个错误信息
            } else {
              this.error = ""; 
            }
          }
        );
      }
    },
  },
};
</script>

<style>
.error {
  color: red;
}
</style>