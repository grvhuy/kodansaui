"use client"
import StoreForm from "@/components/admin/StoreForm";
import { SubmitHandler } from "react-hook-form";

const DashboardAddStorePage = () => {

  const onSubmit: SubmitHandler<{
    store_id: string;
    name: string;
    address: string;
    // seriesId: string;
  }> = (data) => {
    console.log("Add Product:", data);
  };

  return (
    <div>
      <h1>Add Store</h1>
      <StoreForm onSubmit={onSubmit} />
    </div>
  );
}

export default DashboardAddStorePage;