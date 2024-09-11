"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";

interface IProps {
  onChange: (value: string) => void;
}

export function FilterAge(props: IProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <h1 className="font-semibold">AGE RATING</h1>
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
        <div className="flex items-center space-x-2 mt-4">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                18+
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                18+
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                18+
              </label>
            </div>
          </div>
        </div>
      )}
      <Separator className="border-[1px] border-black my-4" />
    </div>
  );
}
