"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "@radix-ui/react-separator";

interface IProps {
  text: string;
  onClick: () => void;
}

export const MyButtonForward = (props: IProps) => (
  <div className="flex justify-center items-center">
    <Button
      type="submit"
      onClick={props.onClick}
      variant="ghost"
      className="group text-black space-x-2 border-2 rounded-none border-black hover:bg-black hover:text-white font-semibold flex justify-between m-0 p-0 pl-4 pr-3 hover:border-white"
    >
      <h3 className="mr-2">{props.text}</h3>

      {/* <span className="border-l-2 h-full border-black"></span> */}
      <Separator
        className="border-[1px] border-black h-full group-hover:border-white"
        orientation="horizontal"
      />
      <ArrowRight
        className="mr-2 transition-transform duration-300 transform group-hover:translate-x-1"
        size={24}
      />
    </Button>
  </div>
);
