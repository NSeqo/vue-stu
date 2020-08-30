<template>
  <layout>
    <template v-slot:head="{title}">
      <div>
        <k-form :model="model" :rules="rules" ref="myform">
          <k-item label="用户名" prop="username">
            <k-input v-model="model.username"></k-input>
          </k-item>
        </k-form>
        <button @click="confirm">校验 {{title}}</button>
      </div>
    </template>
  </layout>
</template>

<script>
import kInput from "./components/k-form/kInput";
import kFormItem from "./components/k-form/kFormItem";
import kForm from "./components/k-form/kForm";

import layout from "./components/layout";

export default {
  components: {
    kForm,
    kInput,
    kItem: kFormItem,
    layout,
  },

  data() {
    return {
      model: {
        username: "",
      },

      rules: {
        username: [{ required: true, message: "输入用户名" }],
      },
    };
  },

  methods: {
    confirm() {
      this.$refs["myform"].validate((flag) => {
        if (flag) {
          console.log("校验通过"); //sy-log
        } else {
          console.log("校验失败"); //sy-log
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>