<template>
  <form ref="form" @submit="onSubmit">
    <div class="grid grid-cols-1">
      <div class="grid grid-cols-2 gap-2">
        <div v-for="controlItem in controls" :key="controlItem.key">
          <FormControl
            :name="controlItem.name"
            :type="controlItem.type"
            :rules="controlItem.rules"
            :fields="controlItem.fields"
            :isArray="controlItem.isArray"
          />
        </div>
      </div>
    </div>

    <button>Submit</button>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";

import { getValidationSchemaFromSetting } from "@@/utils/form";

// Props
type IProps = {
  controls?: any;
  setting?: any;
};

const props = withDefaults(defineProps<IProps>(), {
  controls: [],
  setting: {},
});

// Ref
const form = ref(null);

const { handleSubmit } = useForm({
  validationSchema: getValidationSchemaFromSetting(props.controls),
});

// Computed

// Methods
const onSubmit = handleSubmit((values: any) => {
  alert(JSON.stringify(values, null, 2));
});
</script>
