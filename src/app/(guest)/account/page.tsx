"use client"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const AccountPage = () => {
  return (
    <div className="min-h-screen mt-40 flex flex-col mx-8 mb-64">
      <h1 className="text-6xl font-extrabold">Account</h1>
      <Separator className="border-[1px] mt-4 border-black" />
      <div className="flex space-x-8">
        <div className="w-1/2 border-2 border-black p-2 mt-8">
          <h3 className="font-semibold">Email Address</h3>
          <h3>email@gmail.com</h3>
        </div>
        <div className="flex justify-between items-center w-1/2 border-2 border-black p-2 mt-8">
          <div>
            <h3 className="font-semibold">Password</h3>
            <h3>email@gmail.com</h3>
          </div>
          <Button variant="link" className="">Change</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
