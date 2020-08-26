<template>
  <div>
    <h1>注册表单</h1>

    <v-alert
      dense
      outlined
      :type="success ? 'success' : 'error'"
      v-if="success || error"
    >
      <div v-if="error">
        <span v-for="(errorItem, i) in error" :key="i">
          {{ errorItem }}
          <br />
        </span>
      </div>

      <div v-if="success">注册成功，欢迎你： {{ success.email }}</div>
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
    error: "",
    success: ""
  }),
  methods: {
    sign() {
      const api = "http://127.0.0.1:8000/sign";
      this.error = "";
      this.success = "";
      this.axios
        .post(api, {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.success = response.data;
        })
        .catch(error => {
          this.error = error.response.data;
        });
    }
  }
};
</script>
