<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-navigation-drawer permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">TP6-P01</v-list-item-title>
                <v-list-item-subtitle>Primer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense rounded nav>
              <v-list-item
                v-for="item in navItems"
                :key="item.title"
                link
                :to="item.to"
                color="primary"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>

        <v-col cols="8">
          <v-main>
            <router-view></router-view>
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    navItems: [
      { title: "主页", icon: "mdi-home", to: "/" },
      { title: "注册", icon: "mdi-account-plus", to: "/sign" },
      { title: "登录", icon: "mdi-login", to: "/login" }
    ]
  })
};
</script>
