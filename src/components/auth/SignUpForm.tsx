// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useSignIn } from "@/hooks/useSignIn";
// import { DialogClose } from "@radix-ui/react-dialog";
// import { Cross2Icon } from "@radix-ui/react-icons";
// import Image from "next/image";
// import { useState } from "react";
// import { MyButton } from "../MyButton";
// import { MyButtonForward } from "../MyButtonFoward";
// import { signUp } from "@/utils/api";

// interface IProps {
//   onClose: () => void;
//   isOpen?: boolean | undefined;
// }

// export function LoginForm(props: IProps) {
//   // const { signIn } = useSignIn();
//   const [message, setMessage] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       // const response = await signIn(email, password);
//       // console.log("Login successful", response);
//       // redirect
//     } catch (error) {
//       console.error("Failed to login", error);
//     }
//   };

//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   return (
//     <Dialog open={props.isOpen}>
//       <DialogTrigger asChild>
//         <MyButton text="SIGN UP" onClick={() => {}} />
//       </DialogTrigger>
//       <DialogClose asChild>
//         {/* <Button variant="outline">Share</Button> */}
//       </DialogClose>
//       <DialogContent
//         onClick={() => {}}
//         className="sm:max-w-[425px] bg-white p-0 border-none"
//       >
//         <DialogHeader>
//           <DialogClose
//             onClick={() => props.onClose()}
//             className="absolute right-4 top-4 rounded-none opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground border text-white cursor-pointer"
//             asChild
//           >
//             <div>
//               <Cross2Icon className="h-8 w-8" />
//               <span className="sr-only">Close</span>
//             </div>
//           </DialogClose>
//           <Image
//             alt="Login"
//             width={200}
//             height={200}
//             src={"/images/loginbanner.jpg"}
//             className="w-full h-full"
//           />

//           <DialogTitle className="text-2xl px-8 py-2">LOGIN</DialogTitle>
//           <DialogDescription className="px-8 pb-0">
//             New Member? Sign Up to access your profile and start shopping
//             Manga.
//           </DialogDescription>
//         </DialogHeader>

//         <form onSubmit={handleSubmit} className="px-8">
//           <div className="flex flex-col">
//             <Label htmlFor="name" className="text-left py-2">
//               Email
//             </Label>
//             <Input
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="col-span-3 mb-6 border-black"
//             />
//           </div>
//           <div className="flex flex-col">
//             <Label htmlFor="name" className="text-left py-2">
//               Password
//             </Label>
//             <Input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="col-span-3 mb-6 border-black"
//             />
//           </div>

//           {message && <p className="text-red-500">{message}</p>}
//           <div className="flex flex-col">
//             <div className="flex justify-between -mx-4">
//               <Button variant="link" onClick={() => {}}>
//                 FORGOT PASSWORD
//               </Button>
//               <Button
//                 variant="link"
//                 onClick={() => {
//                   signUp(email, password).then((res) => {
//                     console.log("Sign up successful", res);
//                   });
//                   setMessage("Sign up successful, please login");
//                 }}
//               >
//                 SIGN UP
//               </Button>
//             </div>
//           </div>
//         </form>
//         <DialogFooter className="px-8 pb-8">
//           <MyButtonForward
//             text="LOGIN"
//             onClick={() => {
//               signIn(email, password).then((res) => {
//                 console.log("Login successful", res);
//                 // redirect
//               });
//               props.onClose();
//             }}
//           />
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
