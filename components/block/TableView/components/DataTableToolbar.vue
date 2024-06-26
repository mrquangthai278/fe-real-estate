<script setup lang="ts">
import type { Table } from "@tanstack/vue-table";
import get from 'lodash/get'

import DataTableFacetedFilter from "./DataTableFacetedFilter.vue";
import DataTableViewOptions from "./DataTableViewOptions.vue";

interface DataTableToolbarProps {
  table: Table<any>;
}

const props = defineProps<DataTableToolbarProps>();

const isFiltered = computed(
  () => props.table.getState().columnFilters.length > 0
);

const getListFacetedFiltrItem = computed(() => {
  return props.table.getAllColumns().filter(item => {
    return get(item.columnDef, 'filterConfig') && props.table.getColumn(item.id as string)
  }
  )
})


</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">
      <Input placeholder="Filter tasks..." :model-value="(table.getColumn('title')?.getFilterValue() as string) ?? ''"
        class="h-8 w-[150px] lg:w-[250px]" @input="table.getColumn('title')?.setFilterValue($event.target.value)" />

      <DataTableFacetedFilter v-for="item in getListFacetedFiltrItem" :key="item.id" :column="table.getColumn(item.id)"
        :title="get(item.columnDef, 'header.title') || item.id"
        :options="get(item.columnDef, 'filterConfig.options', [])" />

      <Button v-if="isFiltered" variant="ghost" class="h-8 px-2 lg:px-3" @click="table.resetColumnFilters()">
        Reset
        <IconSolidCross class="ml-2 h-4 w-4" />
      </Button>
    </div>
    <DataTableViewOptions :table="table" />
  </div>
</template>
