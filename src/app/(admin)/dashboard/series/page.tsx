
"use client"
import { useEffect, useState } from "react"
import { Series, columns } from "./columns"
import { SeriesDataTable } from "./data-table"
import { getSeries } from "@/utils/api"
 
const DashboardSeriesPage = () => {
  
  const [series, setSeries] = useState<Series[]>([])
  useEffect(() => {
    getSeries().then((data) => {
      console.log(data)
      setSeries(data)
    })
  }, [])
 
  return (
    <div className="container mx-auto py-10">
      <SeriesDataTable columns={columns} data={series} />
    </div>
  )
}

export default DashboardSeriesPage;