<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn to="/">
        tp6-p01 主页
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn to="/login">
        登录
      </v-btn>
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
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
