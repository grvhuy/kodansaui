import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { CircleChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface IProps {
  title: string;
  items: string[];
  onClick: (index: number) => void;
}

const MyDropdownMenu = (props: IProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="text-black border-2 rounded-none border-black hover:bg-black hover:text-white font-semibold flex justify-between"
        >
          {props.title}  &nbsp;<span><CircleChevronDown /></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="shadow-none w-full rounded-none border-2 border-black">
        {props.items.map((item, index) => (
          <DropdownMenuItem
            className="hover:bg-accent "
            key={index}
            onClick={() => props.onClick(index)}
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default MyDropdownMenu;
