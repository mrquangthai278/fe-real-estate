<template>
  <FormWrapper :controls="currentConfig" @onChangeValue="onChangeValue" />
</template>

<script setup lang="ts">
import { defaultFormControls } from "@@/constants/pages/dasboard-setting-model";

definePageMeta({
  layout: "dashboard",
});

const currentConfig = ref(defaultFormControls);

const onChangeValue = (payload: any) => {
  // console.log("payload", payload);
};
</script>
