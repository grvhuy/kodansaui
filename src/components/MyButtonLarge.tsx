"use client";

import { Button } from "./ui/button";

interface IProps {
  text: string;
  onClick: () => void;
}

export const MyButtonLarge = (props: IProps) => (
  <Button
    variant="ghost"
    className="text-black space-x-2 border-2 rounded-none border-black hover:bg-black hover:text-white font-semibold text-xl"
  >
    {props.text}
  </Button>
);
