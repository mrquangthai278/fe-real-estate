<template>
  <div class="h-screen">
    <Button @click="toggleDarkMode">Toggle Dark Mode</Button>

    <TemplatesSection :data="getTemplateSections" />
  </div>
</template>

<script setup lang="ts">
import useStoreApp from "@@/store/app";

// Store
const storeApp = useStoreApp();
const getTemplateSections = computed(
  () => storeApp.getterAppGetSettingLayout("index")?.section ?? []
);

const { toogleDarkMode } = useTheme();

// Methods
function toggleDarkMode() {
  toogleDarkMode();
}
</script>
