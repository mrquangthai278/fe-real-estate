<template>
  <div>
    <label>{{ label || name }}</label>
  </div>

  <template v-if="isArrayControl">
    <div>
      <div
        v-for="(itemControl, itemControlIdx) in arrayFields"
        :key="itemControl.key"
      >
        <template v-if="fields?.length">
          <div class="pl-5">
            <div
              v-for="(subControl, subIndex) in getControlFieldChildren"
              :key="`${subControl.name}-${subIndex}-${itemControl.key}`"
            >
              <FormControl
                :name="`${getCurrentNameField()}[${itemControlIdx}].${
                  subControl.name
                }`"
                :type="subControl.type"
                :rules="subControl.rules"
                :fields="subControl.fields"
                :parentKey="getCurrentNameField()"
                :isArray="subControl.isArray"
              />
            </div>
          </div>
        </template>

        <div class="underline" @click="remove(itemControlIdx)">Remove</div>
      </div>

      <div class="underline" @click="push({})">Add</div>
    </div>
  </template>

  <template v-else>
    <template v-if="fields?.length">
      <div class="pl-5">
        <div
          v-for="(subControl, subIndex) in getControlFieldChildren"
          :key="`${subControl.name}-${subIndex}`"
        >
          <FormControl
            :name="subControl.name"
            :type="subControl.type"
            :rules="subControl.rules"
            :fields="subControl.fields"
            :parentKey="getCurrentNameField()"
            :isArray="subControl.isArray"
          />
        </div>
      </div>
    </template>

    <template v-else-if="getCurrentControlInfo">
      <component
        :is="getCurrentControlInfo.component"
        :name="name"
        :value="value"
        @input="handleChangeControl"
        @change="handleChangeControl"
      />
    </template>

    <p v-if="errorMessage">{{ errorMessage }}</p>
  </template>
</template>

<script setup lang="ts">
import { useField, useFieldArray } from "vee-validate";

import type { FormInputTypeKeys } from "@@/interfaces/common";
import { FormInputType } from "@@/interfaces/common";

const CommonInput = resolveComponent("CommonInput");
const CommonSelect = resolveComponent("CommonSelect");

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
// Normal ... will refactor later
const getListMapFieldInfoByType = computed(() => {
  return {
    [FormInputType.INPUTTEXT]: {
      component: CommonInput,
    },
    [FormInputType.SELECT]: {
      component: CommonSelect,
    },
  } as any;
});

const getCurrentControlInfo = computed(() => {
  if (
    props?.fields?.length ||
    !props.name ||
    !props.type ||
    !getListMapFieldInfoByType.value?.[props.type]
  )
    return undefined;

  return getListMapFieldInfoByType.value[props.type];
});

//Array ... will refactor later
const getControlFieldChildren = computed(() => {
  return props.fields as any;
});

// Methods
// Normal ... will refactor later
const handleChangeControl = (value: any) => {
  setValue(value);
};

//Array ... will refactor later
</script>
