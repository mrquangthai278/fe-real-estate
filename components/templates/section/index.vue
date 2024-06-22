<template>
  <NuxtErrorBoundary>
    <component
      v-for="item in data"
      :key="item.key"
      :is="getItemComponent(item)"
    />
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
interface TemplateSectionItem {
  key: string;
}

type IProps = {
  data: TemplateSectionItem[];
};

// Props
const props = withDefaults(defineProps<IProps>(), {
  data: [],
});

// Methods
const getItemComponent = (item: TemplateSectionItem) => {
  const listMapComponent: any = {
    edutics1: () => import("@/components/templates/section/edutics1.vue"),
  };

  if (!item.key || !listMapComponent[item.key]) return null;

  return defineAsyncComponent(listMapComponent[item.key]);
};
</script>
