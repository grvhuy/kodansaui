"use client";

import { Button } from "./ui/button";

interface IProps {
  text: string;
  onClick: () => void;
}

export const MyButton = (props: IProps) => (
  <Button
    onClick={props.onClick}
    variant="ghost"
    className="text-black space-x-2 mr-2 border-2 rounded-none border-black hover:bg-black hover:text-white font-semibold"
  >
    {props.text}
  </Button>
);
