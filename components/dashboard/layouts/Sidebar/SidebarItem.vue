<script setup lang="ts">
import { useSidebarStore } from "@/store/sidebar";
import { useRoute } from "vue-router";
import SidebarDropdown from "./SidebarDropdown.vue";

const sidebarStore = useSidebarStore();

const props = defineProps(["item", "index"]);
const currentPage = useRoute().name;

interface SidebarItem {
  label: string;
}

const handleItemClick = () => {
  const pageName =
    sidebarStore.page === props.item.label ? "" : props.item.label;
  sidebarStore.page = pageName;

  if (props.item.children) {
    return props.item.children.some(
      (child: SidebarItem) => sidebarStore.selected === child.label
    );
  }
};
</script>

<template>
  <li>
    <router-link
      class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4"
      :class="{
        'text-foreground': sidebarStore.page === item.label,
      }"
      :to="item.route"
      @click.prevent="handleItemClick"
    >
      <IconSolidBars />

      {{ item.label }}

      <IconSolidChevronDown
        v-if="item.children"
        class="absolute right-4 top-1/2 -translate-y-1/2"
        :class="{ 'rotate-180': sidebarStore.page === item.label }"
      />
    </router-link>

    <div
      class="translate transform overflow-hidden"
      v-show="sidebarStore.page === item.label"
    >
      <SidebarDropdown
        v-if="item.children"
        :items="item.children"
        :currentPage="currentPage"
        :page="item.label"
      />
    </div>
  </li>
</template>
