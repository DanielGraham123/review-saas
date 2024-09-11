"use client";

import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/ui/data-table-header";
import { ArrowUpDown } from "lucide-react";

export const columns = [
  {
    accessorKey: "userName",
    cell: (info) => info.getValue(),
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="User" />;
    },
    filterFn: "includesString",
  },
  {
    accessorKey: "userEmail",
    cell: (info) => info.getValue(),
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Email" />;
    },
    filterFn: "includesString",
  },
  {
    accessorKey: "rating",
    cell: (info) => info.getValue().toString(),
    header: "Rating",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "message",
    cell: (info) => info.getValue(),
    header: "Message",
    filterFn: "includesString",
  },
];
