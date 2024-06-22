<script setup lang="ts">
import { useSidebarStore } from "@/stores/sidebar";

const { toggleSidebar } = useSidebarStore();
const sidebarStore = useSidebarStore();
</script>

<template>
  <header class="sticky top-0 flex w-full z-10">
    <div
      class="flex flex-grow items-center lg:justify-end py-4 px-4 md:px-6 2xl:px-11 justify-between"
    >
      <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
        <!-- Hamburger Toggle BTN -->
        <button
          class="block rounded-sm border border-stroke p-1.5 shadow-sm lg:hidden z-50"
          @click="
            () => {
              toggleSidebar();
            }
          "
        >
          Toogle
        </button>

        <!-- Hamburger Toggle BTN -->
        <router-link class="block flex-shrink-0 lg:hidden" to="/">
          <p>ABCD</p>
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
