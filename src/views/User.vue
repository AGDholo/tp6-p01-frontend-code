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
              {{ user.email }}
            </h1>

            <p class="my-3">
              <v-icon left>mdi-calendar</v-icon>{{ user.created_at }} 加入
            </p>
          </v-col>

          <v-col cols="auto">
            <v-btn rounded outlined color="primary">编辑个人资料</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: null
  }),
  mounted() {
    const id = this.$route.params.id;
    this.$api.userDetail(id).then(res => {
      this.user = res.data;
    });
  }
};
</script>
