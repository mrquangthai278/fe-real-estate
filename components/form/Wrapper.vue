<template>
    <VeeForm ref="form" v-slot="{ handleSubmit }" as="div">
        <form @submit="handleSubmit($event, onSubmit)">
            <div class="grid grid-cols-2 gap-2">
                <div v-for="controlItem in controls" :key="controlItem.key">
                    <!-- <VeeFormControl :name="controlItem.key" :type="controlItem.type" :config="controlItem.config" /> -->
                    <FormControl :name="controlItem.name" :rules="controlItem.rules" />
                </div>
            </div>

            <button>Submit</button>
        </form>
    </VeeForm>
</template>

<script setup lang="ts">
import { Form as VeeForm } from 'vee-validate';

// Props
type IProps = {
    controls?: any[];
}

const props = withDefaults(defineProps<IProps>(), {
    controls: [],
})

// Ref
const form = ref(null)

// Methods
const onSubmit = () => {
    console.log('Submitting :(', form.value);
}
</script>