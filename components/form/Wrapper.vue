<template>
  <client-only placeholder="Loading">
    <form class="p-2" ref="form" @submit="onSubmit">
      <div class="grid grid-cols-1">
        <div class="grid grid-cols-1 gap-3">
          <div v-for="controlItem in controls" :key="controlItem.key">
            <FormControlGroup
              :name="controlItem.name"
              :label="controlItem.label"
              :type="controlItem.type"
              :fields="controlItem.fields"
              :config="controlItem.config"
              :isArray="controlItem.isArray"
              @onChangeValue="onChangeValue"
            />
          </div>
        </div>
      </div>

      <button>Submit</button>
    </form>
  </client-only>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";

import { getValidationSchemaFromSetting } from "@@/utils/model";

// Props
type IProps = {
  controls?: any;
  setting?: any;
};

const props = withDefaults(defineProps<IProps>(), {
  controls: [],
  setting: {},
});

// Emits
const emit = defineEmits(["onChangeValue"]);

// Ref
const form = ref(null);

// State
const currentValidationSchema = ref(
  getValidationSchemaFromSetting(props.controls, {})
);

const formInstance: any = useForm({
  validationSchema: currentValidationSchema.value,
});

// Computed

// Methods
const onSubmit = formInstance.handleSubmit((values: any) => {
  alert(JSON.stringify(values, null, 2));
});

const onChangeValue = (payload: any) => {
  const formValues = JSON.parse(JSON.stringify(formInstance.values, null, 2));

  currentValidationSchema.value = getValidationSchemaFromSetting(
    props.controls,
    formValues
  );

  emit("onChangeValue", payload);
};
</script>
