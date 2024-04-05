import useStoreApp from '@@/store/app'

const getParentSetting: any = new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            uuid: 'uwqe-21321-3213213-21321',
            setting: {
                theme: {
                    default: {
                        '--color-primary': '#ffd859'
                    },
                    dark: {
                        '--color-primary': 'blue'
                    }
                }
            }
        });
    }, 300);
});

export default defineNuxtPlugin({
    name: 'initial-state',

    async setup(nuxtApp) {
        const storeApp = useStoreApp(nuxtApp.$pinia as any)

        const response = await getParentSetting

        await storeApp.setApp(response)
    }
})