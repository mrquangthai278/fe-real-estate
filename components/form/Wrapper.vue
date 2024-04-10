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
              :isArray="controlItem.isArray"
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
