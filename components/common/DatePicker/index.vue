<template>
  <VueDatePicker v-model="currentValue"></VueDatePicker>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

defineOptions({
  inheritAttrs: false,
});

// Props
type IProps = {
  value: any;
};

const props = withDefaults(defineProps<IProps>(), {
  value: null,
});

// Emits
const emit = defineEmits(["change"]);

// State
const currentValue = ref(props.value);

// Watchers
watch(
  () => currentValue.value,
  async (newValue: any) => {
    emit("change", newValue);
  }
);

watch(
  () => props.value,
  async (newValue: any) => {
    editorData.value = newValue;
  }
);
</script>
