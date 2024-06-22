<template>
  <aside
    class="absolute left-0 top-0 z-50 flex h-screen w-[18.125rem] flex-col overflow-y-hidden duration-300 ease-linear lg:static lg:translate-x-0"
    :class="{
      'translate-x-0': sidebarStore.isSidebarOpen,
      '-translate-x-full': !sidebarStore.isSidebarOpen,
    }"
    ref="target"
  >
    <div class="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
      <router-link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTde-ny1D9lfd2JkcxV6hRNdGTnOFah2FnIIA&s"
        />
      </router-link>

      <button
        class="block lg:hidden"
        @click="sidebarStore.isSidebarOpen = false"
      >
        <IconSolidArrowLeft />
      </button>
    </div>

    <div class="no-scrollbar flex flex-col overflow-y-auto">
      <nav class="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
        <template v-for="menuGroup in menuGroups" :key="menuGroup.name">
          <div>
            <h3 class="mb-4 ml-4">
              {{ menuGroup.name }}
            </h3>

            <ul class="mb-6 flex flex-col gap-1.5">
              <SidebarItem
                v-for="(menuItem, index) in menuGroup.menuItems"
                :item="menuItem"
                :key="index"
                :index="index"
              />
            </ul>
          </div>
        </template>
      </nav>
      <!-- Sidebar Menu -->
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useSidebarStore } from "@/store/sidebar";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import SidebarItem from "./SidebarItem.vue";

const target = ref(null);

const sidebarStore = useSidebarStore();

onClickOutside(target, () => {
  sidebarStore.isSidebarOpen = false;
});

const menuGroups = ref([
  {
    name: "CONFIG",
    menuItems: [
      {
        icon: "IconSolidChevronUp",
        label: "Application",
        route: "/dashboard",
      },
      {
        icon: "IconSolidChevronUp",
        label: "Model",
        route: "/dashboard/setting/model",
      },
    ],
  },
  {
    name: "DATA",
    menuItems: [
      {
        icon: "IconSolidChevronUp",
        label: "Model",
        route: "#",
        children: [{ label: "Add", route: "/dashboard/model/create" }],
      },
    ],
  },
]);
</script>
