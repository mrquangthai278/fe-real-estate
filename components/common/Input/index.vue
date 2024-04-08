<template>
  <input @input="handleChangeInput" />
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

// Props
type IProps = {
  value: string;
};

const props = withDefaults(defineProps<IProps>(), {
  value: "",
});

// Emits
const emit = defineEmits(["change"]);

// Methods
const handleChangeInput = (e: any) => {
  emit("change", e.target.value);
};
</script>
