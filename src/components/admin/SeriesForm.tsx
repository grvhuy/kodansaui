"use client";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Inputs = {
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
};

interface SeriesFormProps {
  onSubmit?: SubmitHandler<Inputs>;
  series?: Inputs;
  // seriesOptions?: { id: string; name: string }[];
}

const SeriesForm: React.FC<SeriesFormProps> = ({
  onSubmit,
  series = null,
  // seriesOptions = [],
}) => {
  const [isEditing, setIsEditing] = React.useState(!!series);
  const { register, handleSubmit, setValue } = useForm<Inputs>({
    defaultValues: series || {
      friendly_id: "",
      name: "",
      rating: "",
      status: "",
      description: "",
      cover_url: "" || null,
      thumbnail_url: "" || null,
      tags: [],
      cover_color: "",
      // seriesId: "",
    },
  });

  const onSubmitForm: SubmitHandler<Inputs> = (data) => {
    if (onSubmit) {
      // onSubmit(data);
      console.log("Form data:", data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="space-y-6 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold">
        {isEditing ? "Edit Series" : "Add New Series"}
      </h2>

      {series?.cover_url && (
        <Image
          src={series.cover_url}
          alt={series.name}
          width={200}
          height={300}
          className="object-cover rounded-md mb-4"
        />
      )}

      <div>
        <label className="block font-medium">Friendly ID</label>
        <Input
          {...register("friendly_id")}
          placeholder="Friendly ID"
          readOnly={isEditing}
          className="mt-1"
        />
      </div>

      <div>
        <label className="block font-medium">Product Name</label>
        <Input
          {...register("name")}
          placeholder="Product Name"
          required
          className="mt-1"
        />
      </div>

      <div>
        <label className="block font-medium">Rating</label>
        <Input
          {...register("rating")}
          placeholder="Rating"
          required
          className="mt-1"
        />
      </div>

      <div>
        <label className="block font-medium">Status</label>
        <Input
          {...register("status")}
          placeholder="Status"
          required
          className="mt-1"
        />
      </div>

      <div>
        <label className="block font-medium">Description</label>
        <textarea
          {...register("description")}
          placeholder="Description"
          rows={8}
          required
          className="mt-1 resize-none border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block font-medium">Cover URL</label>
        <Input
          {...register("cover_url")}
          placeholder="Cover URL"
          className="mt-1"
        />
      </div>

      <div>
        <label className="block font-medium">Thumbnail URL</label>
        <Input
          {...register("thumbnail_url")}
          placeholder="Thumbnail URL"
          className="mt-1"
        />
      </div>

      <div>
        <label className="block font-medium">Cover Color</label>
        <Input
          {...register("cover_color")}
          placeholder="Cover Color"
          className="mt-1"
        />
      </div>

      <div>
        <label className="block font-medium">Tags:</label>
        <Input
          {...register("tags")}
          placeholder="Tags (comma separated)"
          onChange={(e) => setValue("tags", e.target.value.split(","))}
          className="mt-1"
        />
      </div>

      {/* <div>
        <label className="block font-medium">Select Series:</label>
        <select {...register("seriesId")} required className="mt-1">
          <option value="">Select a series</option>
          {seriesOptions.map((series) => (
            <option key={series.id} value={series.id}>{series.name}</option>
          ))}
        </select>
      </div> */}

      <Button type="submit" className="mt-4">
        {isEditing ? "Update Product" : "Create Product"}
      </Button>
    </form>
  );
};

export default SeriesForm;
