"use client";
import { Product } from "@/lib/schema/product.schema";
import React, { useEffect } from "react";
import { SubmitHandler, UseFormRegister, useForm } from "react-hook-form";

type Inputs = {
  friendly_id: string;
  name: string;
  rating: string;
  status: string;
  description: string;
  cover_url: string;
  thumbnail_url: string;
  tags: string[];
  cover_color: string;
  series_id: string;
  properties: {
    ISBN: string;
    print_format: string;
    print_release: string;
    price: number;
    pages: number;
    publish_date: string;
  };
};

interface SeriesFormProps {
  onSubmit?: SubmitHandler<Inputs>;
  product?: Inputs;
  isEdit?: boolean;
  onOpenSeriesModal?: () => void;
  selectedSeries?: { id: string; name: string };
}

const ProductForm: React.FC<SeriesFormProps> = ({
  onSubmit,
  product = null,
  isEdit = false,
  onOpenSeriesModal,
  selectedSeries,
}) => {
  const [isEditing, setIsEditing] = React.useState(!!product);

  const { register, handleSubmit, setValue } = useForm<Inputs>({
    defaultValues: product || {
      friendly_id: "",
      name: "",
      rating: "",
      status: "",
      description: "",
      cover_url: "",
      thumbnail_url: "",
      tags: [],
      cover_color: "",
      series_id: "",
      properties: {
        ISBN: "",
        print_format: "",
        print_release: "",
        price: 0,
        pages: 0,
        publish_date: "",
      },
    },
  });

  useEffect(() => {
    if (selectedSeries) {
      setValue("series_id", selectedSeries.id);
    }
  }, [selectedSeries, setValue]);

  const onSubmitForm: SubmitHandler<Inputs> = (data) => {
    if (onSubmit) {
      onSubmit(data);
      console.log("Form data:", data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="space-y-4 bg-white p-6 rounded shadow-md"
    >
      <h2 className="text-xl font-semibold">
        {isEdit ? "Edit Product" : "Add New Product"}
      </h2>

      <div>
        <label className="block text-sm font-medium">Series</label>
        <div
          className="border rounded p-2 w-full cursor-pointer"
          onClick={onOpenSeriesModal}
        >
          {selectedSeries ? selectedSeries.name : "Select a series"}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Friendly ID</label>
        <input
          className="border rounded p-2 w-full"
          {...register("friendly_id")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Product Name</label>
        <input className="border rounded p-2 w-full" {...register("name")} />
      </div>

      <div>
        <label className="block text-sm font-medium">Rating</label>
        <input className="border rounded p-2 w-full" {...register("rating")} />
      </div>

      <div>
        <label className="block text-sm font-medium">Status</label>
        <input className="border rounded p-2 w-full" {...register("status")} />
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          className="border rounded p-2 w-full"
          {...register("description")}
          rows={4}
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium">Cover URL</label>
        <input
          className="border rounded p-2 w-full"
          {...register("cover_url")}
        />
        <input type="hidden" {...register("series_id")} />
      </div>

      <div>
        <label className="block text-sm font-medium">Thumbnail URL</label>
        <input
          className="border rounded p-2 w-full"
          {...register("thumbnail_url")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">ISBN</label>
        <input
          className="border rounded p-2 w-full"
          {...register("properties.ISBN")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Print Format</label>
        <input
          className="border rounded p-2 w-full"
          {...register("properties.print_format")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Print Release</label>
        <input
          className="border rounded p-2 w-full"
          {...register("properties.print_release")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Price</label>
        <input
          type="number"
          step="0.01"
          className="border rounded p-2 w-full"
          {...register("properties.price")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Pages</label>
        <input
          type="number"
          className="border rounded p-2 w-full"
          {...register("properties.pages")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Publish Date</label>
        <input
          type="date"
          className="border rounded p-2 w-full"
          {...register("properties.publish_date")}
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white rounded px-4 py-2"
      >
        Create Product
      </button>
    </form>
  );
};

export default ProductForm;
