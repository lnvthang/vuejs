export default {
  install(app, options) {
    app.config.globalProperties.$commonUtils = {
      testCommonUtils: function () {
        return "Config";
      },
    };
  },
};
