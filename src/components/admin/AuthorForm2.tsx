import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { get } from "http";

type Inputs = {
  name: string;
  avatar: FileList | null;
  thumbnail: FileList | null;
  description: string;
  tags: string;
  author: string;
};

interface AddAuthorFormProps {
  onSubmit?: SubmitHandler<Inputs>;
  author?: Inputs;
  isEditing?: boolean;
}

const AddAuthorForm: React.FC<AddAuthorFormProps> = ({
  onSubmit,
  author = null,
  isEditing = false,
}) => {
  const { register, handleSubmit, setValue, getValues } = useForm<Inputs>({
    defaultValues: author || {
      name: "",
      avatar: null,
      thumbnail: null,
      description: "",
      tags: "",
      author: "",
    },
  });

  const onSubmitForm: SubmitHandler<Inputs> = (data) => {
    if (onSubmit) {
      onSubmit(data);
      console.log("Form data:", data);
    }
  };

  const onDropAvatar = (acceptedFiles: File[]) => {
    const dataTransfer = new DataTransfer();
    acceptedFiles.forEach((file) => {
      dataTransfer.items.add(file);
    });
    setValue("avatar", dataTransfer.files);
    console.log("Avatar files:", getValues("avatar")?.[0]);
  };

  const {
    getRootProps: getAvatarRootProps,
    getInputProps: getAvatarInputProps,
  } = useDropzone({
    onDrop: onDropAvatar,
    accept: {
      "image/*": [],
    },
  });
  const avatarValues = getValues("avatar");
  const onDropThumbnail = (acceptedFiles: File[]) => {
    const dataTransfer = new DataTransfer();
    acceptedFiles.forEach((file) => {
      dataTransfer.items.add(file);
    });
    setValue("thumbnail", dataTransfer.files);
    console.log("Thumbnail files:", dataTransfer.files);
  };

  const {
    getRootProps: getThumbnailRootProps,
    getInputProps: getThumbnailInputProps,
  } = useDropzone({
    onDrop: onDropThumbnail,
    accept: {
      "image/*": [],
    },
  });

  return (
    <div>
      <div className="flex justify-center">
        <Image
          src={
            avatarValues && avatarValues.length > 0
              ? URL.createObjectURL(avatarValues[0])
              : ""
          }
          alt="Avatar"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="max-w-lg mx-auto p-6 bg-white border rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">
          {isEditing ? "Edit Author" : "Add New Author"}
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <Input
            id="name"
            {...register("name", { required: "This field is required" })}
            disabled={isEditing}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="avatar"
            className="block text-sm font-medium text-gray-700"
          >
            Avatar
          </label>
          <div
            {...getAvatarRootProps({
              className:
                "mt-1 border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer hover:border-blue-500",
            })}
          >
            <Input
              onChange={(e) => console.log(e.target.files)}
              {...getAvatarInputProps()}
            />
            <p className="text-gray-500">
              {isEditing && author?.avatar
                ? author.avatar[0].name
                : "Drag 'n' drop an avatar here, or click to select one"}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="thumbnail"
            className="block text-sm font-medium text-gray-700"
          >
            Thumbnail
          </label>
          <div
            {...getThumbnailRootProps({
              className:
                "mt-1 border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer hover:border-blue-500",
            })}
          >
            <Input {...getThumbnailInputProps()} />
            <p className="text-gray-500">
              {isEditing && author?.thumbnail
                ? author.thumbnail[0].name
                : "Drag 'n' drop a thumbnail here, or click to select one"}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description")}
            disabled={isEditing}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700"
          >
            Tags (separate by commas)
          </label>
          <Input
            id="tags"
            {...register("tags")}
            placeholder="e.g. tag1, tag2"
            disabled={isEditing}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <Input
            id="author"
            {...register("author", { required: "This field is required" })}
            disabled={isEditing}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {!isEditing && (
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md"
          >
            Submit
          </Button>
        )}
      </form>
    </div>
  );
};

export default AddAuthorForm;
