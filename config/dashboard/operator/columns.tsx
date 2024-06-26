import type { ColumnDef } from "@tanstack/vue-table";

import { Checkbox } from "@/components/ui/checkbox/index";
import { Badge } from "@/components/ui/badge/index";

const statuses = [
  {
    value: "backlog",
    label: "Backlog",
  },
  {
    value: "todo",
    label: "Todo",
  },
  {
    value: "in progress",
    label: "In Progress",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "canceled",
    label: "Canceled",
  },
];

const priorities = [
  {
    value: "low",
    label: "Low",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "high",
    label: "High",
  },
];

// export const columns = (): any[] => {
export const columns = (): ColumnDef<any>[] => {
  return [
    {
      id: "select",
      header: ({ table }) => {
        return (
          <Checkbox
            class={"translate-y-0.5"}
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onUpdate:checked={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
          />
        );
      },
      cell: ({ row }) => {
        return (
          <Checkbox
            class={"translate-y-0.5"}
            checked={row.getIsSelected()}
            onUpdate:checked={(value) => row.toggleSelected(!!value)}
          />
        );
      },
      enableSorting: false,
      enableHiding: false,
    },

    {
      accessorKey: "priority",
      header: {
        title: "Priority",
      },
      cell: {
        type: "text",
      },
      enableSorting: false,
      enableHiding: false,
      filterConfig: {
        options: priorities,
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },

    {
      accessorKey: "title",
      header: {
        title: "Title",
      },
      cell: ({ row }) => {
        return (
          <div class={"flex space-x-2"}>
            <Badge variant={"outline"}>{"Test"}</Badge>
            <span class={"max-w-[500px] truncate font-medium"}>
              {row.getValue("title")}
            </span>
          </div>
        );
      },
    },

    {
      accessorKey: "status",
      header: {
        title: "Status",
      },
      cell: ({ row }) => {
        return (
          <div class={"flex w-[100px] items-center"}>
            <span>{"Status"}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      filterConfig: {
        options: statuses,
      },
    },

    {
      id: "actions",
      cell: {
        type: "action",
        menu: [
          { id: "edit", label: "edit" },
          { id: "copy", label: "copy" },
        ],
      },
    },
  ];
};
