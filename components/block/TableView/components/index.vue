<template>
  <div class="space-y-4">
    <DataTableToolbar :table="table" />

    <div class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <TableHead v-for="header in headerGroup.headers" :key="header.id">
              <template v-if="getCustomHeaderData(header.column.columnDef.header)">
                <DataTableColumnHeader :column="header.column"
                  :title="getCustomHeaderData(header.column?.columnDef?.header, 'title')" />
              </template>

              <template v-else>
                <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                  :props="header.getContext()" />
              </template>

            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <TableRow v-for="row in table.getRowModel().rows" :key="row.id"
              :data-state="row.getIsSelected() && 'selected'">
              <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                <template v-if="getCustomCellData(cell.column.columnDef.cell)">
                  <template v-if="getCustomCellData(cell.column.columnDef.cell, 'type') === CELL_TYPE.action">
                    <DataTableRowActions :row="row" :menu="getCustomCellData(cell.column.columnDef.cell, 'menu')" />
                  </template>

                  <template v-else-if="getCustomCellData(cell.column.columnDef.cell, 'type') === CELL_TYPE.text">
                    <p>{{ row.getValue(getCustomCellData(cell.column.columnDef.cell, 'field') || cell.column.id) }}</p>
                  </template>
                </template>

                <template v-else>
                  <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </template>
              </TableCell>
            </TableRow>
          </template>

          <TableRow v-else>
            <TableCell :colspan="columns.length" class="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <DataTablePagination :table="table" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  FlexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from "@tanstack/vue-table";

import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/vue-table";

import { valueUpdater } from "@/lib/utils";

import DataTablePagination from "./DataTablePagination.vue";
import DataTableToolbar from "./DataTableToolbar.vue";
import DataTableColumnHeader from "./DataTableColumnHeader.vue";
import DataTableRowActions from "./DataTableRowActions.vue";

import get from 'lodash/get'


import { CELL_TYPE } from './constant'

interface DataTableProps {
  columns: ColumnDef<any, any>[];
  data: any[];
}
const props = defineProps<DataTableProps>();

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});

const table = useVueTable({
  get data() {
    return props.data;
  },
  get columns() {
    return props.columns;
  },
  state: {
    get sorting() {
      return sorting.value;
    },
    get columnFilters() {
      return columnFilters.value;
    },
    get columnVisibility() {
      return columnVisibility.value;
    },
    get rowSelection() {
      return rowSelection.value;
    },
  },
  enableRowSelection: true,
  onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
  onColumnFiltersChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, columnFilters),
  onColumnVisibilityChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, columnVisibility),
  onRowSelectionChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, rowSelection),
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFacetedRowModel: getFacetedRowModel(),
  getFacetedUniqueValues: getFacetedUniqueValues(),
});

const getCustomHeaderData = (headerData: any, key?: string) => {
  if (typeof headerData === 'object') {
    return key ? get(headerData, key, null) : true
  }
  return null
}

const getCustomCellData = (cellData: any, key?: string) => {
  if (typeof cellData === 'object') {
    return key ? get(cellData, key, null) : true
  }

  return null
}

</script>
