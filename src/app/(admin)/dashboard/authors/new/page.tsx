"use client"
import AuthorForm2 from '@/components/admin/AuthorForm2';
import Head from 'next/head';
import { SubmitHandler } from 'react-hook-form';

const AddAuthor = () => {
  const onSubmit: SubmitHandler<{ name: string; email: string; bio?: string }> = (data) => {
    console.log('Add Author:', data);
  };

  return (
    <div>
      <Head>
        <title>Add Author</title>
      </Head>
      <h1>Add New Author</h1>
      {/* <AuthorForm onSubmit={onSubmit} /> */}
      <AuthorForm2 onSubmit={() => onSubmit} />
    </div>
  );
};

export default AddAuthor;