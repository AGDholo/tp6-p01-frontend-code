<template>
  <div>
    <h1>登录</h1>

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
    <v-btn rounded @click="login">登录</v-btn>
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
    login() {
      const params = {
        email: this.email,
        password: this.password
      };
      this.$api.auth("login", params);
    }
  }
};
</script>
