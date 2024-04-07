<template>
    <div ref="triggerElement">
        <slot name="trigger" />
    </div>
    <Teleport to="body" v-if="activeContent">
        <div class="fixed" :style="styleContent">
            <slot name="content" />
        </div>
    </Teleport>
</template>

<script setup lang="ts">
// Props
type IProps = {
    activeContent: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
    activeContent: false,
})

// Ref
const triggerElement = ref(null as any)

// State
const refStyleContent = ref({})
const styleContent = ref({})

// Computed
const getPostitionTriggerElement = () => {
    const postitionTriggerElement = triggerElement.value?.getBoundingClientRect?.()

    if (!postitionTriggerElement) return {}

    return postitionTriggerElement ? postitionTriggerElement : {}
}

// Methods
const generatePosition = (objectPostitionDOM: any) => {
    styleContent.value = {
        top: `${objectPostitionDOM.bottom || 0}px`,
        left: `${objectPostitionDOM.left || 0}px`
    }
}

const triggerMovePosition = () => {
    if (props.activeContent) generatePosition(getPostitionTriggerElement())
}

// Watchers
watch(() => props.activeContent, async (newValue: any) => {
    triggerMovePosition()
})

// Hooks
onMounted(() => {
    document.addEventListener('scroll', triggerMovePosition)
})
</script>