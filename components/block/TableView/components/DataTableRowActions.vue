<script setup lang="ts">
import type { Row } from "@tanstack/vue-table";

interface DataTableRowActionsProps {
  row: Row<any>;
  menu: any[]
}
const props = defineProps<DataTableRowActionsProps>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
        <IconSolidEllipsis class="h-4 w-4" />
        <span class="sr-only">Open menu</span>
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end" class="w-[160px]">
      <template v-for="item in menu" :key="item.id">
        <DropdownMenuItem>{{ item.label }}</DropdownMenuItem>
      </template>

      <!-- <DropdownMenuItem>Edit</DropdownMenuItem>

      <DropdownMenuItem>Make a copy</DropdownMenuItem>

      <DropdownMenuItem>Favorite</DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup :value="task.label">
            <DropdownMenuRadioItem v-for="label in labels" :key="label.value" :value="label.value">
              {{ label.label }}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuSub>

      <DropdownMenuSeparator />

      <DropdownMenuItem>
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem> -->
    </DropdownMenuContent>
  </DropdownMenu>
</template>
