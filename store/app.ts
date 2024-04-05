import { defineStore } from 'pinia'

const useStoreApp = defineStore('todos', {
    state: () => ({
        app: {} as any
    }),

    getters: {
        getterAppGetApp: (state) => state.app,
    },

    actions: {
        async setApp(data: any) {
            this.app = data
        }
    }
})

export default useStoreApp