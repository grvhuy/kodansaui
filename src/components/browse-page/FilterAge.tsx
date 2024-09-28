"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

interface IProps {
  onChange: (value: number) => void;
}

const age = ["10+", "13+", "16+", "18+"];

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
            <RadioGroup
              onValueChange={(value) => {
                if (value !== "all") {
                  age.forEach((item, index) => {
                    if (item === value) {
                      props.onChange(index);
                      console.log(item);
                    }
                  });
                } else {
                  props.onChange(-1);
                }
              }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="r1">All</Label>
              </div>
              {age.map((value) => (
                <div
                  key={value}
                  className="flex items-center space-x-2">
                  <RadioGroupItem value={value} id={value} />
                  <Label htmlFor="r1">{value}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      )}
    </div>
  );
}
