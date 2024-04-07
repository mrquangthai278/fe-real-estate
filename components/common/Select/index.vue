<template>
    <HelperToogle :activeContent="triggerStatus.active.value">
        <template #trigger="{}">

            <slot name="trigger">
                <div @click="handleClickTrigger">
                    {{ value || 'Placeholder' }}
                </div>
            </slot>
        </template>
        <template #content="{}">
            <div v-outside-click="handleOutsideClickContent" class="bg-white">
                <template v-if="getOptions?.length">
                    <div v-for="(optionItem, optionIndex) in getOptions" :key="optionIndex"
                        @click="handleSelectItem(optionItem)">
                        {{ optionItem }}
                    </div>
                </template>
                <template v-else>
                    <div>No options</div>
                </template>
            </div>
        </template>
    </HelperToogle>
</template>

<script setup lang="ts">
import vOutsideClick from '@@/directives/outside-click.js'

type triggerType = 'hover' | 'click'

// Props
type IProps = {
    options?: any[];
    trigger?: triggerType[];
    value?: any;
    multiple?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
    options: [],
    trigger: ['click'],
    value: null,
    multiple: false
})

// Emits
const emit = defineEmits(['change'])

// Composable
const triggerStatus = useToogle()

// Computed
const isObjectOptions = computed(() => {
    return typeof props.options?.[0] === 'object'
})

const getOptions = computed(
    () => {
        return props.options
    }
);


// Methods
const handleClickTrigger = () => {
    triggerStatus.open()
}

const handleOutsideClickContent = () => {
    triggerStatus.close()
}

const handleSelectItem = (option: any) => {
    if (props.multiple) {
        console.log('abcd')
    } else {
        emit('change', option)
        triggerStatus.close()
    }
}
</script>