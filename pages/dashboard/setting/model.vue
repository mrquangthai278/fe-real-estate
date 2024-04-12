<template>
  <div>
    <p>Setting model</p>
    <FormWrapper :controls="currentConfig" @onChangeValue="onChangeValue" />
  </div>
</template>

<script setup lang="ts">
import { defaultFormControls } from "@@/constants/pages/dasboard-setting-model";

definePageMeta({
  layout: "dashboard",
});

const currentConfig = ref(defaultFormControls);

const onChangeValue = (payload: any) => {
  // currentConfig.value[0].fields[1].fields.push({
  //   name: "name_2",
  //   label: "Tên 2",
  //   type: "INPUTTEXT",
  //   config: {},
  //   rules: [
  //     {
  //       key: "required",
  //     },
  //   ],
  // });
  console.log("payload", payload);
};
</script>
