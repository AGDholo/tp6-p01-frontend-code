const snackbar = {
  namespaced: true,
  state: {
    msg: "", // snackbar 的信息
    visible: false, // 是否显示 snackbar
    showClose: true, // 是否显示关闭按钮
    timeout: 6000 // 自动关闭时间
  },
  mutations: {
    open_snackbar(state, options) {
      state.visible = true;
      state.msg = options.msg;
    },

    close_snackbar(state) {
      state.visible = false;
    },

    set_show_close(state, isShow) {
      state.showClose = isShow;
    },

    set_timeout(state, timeout) {
      state.timeout = timeout;
    }
  },
  actions: {
    openSnackbar(content, options) {
      const timeout = content.state.timeout;

      content.commit("open_snackbar", {
        msg: options.msg
      });

      setTimeout(() => {
        content.commit("close_snackbar");
      }, timeout);
    }
  }
};

export default snackbar;
