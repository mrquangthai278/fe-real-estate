<template>
  <div>
    <label>{{ name }}</label>
  </div>
  <template v-if="getCurrentControlInfo">
    <component :is="getCurrentControlInfo.component" :name="name" :value="value" @input="handleChangeControl"
      @change="handleChangeControl" />
  </template>

  <p v-if="errorMessage">{{ errorMessage }}</p>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

import type { FormInputTypeKeys } from "@@/interfaces/common";
import { FormInputType } from "@@/interfaces/common";

const CommonInput = resolveComponent("CommonInput");

// Props
type IProps = {
  name: string;
  type?: FormInputTypeKeys | null;
  config?: any;
  rules?: any;
};

const props = withDefaults(defineProps<IProps>(), {
  name: "",
  type: null,
  config: {},
  rule: [],
});

// Composables
const controlField: any = useField(() => props.name);
const { value, errorMessage, setValue } = controlField;

// Computed
const getListMapFieldInfoByType = computed(() => {
  return {
    [FormInputType.INPUTTEXT]: {
      component: CommonInput,
    },
  } as any;
});

const getCurrentControlInfo = computed(() => {
  if (
    !props.name ||
    !props.type ||
    !getListMapFieldInfoByType.value?.[props.type]
  )
    return undefined;

  return getListMapFieldInfoByType.value[props.type];
});

// Methods
const handleChangeControl = (value: any) => {
  setValue(value);
};
</script>
