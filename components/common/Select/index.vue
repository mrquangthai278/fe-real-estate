<template>
  <HelperToogle :activeContent="triggerStatus.active.value">
    <template #trigger="{}">
      <slot name="trigger">
        <div class="border-2 border-black w-full" @click="handleClickTrigger">
          {{ getLabelOption(value) ? getLabelOption(value) : placeholder }}
        </div>
      </slot>
    </template>
    <template #content="{}">
      <div
        v-outside-click="handleOutsideClickContent"
        class="bg-white w-full border-2 border-black max-h-[250px] overflow-auto"
      >
        <template v-if="getOptions?.length">
          <div
            v-for="(optionItem, optionIndex) in getOptions"
            :key="optionIndex"
            @click="handleSelectItem(optionItem)"
          >
            {{ getLabelOption(optionItem) }}
          </div>
        </template>
        <template v-else>
          <div>No options</div>
        </template>
      </div>
    </template>
  </HelperToogle>
</template>

<script setup lang="ts">
import vOutsideClick from "@@/directives/outside-click.js";

defineOptions({
  inheritAttrs: false,
});

type triggerType = "hover" | "click";

// Props
type IProps = {
  options?: any[];
  trigger?: triggerType[];
  value?: any;
  multiple?: boolean;
  valueKey?: string;
  labelKey?: string;
  placeholder?: string;
};

const props = withDefaults(defineProps<IProps>(), {
  options: [],
  trigger: ["click"],
  value: null,
  multiple: false,
  valueKey: "value",
  labelKey: "label",
  placeholder: "Select option",
});

// Emits
const emit = defineEmits(["change"]);

// Composable
const triggerStatus = useToogle();

// Computed
const isObjectOptions = computed(() => {
  return typeof props.options?.[0] === "object";
});

const getOptions = computed(() => {
  return props.options;
});

// Methods
const handleClickTrigger = () => {
  triggerStatus.open();
};

const handleOutsideClickContent = () => {
  triggerStatus.close();
};

const handleSelectItem = (option: any) => {
  if (props.multiple) {
    console.log("multiple");
  } else {
    emit("change", option);
    triggerStatus.close();
  }
};

const getLabelOption = (option: any) => {
  return isObjectOptions ? option?.[props.labelKey] ?? option : option;
};
</script>