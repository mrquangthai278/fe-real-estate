<template>
  <form ref="form" @submit="onSubmit">
    <div class="grid grid-cols-1">
      <div
        v-for="(controlGroup, controlGroupIdx) in controls"
        :key="controlGroupIdx"
      >
        <div class="grid grid-cols-2 gap-2">
          <div v-for="controlItem in controlGroup" :key="controlItem.key">
            <FormControl :name="controlItem.name" :rules="controlItem.rules" />
          </div>
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
  controls?: any[];
};

const props = withDefaults(defineProps<IProps>(), {
  controls: [],
});

// Ref
const form = ref(null);

const { handleSubmit } = useForm({
  validationSchema: getValidationSchemaFromSetting(props.controls),
});

const onSubmit = handleSubmit((values: any) => {
  alert(JSON.stringify(values, null, 2));
});
</script>
