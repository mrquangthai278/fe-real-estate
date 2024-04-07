import { defineStore } from 'pinia'

const useStoreApp = defineStore('app', {
    state: () => ({
        setting: {} as any
    }),

    getters: {
        getterAppGetSetting: (state) => state.setting,
        getterAppGetSettingTheme: (state) => state.setting?.setting?.theme ?? {},
        getterAppGetSettingForm: (state) => state.setting?.setting?.model?.form ?? {},
    },

    actions: {
        async setApp(data: any) {
            this.setting = data
        }
    }
})

export default useStoreApp