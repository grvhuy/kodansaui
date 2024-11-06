"use client"
import AuthorForm from '@/components/admin/AuthorForm';
import Head from 'next/head';
import { SubmitHandler } from 'react-hook-form';

const AddAuthor = () => {
  const onSubmit: SubmitHandler<{ name: string; email: string; bio?: string }> = (data) => {
    console.log('Add Author:', data);
    // Thực hiện gọi API để thêm tác giả
  };

  return (
    <div>
      <Head>
        <title>Add Author</title>
      </Head>
      <h1>Add New Author</h1>
      <AuthorForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddAuthor;