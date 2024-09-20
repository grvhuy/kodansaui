"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MyButton } from "../MyButton";
import { MyButtonForward } from "../MyButtonFoward";
import Image from "next/image";
import { useState } from "react";
import { useSignIn } from "@/hooks/useSignIn";

export function LoginForm() {
  const { signIn } = useSignIn();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signIn(email, password);
      console.log("Login successful", response);
      // Điều hướng người dùng tới trang khác sau khi đăng nhập thành công
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <MyButton text="LOGIN" onClick={() => {}} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white p-0 border-none">
        <DialogHeader>
          <img
            alt="Login"
            width={100}
            height={100}
            src={"/images/loginbanner.jpg"}
            className="w-full"
          />
          <DialogTitle className="text-2xl px-8 py-2">LOGIN</DialogTitle>
          <DialogDescription className="px-8 pb-0">
            Login to your account to access your profile and start shopping
            Manga.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="px-8">
          <div className="flex flex-col">
            <Label htmlFor="name" className="text-left py-2">
              Email
            </Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              defaultValue=""
              className="col-span-3 mb-6 border-black"
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="name" className="text-left py-2">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              defaultValue=""
              className="col-span-3 mb-6 border-black"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between -mx-4">
              <Button variant="link" onClick={() => {}}>
                FORGOT PASSWORD
              </Button>
              <Button variant="link" onClick={() => {signIn(email, password);}}>
                SIGN UP
              </Button>
            </div>
          </div>
        </form>
        <DialogFooter className="px-8 pb-8">
          <MyButtonForward
            text="LOGIN"
            onClick={() => {
              signIn(email, password);
            }}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
