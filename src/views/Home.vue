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

    <div>
      <v-switch v-model="followed" label="关注用户"></v-switch>
    </div>

    <div class="mt-2">
      <v-card flat outlined v-for="(item, i) in tweets" :key="i">
        <v-card-text>
          <div class="d-flex align-start">
            <v-avatar size="49">
              <v-icon size="49">mdi-account</v-icon>
            </v-avatar>

            <div>
              <router-link
                :to="item.user_id"
                style="color: #000;text-decoration: none;"
                class="text-subtitle-1"
              >
                {{ item.user.name ? item.user.name : "网站用户" }}

                {{ item.user.email }} {{ item.created_at }}
              </router-link>

              <p class="text-subtitle-1">
                {{ item.content }}
              </p>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    followed: false,
    content: null
  }),
  mounted() {
    this.fetch();
  },
  computed: {
    tweets() {
      return this.$store.state.tweet.data;
    }
  },
  methods: {
    fetch() {
      const params = {
        all_tweets: this.followed ? 0 : 1
      };
      this.$api.tweetFetch(params);
    },
    push() {
      const params = {
        content: this.content
      };

      this.$api.tweetPush(params);
    }
  },
  watch: {
    followed() {
      this.fetch();
    }
  }
};
</script>
