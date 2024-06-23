<template>
  <NuxtLayout>
    <template v-if="getTemplateSections?.length">
      <TemplatesSection :data="getTemplateSections" />
    </template>

    <template v-else>
      {{ error }}
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import useStoreApp from "@@/store/app";

// Composables
const error = useError();

const path = window.location.pathname;

// Store
const storeApp = useStoreApp();

const getTemplateSections = computed(
  () => storeApp.getterAppGetSettingLayout(path)?.section ?? []
);
</script>
