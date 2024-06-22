import { defineStore } from "pinia";
import forOwn from "lodash/forOwn";

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
      let objResult = state?.setting?.setting?.layout?.[key];

      // Check by Path
      if (!objResult) {
        forOwn(state?.setting?.setting?.layout ?? {}, (value: any) => {
          if (value?.path === key && !objResult) {
            objResult = value;
          }
        });
      }

      return objResult;
    },
  },

  actions: {
    async setApp(data: any) {
      this.setting = data;
    },
  },
});

export default useStoreApp;
