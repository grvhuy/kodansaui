"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Series = {
  friendly_id: string;
  name: string;
  type: string;
  recent_publish_date: string;
};

export const columns: ColumnDef<Series>[] = [
  {
    accessorKey: "friendly_id",
    header: "Friendly Id",
  },
  {
    accessorKey: "name",
    header: ({column }) => {
      return (
        <button
          // variant="ghost"
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({column }) => {
      return (
        <button
          // variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    // cell: ({ row }) => {
    //   const amount = parseFloat(row.getValue("amount"));
    //   const formatted = new Intl.NumberFormat("en-US", {
    //     style: "currency",
    //     currency: "USD",
    //   }).format(amount);

    //   return <div className="text-right font-medium">{formatted}</div>;
    // },
  },
  {
    accessorKey: "recent_publish_date",
    header: ({column }) => {
      return (
        <button
          // variant="ghost"
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Publish Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
];
