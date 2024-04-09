<template>
  <div class="border-2 border-black">
    <input :name="name" class="w-full" @input="handleChangeInput" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

// Props
type IProps = {
  name?: string;
  value: string;
};

const props = withDefaults(defineProps<IProps>(), {
  name: "",
  value: "",
});

// Emits
const emit = defineEmits(["change"]);

// Methods
const handleChangeInput = (e: any) => {
  emit("change", e.target.value);
};
</script>
