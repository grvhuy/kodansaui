"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Inputs = {
  name: string;
  email: string;
  bio?: string;
};

type AuthorFormProps = {
  onSubmit: SubmitHandler<Inputs>; 
  defaultValues?: Inputs; 
};

export default function AuthorForm({ onSubmit, defaultValues }: AuthorFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div>
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email is not valid",
            },
          })}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="bio">Bio</label>
        <Input
          id="bio"
          {...register("bio")}
        />
      </div>

      <Button className="mt-2" type="submit">Submit</Button>
    </form>
  );
}