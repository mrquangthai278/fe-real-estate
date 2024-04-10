<template>
  <div class="border-2 border-black">
    <input
      :name="name"
      :type="type"
      :value="value"
      class="w-full border-none outline-none"
      @input="handleChangeInput"
    />
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
  type?: string;
};

const props = withDefaults(defineProps<IProps>(), {
  name: "",
  value: "",
  type: "text",
});

// Emits
const emit = defineEmits(["change"]);

// Methods
const handleChangeInput = (e: any) => {
  emit("change", e.target.value);
};
</script>
