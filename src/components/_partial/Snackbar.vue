<template>
  <div>
    <v-snackbar light top centered v-model="visible">
      {{ $store.state.snackbar.msg }}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          small
          v-bind="attrs"
          v-if="showClose"
          color="primary"
          @click="close"
          >关闭</v-btn
        >
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  computed: {
    visible() {
      return this.$store.state.snackbar.visible;
    },
    showClose() {
      return this.$store.state.snackbar.showClose;
    }
  },
  methods: {
    close() {
      this.$store.commit("snackbar/close_snackbar");
    }
  }
};
</script>
