<template>
  <div>
    <p>Create model</p>
    <FormWrapper :controls="getSettingFormFields" />
  </div>
</template>

<script setup lang="ts">
import * as Yup from 'yup';

import useStoreApp from "@@/store/app";

definePageMeta({
  layout: "dashboard",
});

// Store
// const storeApp = useStoreApp();
// const getSettingFormFields = computed(
//   () => storeApp.getterAppGetSettingForm?.fields
// );

const getSettingFormFields = computed(
  () => ([
    {
      label: 'Your Email',
      name: 'email',
      as: 'input',
      rules: Yup.string().email().required(),
    }
  ] as any)
); 
</script>