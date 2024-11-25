"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Customer = {
  customer_id: string;
  name: string;
  phone : string;
};

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "customer_id",
    header: "Customer Id",
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
    accessorKey: "phone",
    header: ({ column }) => {
      return (
        <button
          // variant="ghost"
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
];
