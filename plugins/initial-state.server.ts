import useStoreApp from '@@/store/app'
import { getAppSetting } from '@@/json/api'

export default defineNuxtPlugin({
    name: 'initial-state',

    async setup(nuxtApp) {
        const storeApp = useStoreApp(nuxtApp.$pinia as any)

        const response = await getAppSetting()

        await storeApp.setApp(response)
    }
})