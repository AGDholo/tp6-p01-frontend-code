<template>
  <div>
    <v-card flat>
      <v-card-text>
        <div class="d-flex align-start">
          <v-avatar size="49">
            <v-icon size="49">mdi-account</v-icon>
          </v-avatar>
          <v-textarea
            v-model="content"
            placeholder="有什么新鲜事？"
            auto-grow
            counter="280"
            height="50"
          ></v-textarea>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <!-- 如果用户没有输入内容，禁用按钮 -->
        <v-btn
          :disabled="!content"
          color="primary"
          rounded
          depressed
          @click="push"
          >推文</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    content: null
  }),
  methods: {
    push() {
      const params = {
        content: this.content
      };

      this.$api.tweetPush(params);
    }
  }
};
</script>
