<template>
  <template v-if="isActiveControl">
    <div>
      <label
        >{{ label || name }}
        {{ indexControl !== null ? indexControl + 1 : "" }}</label
      >
    </div>

    <template v-if="getCurrentControlInfo">
      <component
        :is="getCurrentControlInfo.component"
        :name="name"
        :value="value"
        v-bind="getCurrentControlInfo.config || {}"
        @input="handleChangeControl"
        @change="handleChangeControl"
      />

      <!-- <span class="underline" @click="handleResetControlValue">Clear value</span> -->
    </template>

    <p v-if="errorMessage">{{ errorMessage }}</p>

    <template v-if="getCurrentListFields?.length">
      <div class="pl-5 grid grid-col-1 gap-3">
        <div
          v-for="(subControl, subIndex) in getCurrentListFields"
          :key="`${subControl.name}-${subIndex}-${indexControl}`"
          class="border-2 p-2 border-black"
        >
          <FormControlGroup
            :name="subControl.name"
            :label="subControl.label"
            :type="subControl.type"
            :fields="subControl.fields"
            :config="subControl.config"
            :parentKey="getCurrentNameField()"
            :isArray="subControl.isArray"
            :active="subControl.active"
            :formInstance="formInstance"
            @onChangeValue="onChangeValue"
          />
        </div>
      </div>
    </template>
  </template>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

import type { FormInputTypeKeys } from "@@/interfaces/model";
import {
  FormInputType,
  listMapModelFieldTypeDefaultValue,
} from "@@/constants/model";

const FormElementInput = resolveComponent("FormElementInput");
const FormElementSelect = resolveComponent("FormElementSelect");
const FormElementEditor = resolveComponent("FormElementEditor");
const FormElementColorPicker = resolveComponent("FormElementColorPicker");
const FormElementDatePicker = resolveComponent("FormElementDatePicker");
const FormElementRate = resolveComponent("FormElementRate");
const FormElementSlider = resolveComponent("FormElementSlider");
const FormElementSwitch = resolveComponent("FormElementSwitch");
const FormElementTimePicker = resolveComponent("FormElementTimePicker");
const FormElementUploader = resolveComponent("FormElementUploader");

// Props
type IProps = {
  name: string;
  label?: string;
  type?: FormInputTypeKeys | null;
  config?: any;
  fields?: any;
  parentKey?: string;
  isArray?: boolean;
  active?: any;
  formInstance?: any;
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
  active: true,
  indexControl: null,
});

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

const controlField: any = useField(getCurrentNameField());

const { value, errorMessage, setValue } = controlField;

// Computed
const getListMapFieldInfoByType = computed(() => {
  return {
    [FormInputType.INPUTTEXT]: {
      component: FormElementInput,
      config: {},
    },
    [FormInputType.INPUTNUMBER]: {
      component: FormElementInput,
      config: {
        type: "number",
      },
    },
    [FormInputType.INPUTDESCRIPTION]: {
      component: FormElementEditor,
      config: {},
    },
    [FormInputType.RADIOGROUP]: {
      component: FormElementSelect,
      config: {},
    },
    [FormInputType.CHECKBOXGROUP]: {
      component: FormElementSelect,
      config: {},
    },
    [FormInputType.SELECT]: {
      component: FormElementSelect,
      config: {
        api_key: props.config?.api_key,
        options: props.config?.options,
      },
    },
    [FormInputType.SWITCH]: {
      component: FormElementSwitch,
      config: {},
    },
    [FormInputType.SLIDER]: {
      component: FormElementSlider,
      config: {},
    },
    [FormInputType.TIMEPICKER]: {
      component: FormElementTimePicker,
      config: {},
    },
    [FormInputType.DATEPICKER]: {
      component: FormElementDatePicker,
      config: {},
    },
    [FormInputType.UPLOADER]: {
      component: FormElementUploader,
      config: {},
    },
    [FormInputType.RATE]: {
      component: FormElementRate,
      config: {},
    },
    [FormInputType.COLORPICKER]: {
      component: FormElementColorPicker,
      config: {},
    },
  } as any;
});

const getCurrentControlInfo = computed(() => {
  if (
    !props.name ||
    !props.type ||
    !getListMapFieldInfoByType.value?.[props.type]
  )
    return undefined;

  return getListMapFieldInfoByType.value[props.type];
});

const getCurrentListFields = computed(() => {
  return (
    props.fields?.filter((item: any) => {
      if (typeof item.active === "function")
        return item.active(props.formInstance);
      return true;
    }) ?? []
  );
});

const isActiveControl = computed(() => {
  if (typeof props.active === "function")
    return props.active(props.formInstance);
  return props.active;
});

// Methods
const handleChangeControl = (value: any) => {
  setValue(value);
  emit("onChangeValue", { value, field: getCurrentNameField() });
};

const handleResetControlValue = () => {
  setValue(listMapModelFieldTypeDefaultValue[props.type as FormInputTypeKeys]);
};

const onChangeValue = (payload: any) => {
  emit("onChangeValue", payload);
};
</script>
