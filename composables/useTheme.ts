import useStoreApp from "@@/store/app";
import { useStorage } from "@vueuse/core";

const darkFlagPrefix = "Dark";

const useTheme = () => {
  const themeKey = useStorage("themeKey", ref("default"));

  const storeApp = useStoreApp();

  const switchTheme = (key?: string, isNotAdaptingDarkMode?: boolean) => {
    const isDarkMode = themeKey.value.includes(darkFlagPrefix);

    themeKey.value = key
      ? isDarkMode && !isNotAdaptingDarkMode
        ? key + darkFlagPrefix
        : key
      : themeKey.value;

    const root = document.documentElement;

    if (root && themeKey.value) {
      // Set Dark mode for HTML
      const isDarkMode = themeKey.value.includes(darkFlagPrefix);
      root.classList.toggle("dark", isDarkMode);

      // Set variables
      const objectTheme = storeApp.getterAppGetSettingTheme[themeKey.value];
      if (objectTheme) {
        for (const property in objectTheme) {
          if (objectTheme[property])
            root.style.setProperty(property, objectTheme[property]);
        }
      }
    }
  };

  const toogleDarkMode = () => {
    const root = document.documentElement;

    if (root) {
      const isDarkMode = themeKey.value.includes(darkFlagPrefix);

      switchTheme(
        isDarkMode
          ? themeKey.value.replace(darkFlagPrefix, "")
          : themeKey.value + darkFlagPrefix,
        true
      );
    }
  };

  const initTheme = () => {
    switchTheme();
  };

  return { switchTheme, toogleDarkMode, initTheme };
};

export default useTheme;
