// components/TheCkeditor.client.vue
<template>
  <div>
    <ckeditor
      v-model="currentValue"
      :editor="ClassicEditor"
      :config="editorConfig"
    >
    </ckeditor>
  </div>
</template>

<script setup lang="ts">
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

defineOptions({
  inheritAttrs: false,
});

const ckeditor = defineComponent(CKEditor.component);

// Props
type IProps = {
  value: string;
  placeholder?: string;
};

const props = withDefaults(defineProps<IProps>(), {
  value: "",
  placeholder: "",
});

// Emits
const emit = defineEmits(["change"]);

// State
const currentValue = ref(props.value);

const editorConfig = {
  placeholder: props.placeholder,
};

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
    currentValue.value = newValue;
  }
);
</script>
