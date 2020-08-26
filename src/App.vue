<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn to="/">tp6-p01 主页</v-btn>

      <v-spacer></v-spacer>

      <v-btn v-for="(item, i) in appbarItems" :key="i" :to="item.to">{{
        item.text
      }}</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    appbarItems: [
      {
        text: "注册",
        to: "/sign"
      },
      {
        text: "登录",
        to: "/login"
      }
    ]
  })
};
</script>
