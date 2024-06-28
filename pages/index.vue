<template>
  <div class="h-screen flex gap-4">
    <Button @click="toggleDarkMode">Toggle Dark Mode</Button>

    <Button @click="handleSubmit">Call API</Button>


    <NuxtLink to="/dashboard">
      <Button>Dashboard</Button>
    </NuxtLink>

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

// Composables
const $api: any = useNuxtApp().$api;

const { toogleDarkMode } = useTheme();

// Methods
function toggleDarkMode() {
  toogleDarkMode();
}

async function handleSubmit() {
  try {
    const response = await $api.auth.create({ name: "Testing" });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
</script>
