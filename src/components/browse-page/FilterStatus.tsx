"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Separator } from "../ui/separator";

interface IProps {
  onChange: (value: number) => void;
}

export function FilterStatus(props: IProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mt-4">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex justify-between cursor-pointer"
      >
        <h1 className="font-semibold">STATUS</h1>
        {!isOpen ? (
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <PlusIcon />
          </button>
        ) : (
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <MinusIcon />
          </button>
        )}
      </div>
      {isOpen && (
        <RadioGroup
          onValueChange={(value) => {
            value === "all"
              ? props.onChange(-1)
              : props.onChange(value === "ongoing" ? 0 : 1);
          }}
          className="space-y-4 mt-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" />
            <Label htmlFor="r1">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="ongoing" />
            <Label htmlFor="r1">Ongoing</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="completed" />
            <Label htmlFor="r2">Completed</Label>
          </div>
        </RadioGroup>
      )}
      <Separator className="border-[1px] border-black my-4" />
    </div>
  );
}
