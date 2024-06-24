<template>
  <div class="h-full flex-1 flex-col space-y-8">
    <DataTable :data="tasks" :columns="columnsTest" />
  </div>
</template>

<script setup lang="ts">
import tasks from "@/config/dashboard/operator/mock.json";
import { columns } from "@/config/dashboard/operator/columns.tsx";

import DataTable from "@/components/block/TableView/components/index.vue";

definePageMeta({
  layout: "dashboard",
});

const columnsTest = columns()
</script>
