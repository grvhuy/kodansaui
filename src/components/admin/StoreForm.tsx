"use client";
import { store } from "@/lib/redux/store";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  store_id: string;
  name: string;
  address: string;
};

interface StoreFormProps {
  onSubmit?: SubmitHandler<Inputs>;
  store?: Inputs;
  isEdit?: boolean;
}

const StoreForm: React.FC<StoreFormProps> = ({
  onSubmit,
  store,
  isEdit = false,
}) => {
  const [isEditing, setIsEditing] = React.useState(!!store);

  const { register, handleSubmit, setValue } = useForm<Inputs>({
    defaultValues: store || {
      store_id: "",
      name: "",
      address: "",
    }
    
  });

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
        {isEdit ? "Edit Store" : "Add New Store"}
      </h2>

      <div>
        <label className="block text-sm font-medium">Store ID</label>
        <input
          className="border rounded p-2 w-full"
          {...register("store_id")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Store Name</label>
        <input className="border rounded p-2 w-full" {...register("name")} />
      </div>

      <div>
        <label className="block text-sm font-medium">Address</label>
        <input className="border rounded p-2 w-full" {...register("address")} />
      </div>


      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white rounded px-4 py-2"
      >
        Publish
      </button>
    </form>
  );
};

export default StoreForm;
