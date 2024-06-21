<template>
  <FormWrapper
    :setting="getSettingFormSetting"
    :controls="getSettingFormFields"
  />
</template>

<script setup lang="ts">
import useStoreApp from "@@/store/app";

definePageMeta({
  layout: "dashboard",
});

// Store
const storeApp = useStoreApp();
const getSettingFormFields = computed(
  () => storeApp.getterAppGetSettingForm?.fields
);
const getSettingFormSetting = computed(
  () => storeApp.getterAppGetSettingForm?.setting
);
</script>
