<template>
  <template v-if="isArrayControl">
    <div class="grid grid-cols-1 gap-2" v-if="arrayFields?.length">
      <div
        v-for="(itemControl, itemControlIdx) in arrayFields"
        :key="itemControl.key"
      >
        <FormControlItem
          :name="name"
          :label="label"
          :type="type"
          :fields="fields"
          :config="config"
          :parentKey="parentKey"
          :isArray="isArray"
          :indexControl="itemControlIdx"
          @onChangeValue="onChangeValue"
        />

        <div
          class="underline"
          @click="handleClickRemoveItemControl(itemControlIdx)"
        >
          Remove
        </div>
      </div>
    </div>

    <template v-else>
      <div>
        <label>{{ label || name }}</label>
      </div>
    </template>

    <div class="underline" @click="handleClickPushItemControl">Add</div>
  </template>

  <template v-else>
    <FormControlItem
      :name="name"
      :label="label"
      :type="type"
      :fields="fields"
      :config="config"
      :parentKey="parentKey"
      :isArray="isArray"
      @onChangeValue="onChangeValue"
    />
  </template>
</template>

<script setup lang="ts">
import { useField, useFieldArray } from "vee-validate";

import type { FormInputTypeKeys } from "@@/interfaces/model";
import { listMapModelFieldTypeDefaultValue } from "@@/constants/model";

// Props
type IProps = {
  name: string;
  label?: string;
  type?: FormInputTypeKeys | null;
  config?: any;
  fields?: any;
  parentKey?: string;
  isArray?: boolean;
  indexControl?: number | null;
};

const props = withDefaults(defineProps<IProps>(), {
  name: "",
  label: "",
  type: null,
  config: {},
  fields: [],
  parentKey: "",
  isArray: false,
  indexControl: null,
});

const isArrayControl = props.isArray;

// Emits
const emit = defineEmits(["onChangeValue"]);

// Composables
const getCurrentNameField = () => {
  const { parentKey, indexControl } = props;

  return parentKey || indexControl !== null
    ? `${parentKey ? `${parentKey}.` : ""}${props.name}${
        indexControl === null ? "" : `[${indexControl}]`
      }`
    : props.name;
};

console.log("getCurrentNameField()", getCurrentNameField());

const controlField: any = isArrayControl
  ? useFieldArray(getCurrentNameField())
  : useField(getCurrentNameField());

// Normal ... will refactor later
const { value, errorMessage, setValue } = controlField;

// Array ... will refactor later
const { remove, push } = controlField;
const arrayFields = controlField.fields;

// Computed

// Methods
const handleClickRemoveItemControl = (index: number) => {
  remove(index);
};

const handleClickPushItemControl = (item: any) => {
  if (props?.fields?.length) {
    push({});
  } else if (props.type) {
    push(listMapModelFieldTypeDefaultValue[props.type as FormInputTypeKeys]);
  }
};

const onChangeValue = (payload: any) => {
  emit("onChangeValue", payload);
};
</script>
