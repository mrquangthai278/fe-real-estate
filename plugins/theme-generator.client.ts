import useStoreApp from '@@/store/app'

export default defineNuxtPlugin({
    name: 'theme-generator',

    async setup(nuxtApp) {
        const storeApp = useStoreApp(nuxtApp.$pinia as any)

        const root = document.documentElement;

        if (root) {
            const defaultTheme = 'dark'

            const objectTheme = storeApp.getterAppGetSettingTheme[defaultTheme]

            for (const property in objectTheme) {
                if (objectTheme[property]) root.style.setProperty(property, objectTheme[property])
            }
        }
    }
})