"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Store = {
  store_id: string;
  name: string;
  address : string;
};

export const columns: ColumnDef<Store>[] = [
  {
    accessorKey: "store_id",
    header: "Store Id",
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
    accessorKey: "address",
    header: ({ column }) => {
      return (
        <button
          // variant="ghost"
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Address
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
];
