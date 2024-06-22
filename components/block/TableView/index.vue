<script setup lang="ts">
import tasks from "./data/tasks.json";
import DataTable from "./components/DataTable.vue";
import UserNav from "./components/UserNav.vue";
import { columns } from "./components/columns";
</script>

<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 md:flex">
    <DataTable :data="tasks" :columns="columns" />
  </div>
</template>
