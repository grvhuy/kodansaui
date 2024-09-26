"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Separator } from "../ui/separator";

interface IProps {
  onChange: (value: string) => void;
}

export function FilterFormat(props: IProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <h1 className="font-semibold">FORMATS</h1>
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
        <RadioGroup defaultValue="comfortable" className="space-y-4 mt-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      )}
      <Separator className="border-[1px] border-black my-4" />
    </div>
  );
}
