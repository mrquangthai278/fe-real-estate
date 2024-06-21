import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useDarkModeStore = defineStore("darkMode", () => {
  const darkMode = useStorage("darkMode", ref(false));

  if (document)
    document.documentElement.classList.toggle("dark", darkMode.value);

  function toggleDarkMode() {
    darkMode.value = !darkMode.value;
    if (document)
      document.documentElement.classList.toggle("dark", darkMode.value);
  }

  return { darkMode, toggleDarkMode };
});
