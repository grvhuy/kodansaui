"use client";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

const genres = [
  "Action & Adventure",
  "Arts & Entertainment",
  "Biography",
  "Comedy",
  "Crafts",
  "Drama",
  "Fantasy",
  "Fiction & Literature",
  "Food",
  "Games",
  "General Nonfiction",
  "Historical",
  "History & Politics",
  "Horror",
  "Isekai",
  "Language",
  "LGBTQ",
  "Made Into Anime",
  "Martial Arts",
  "Movie/TV Tie-in",
  "Philosophy",
  "Reference",
  "Religion & Spirituality",
  "Romance",
  "School Life",
  "Science-Fiction",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
  "Videogame Tie-in",
  "Yaoi/BL",
  "Yuri",
];

interface IProps {
  onChange: (value: number[]) => void;
}

export function FilterGenre(props: IProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const handleCheckedChange = (value: boolean, index: number) => {
    setSelectedGenres((prev) => {
      if (value) {
        // Add genre to the selected list
        return [...prev, index];
      } else {
        // Remove genre from the selected list
        return prev.filter((item) => item !== index);
      }
    });
  };

  useEffect(() => {
    // Trigger the onChange with the updated selectedGenres
    props.onChange(selectedGenres);
  }, [selectedGenres, props]);

  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <h1 className="font-semibold">GENRE</h1>
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
        <div className="flex items-center space-x-2 mt-4 w-full">
          <div className="flex flex-col space-y-6 w-full max-h-64 overflow-y-auto">
            {genres.map((genre, index) => (
              <div
                key={index}
                className="flex items-center space-x-2"
              >
                <Checkbox
                  value={genre}
                  checked={selectedGenres.includes(index)}
                  onCheckedChange={(value) =>
                    handleCheckedChange(value as boolean, index)
                  }
                  id={`genre-${index}`}
                />
                <label
                  htmlFor={`genre-${index}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {genre}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
      <Separator className="border-[1px] border-black my-4" />
    </div>
  );
}
