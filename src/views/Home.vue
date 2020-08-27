<template>
  <div>
    <v-alert type="info">
      欢迎你，你的 token 是：<br />
      {{ token }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    token: window.localStorage.getItem("JWT_TOKEN")
  })
};
</script>
