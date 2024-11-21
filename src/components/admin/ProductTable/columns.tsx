"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Product = {
  friendly_id: string;
  seq_number: number;
  price: number;
  author_name: string;
  publish_date: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "friendly_id",
    header: "Friendly Id",
  },
  {
    accessorKey: "seq_number",
    header: ({column }) => {
      return (
        <button
          // variant="ghost"
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sequence
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "author_name",
    header: ({column }) => {
      return (
        <button
          // variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Author
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
    accessorKey: "publish_date",
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
  {
    accessorKey: "price",
    header: ({column }) => {
      return (
        <button
          // variant="ghost"
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
];
