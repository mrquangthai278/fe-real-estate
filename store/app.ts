import { defineStore } from "pinia";

const useStoreApp = defineStore("app", {
  state: () => ({
    setting: {} as any,
  }),

  getters: {
    getterAppGetSetting: (state) => state.setting,
    getterAppGetSettingTheme: (state) => state.setting?.setting?.theme ?? {},
    getterAppGetSettingForm: (state) =>
      state.setting?.setting?.model?.form ?? {},
    getterAppGetSettingLayout: (state) => (key: string) => {
      return state?.setting?.setting?.layout?.[key] ?? null;
    },
  },

  actions: {
    async setApp(data: any) {
      this.setting = data;
    },
  },
});

export default useStoreApp;
