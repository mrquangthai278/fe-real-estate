export default defineNuxtPlugin({
  name: "theme-generator",

  async setup() {
    const { initTheme } = useTheme();

    initTheme();
  },
});
