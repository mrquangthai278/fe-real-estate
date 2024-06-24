<template>
  <div class="h-full flex-1 flex-col space-y-8">
    <DataTable :data="tasks" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import tasks from "@/config/dashboard/operator/mock.json";
import { columns } from "@/config/dashboard/operator/columns";

import DataTable from "@/components/block/TableView/components";

definePageMeta({
  layout: "dashboard",
});
</script>
