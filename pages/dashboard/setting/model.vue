<template>
  <div>
    <p>Setting model</p>
    <div class="mt-4 flex flex-col gap-2">
      <div
        v-for="fieldItem in formData.fields"
        :key="fieldItem.field"
        class="pb-1 border-b-2 border-separate flex flex-col gap-1"
      >
        <div class="flex gap-2">
          <label>Field name:</label>
          <FormControl :type="getFormInputType.INPUTTEXT" />
        </div>

        <div class="flex gap-2">
          <label>Type:</label>
          <div>
            <CommonSelect
              :options="getOptionsModelFieldType"
              :value="fieldItem.type"
              @change="
                (value) => {
                  fieldItem.type = value;
                }
              "
            />
          </div>
        </div>

        <div class="flex gap-2">
          <label>Rules:</label>
        </div>
      </div>

      <div
        class="flex justify-center items-center mt-2 border-2 border-primary cursor-pointer"
        @click="handleClickAddMore"
      >
        <p>Add more +</p>
      </div>
    </div>

    <div>
      <div
        class="flex justify-center items-center mt-2 border-2 border-primary cursor-pointer"
        @click="handleClickSubmit"
      >
        <p>Submit</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import cloneDeep from "lodash/cloneDeep";

import { initialModelItem, optionsModelFieldType } from "@@/constants/model";
import { FormInputType } from "@@/interfaces/common";

definePageMeta({
  layout: "dashboard",
});

// State
const formData = ref({
  fields: [] as any,
});

// Computed
const getOptionsModelFieldType = computed(() => optionsModelFieldType);

const getFormInputType = computed(() => FormInputType);

// Methods
const handleClickAddMore = () => {
  formData.value.fields.push(cloneDeep(initialModelItem));
};

const handleClickSubmit = () => {
  console.log("Formdata:", formData.value);
};
</script>
