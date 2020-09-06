<template>
  <div v-if="user">
    <v-card outlined>
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ></v-img>

      <v-card-text>
        <v-row align="start" justify="space-between">
          <v-col cols="auto">
            <h1 class="secondary--text">
              {{ user.name ? user.name : "你还未设置名字" }}
            </h1>

            <p class="mt-3">{{ user.email }}</p>

            <p class="mt-3">
              <v-icon left>mdi-calendar</v-icon>
              {{ user.created_at }} 加入
            </p>
          </v-col>

          <v-col cols="auto">
            <v-btn
              rounded
              outlined
              color="primary"
              @click.stop="dialog = true"
              v-if="user.id === $store.state.user.data.id"
              >编辑个人资料</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card flat outlined v-for="(item, i) in user.tweets" :key="i">
      <v-card-text>
        <div class="d-flex align-start">
          <v-avatar size="49">
            <v-icon size="49">mdi-account</v-icon>
          </v-avatar>

          <div>
            <router-link
              :to="user.id"
              style="color: #000;text-decoration: none;"
              class="text-subtitle-1"
            >
              {{ user.name ? user.name : "网站用户" }}

              {{ user.email }} {{ item.created_at }}
            </router-link>

            <p class="text-subtitle-1">
              {{ item.content }}
            </p>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" max-width="600" persistent>
      <v-card>
        <div>
          <v-card-text class="d-flex align-center justify-space-between">
            <h2 class="headline d-flex align-center">
              <v-btn icon color="primary" @click="dialog = false">
                <v-icon>mdi-close</v-icon> </v-btn
              >编辑个人资料
            </h2>
            <v-btn rounded color="primary" depressed @click="updateUser"
              >保存</v-btn
            >
          </v-card-text>
        </div>

        <v-card-text>
          <v-text-field
            v-model="name"
            filled
            :placeholder="user.name ? user.name : '你还未设置名字'"
            label="全名"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: null,
    name: null,
    dialog: false
  }),
  mounted() {
    const id = this.$route.params.id;
    this.$api.userDetail(id).then(res => {
      this.user = res.data;
    });
  },
  methods: {
    updateUser() {
      this.$api.userUpdate(this.$store.state.user.data.id, {
        name: this.name
      });
    }
  }
};
</script>
