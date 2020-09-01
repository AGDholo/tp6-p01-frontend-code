<template>
  <div>
    <h1>注册表单</h1>

    <v-alert dense outlined type="error" v-if="error">
      <span v-for="(errorItem, i) in error" :key="i">
        {{ errorItem }}
        <br />
      </span>
    </v-alert>

    <v-text-field label="邮件地址" type="email" v-model="email"></v-text-field>
    <v-text-field
      label="密码"
      type="password"
      v-model="password"
    ></v-text-field>
    <v-btn rounded @click="sign">注册</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    error: ""
  }),
  methods: {
    sign() {
      const params = {
        email: this.email,
        password: this.password
      };
      this.$api.auth("sign", params);
    }
  }
};
</script>
