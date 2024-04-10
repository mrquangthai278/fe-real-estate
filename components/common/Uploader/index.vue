<template>
  <div
    class="flex border-2 border-primary h-10 w-full justify-center items-center cursor-pointer"
    @click="handleClickUploader"
  >
    <input
      ref="inputFile"
      type="file"
      class="hidden"
      @change="onChangeInput"
      multiple
    />
    Upload
  </div>

  <div>{{ value }}</div>
</template>

<script setup lang="ts">
import type { FileItem } from "@@/interfaces/file";
import { transformFileToModel } from "@@/utils/file";

// Props
type IProps = {
  value: FileItem[];
  multiple?: boolean;
};

const props = withDefaults(defineProps<IProps>(), {
  value: [],
  multiple: false,
});

// Emits
const emit = defineEmits(["change"]);

const inputFile = ref();

// Methods
const handleClickUploader = () => {
  inputFile.value?.click?.();
};

const onChangeInput = (e: any) => {
  const files = e.target.files;

  const addedFiles = [];

  for (let i = 0; i < files.length; i++) {
    addedFiles.push(transformFileToModel(files.item(i)));
  }

  const newValue = [...props.value, ...addedFiles];

  emit("change", newValue);

  inputFile.value.value = "";
};
</script>
