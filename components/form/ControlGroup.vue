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
          :parentKey="parentKey"
          :isArray="isArray"
          :indexControl="itemControlIdx"
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
      :parentKey="parentKey"
      :isArray="isArray"
    />
  </template>
</template>

<script setup lang="ts">
import { useField, useFieldArray } from "vee-validate";

import type { FormInputTypeKeys } from "@@/interfaces/common";
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
};

const props = withDefaults(defineProps<IProps>(), {
  name: "",
  label: "",
  type: null,
  config: {},
  fields: [],
  parentKey: "",
  isArray: false,
});

const isArrayControl = props.isArray;

// Composables
const getCurrentNameField = () => {
  const { parentKey } = props;

  return parentKey ? `${parentKey}.${props.name}` : props.name;
};

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
</script>
