<template>
  <div>
    <TemplatesHeader :templateKey="getTemplateHeaderKey" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import useStoreApp from "@@/store/app";

// Store
const storeApp = useStoreApp();
const getTemplateHeaderKey = computed(
  () => storeApp.getterAppGetSettingLayout("header")?.key
);
</script>
