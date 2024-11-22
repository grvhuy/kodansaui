
"use client"
import { useEffect, useState } from "react"
import { Store, columns } from "./columns"
import { StoreDataTable } from "./data-table"
import { getSeries } from "@/utils/api"
 
const DashboardSeriesPage = () => {
  
  const storeMock: Store[] = [
    {
      store_id: "1",
      name: "Store 1",
      address: "Address 1",
    },
    {
      store_id: "2",
      name: "Store 2",
      address: "Address 2",
    },
  ]
 
  return (
    <div className="container mx-auto py-10">
      <StoreDataTable columns={columns} data={storeMock} />
    </div>
  )
}

export default DashboardSeriesPage;