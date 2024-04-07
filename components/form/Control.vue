<template>
    <div>
        <label>{{ name }}</label>
    </div>

    <!-- <template v-if="getCurrentControlInfo"> -->
    <Field :name="name" :rules="rules" v-slot="{ field, errorMessage, errors }">
        <input v-bind="field" />
        <span>{{ errorMessage }}</span>
        <!-- <component :is="getCurrentControlInfo.component" /> -->
    </Field>
    <!-- </template> -->
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';

import { FormInputType } from '@@/interfaces/common'
import { optionsModelFieldTypeObject } from "@@/constants/model"

const CommonInput = resolveComponent('CommonInput')

// Props
type IProps = {
    name: string;
    type?: FormInputType;
    config?: any
    rules?: any
}

const props = withDefaults(defineProps<IProps>(), {
    name: '',
    type: optionsModelFieldTypeObject.INPUTTEXT,
    config: {},
})

// Computed
const getListMapFieldInfoByType = computed(() => {
    return {
        [optionsModelFieldTypeObject.INPUTTEXT]: {
            component: CommonInput,
        },
    } as any
})

const getCurrentControlInfo = computed(() => {
    if (!props.name || !props.type || !getListMapFieldInfoByType.value?.[props.type]) return undefined

    return getListMapFieldInfoByType.value[props.type]
})
</script>