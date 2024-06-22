<template>
  <component :is="getCurrentComponent" />
</template>

<script setup lang="ts">
// Props
type IProps = {
  templateKey?: string;
};

const props = withDefaults(defineProps<IProps>(), {
  templateKey: "",
});

// Computed
const getCurrentComponent = computed(() => {
  const listMapComponent: any = {
    no1: () => import("@/components/templates/header/no1.vue"),
  };

  if (!props.templateKey || !listMapComponent[props.templateKey])
    return defineAsyncComponent(
      () => import("@/components/templates/header/default.vue")
    );

  return defineAsyncComponent(listMapComponent[props.templateKey]);
});
</script>
