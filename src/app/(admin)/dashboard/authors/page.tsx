
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
 
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "am@example.com",
    },
    {
      id: "729ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed53f",
      amount: 100,
      status: "pending",
      email: "m1@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m2@example.com",
    },
    {
      id: "728ed55f",
      amount: 100,
      status: "pending",
      email: "m3@example.com",
    },
    // ...
  ]
}

const DashboardAuthorsPage = async () => {
  const data = await getData()
 
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default DashboardAuthorsPage;