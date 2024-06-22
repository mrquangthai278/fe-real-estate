<script setup lang="ts">
import { useSidebarStore } from "@/store/sidebar";
import { ref } from "vue";

const sidebarStore = useSidebarStore();

const props = defineProps(["items", "page"]);
const items = ref(props.items);

const handleItemClick = (index: number) => {
  const pageName =
    sidebarStore.selected === props.items[index].label
      ? ""
      : props.items[index].label;
  sidebarStore.selected = pageName;
};
</script>

<template>
  <ul class="mt-4 mb-5 flex flex-col gap-2 pl-6">
    <template v-for="(childItem, index) in items" :key="index">
      <li>
        <router-link
          :to="childItem.route"
          class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium hover:text-white"
          :class="{
            '!text-white': childItem.label === sidebarStore.selected,
          }"
          @click="handleItemClick(index)"
        >
          {{ childItem.label }}
        </router-link>
      </li>
    </template>
  </ul>
</template>
