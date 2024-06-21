<template>
  <div class="h-screen">
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
</script>