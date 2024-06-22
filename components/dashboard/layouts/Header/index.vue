<template>
  <header class="sticky top-0 flex w-full z-10">
    <div
      class="flex flex-grow items-center lg:justify-end py-4 px-4 md:px-6 2xl:px-11 justify-between"
    >
      <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
        <button
          class="block p-1.5 shadow-sm lg:hidden z-50"
          @click="
            () => {
              toggleSidebar();
            }
          "
        >
          <IconSolidBars />
        </button>

        <router-link class="block flex-shrink-0 lg:hidden" to="/dashboard">
          <img
            class="h-[20px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTde-ny1D9lfd2JkcxV6hRNdGTnOFah2FnIIA&s"
          />
        </router-link>
      </div>

      <div class="flex items-center gap-3 2xsm:gap-7">
        <ul class="flex items-center gap-2 2xsm:gap-4">
          <p>Bell</p>
        </ul>

        <p>User</p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useSidebarStore } from "@/store/sidebar";

const { toggleSidebar } = useSidebarStore();
</script>
