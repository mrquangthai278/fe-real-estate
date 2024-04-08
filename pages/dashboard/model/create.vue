<template>
  <div>
    <p>Create model</p>
    <FormWrapper :controls="getSettingFormFields" />
  </div>
</template>

<script setup lang="ts">
import useStoreApp from "@@/store/app";

definePageMeta({
  layout: "dashboard",
});

// Store
const storeApp = useStoreApp();
const getSettingFormFields = computed(() => storeApp.getterAppGetSettingForm);
</script>
