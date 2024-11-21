"use client"
import ProductForm from "@/components/admin/SeriesForm";
import { SubmitHandler } from "react-hook-form";

const NewProductPage = () => {
  const onSubmit: SubmitHandler<{
    friendly_id: string;
    name: string;
    rating: string;
    status: string;
    description: string;
    cover_url: string | null;
    thumbnail_url: string | null;
    tags: string[];
    cover_color: string;
    // seriesId: string;
  }> = (data) => {
    console.log("Add Product:", data);
  };

  return (
    <div className="w-full my-4">

      <ProductForm onSubmit={() => onSubmit} />
    </div>
  );
};

export default NewProductPage;
