
"use client"
import { useEffect, useState } from "react"
import { Customer, columns } from "./columns"
import { CustomerDataTable } from "./data-table"
import { getSeries } from "@/utils/api"
 
const DashboardSeriesPage = () => {
  
  const storeMock: Customer[] = [
    {
      customer_id: "1",
      name: "Store 1",
      phone: "Address 1",
    },
    {
      customer_id: "2",
      name: "Store 2",
      phone: "Address 2",
    },
  ]
 
  return (
    <div className="container mx-auto py-10">
      <CustomerDataTable columns={columns} data={storeMock} />
    </div>
  )
}

export default DashboardSeriesPage;