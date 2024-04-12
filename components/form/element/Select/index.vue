<template>
  <CommonSelect v-bind="getProps">
    <template v-for="slot in Object.keys($slots)">
      <slot :name="slot"></slot>
    </template>
  </CommonSelect>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";

import { getListOptions } from "@@/json/api";

const attrs = useAttrs();

// Props
type IProps = {
  api_key?: string;
  options?: any[];
};

const props = withDefaults(defineProps<IProps>(), {
  api_key: "",
  options: [],
});

// State
const listOptions = ref([] as any[]);

// Computed
const getProps = computed(() => {
  return {
    ...attrs,
    options: props.options?.length ? props.options : listOptions.value,
  };
});

// Methods
const initOptionsApi = async () => {
  if (props.api_key) {
    const response = await getListOptions(props.api_key);

    listOptions.value = response?.data?.length ? response.data : [];
  }
};

onBeforeMount(() => {
  initOptionsApi();
});
</script>