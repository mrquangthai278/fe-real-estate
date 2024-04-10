<template>
  <template v-if="fields?.length">
    <div class="pl-5">
      <div
        v-for="(subControl, subIndex) in fields"
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
      v-bind="getCurrentControlInfo.config || {}"
      @input="handleChangeControl"
      @change="handleChangeControl"
    />
  </template>

  <p v-if="errorMessage">{{ errorMessage }}</p>
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

// Composables
const getCurrentNameField = () => {
  const { parentKey, indexControl } = props;

  return parentKey
    ? `${parentKey}.${props.name}${
        indexControl === null ? "" : `${indexControl}`
      }`
    : props.name;
};

const controlField: any = useField(getCurrentNameField());

// Normal ... will refactor later
const { value, errorMessage, setValue } = controlField;

// Computed
// Normal ... will refactor later
const getListMapFieldInfoByType = computed(() => {
  return {
    [FormInputType.INPUTTEXT]: {
      component: CommonInput,
      config: {},
    },
    [FormInputType.INPUTNUMBER]: {
      component: CommonInput,
      config: {
        type: "number",
      },
    },
    [FormInputType.SELECT]: {
      component: CommonSelect,
      config: {},
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

// Methods
// Normal ... will refactor later
const handleChangeControl = (value: any) => {
  setValue(value);
};

//Array ... will refactor later
</script>
