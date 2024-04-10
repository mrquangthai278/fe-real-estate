<template>
  <div>
    <label
      >{{ label || name }}
      {{ indexControl !== null ? indexControl + 1 : "" }}</label
    >
  </div>

  <template v-if="fields?.length">
    <div class="pl-5 grid grid-col-1 gap-3">
      <div
        v-for="(subControl, subIndex) in fields"
        :key="`${subControl.name}-${subIndex}`"
        class="border-2 p-2 border-black"
      >
        <FormControlGroup
          :name="subControl.name"
          :label="subControl.label"
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
import { useField } from "vee-validate";

import type { FormInputTypeKeys } from "@@/interfaces/model";
import { FormInputType } from "@@/constants/model";

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
        indexControl === null ? "" : `[${indexControl}]`
      }`
    : props.name;
};

const controlField: any = useField(getCurrentNameField());

const { value, errorMessage, setValue } = controlField;

// Computed
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
const handleChangeControl = (value: any) => {
  setValue(value);
};
</script>
