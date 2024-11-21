"use client"
import AuthorForm from "@/components/admin/AuthorForm";
import Head from "next/head";
import { SubmitHandler } from "react-hook-form";

const AuthorsDetailPage = () => {
  console.log("AuthorsDetailPage");
  const authorData = {
    name: "John Doe",
    email: "john@example.com",
    bio: "An author who writes books.",
  };

  const onSubmit: SubmitHandler<{
    name: string;
    email: string;
    bio?: string;
  }> = (data) => {
    console.log("Edit Author:", data);
  };

  return (
    <div>
      <Head>
        <title>Edit Author</title>
      </Head>
      <h1>Edit Author</h1>
      <AuthorForm onSubmit={onSubmit} defaultValues={authorData} />
    </div>
  );
};

export default AuthorsDetailPage;
