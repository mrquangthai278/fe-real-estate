<script setup lang="ts">
import tasks from "./data/tasks.json";
import DataTable from "./components/DataTable.vue";
import { columns } from "./components/columns";
</script>

<template>
  <div class="h-full flex-1 flex-col space-y-8">
    <DataTable :data="tasks" :columns="columns" />
  </div>
</template>
