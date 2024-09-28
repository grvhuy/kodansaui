"use client"

import Image from "next/image"
import Link from "next/link"

export const SeriesWheelCard = () => {
  return (
    <div className="flex flex-col">
      <Link href="#" className="my-2 relative group">
        <Image
          src="https://pqxhavcshlsgvyjmkhkv.supabase.co/storage/v1/object/public/Cover%20Images/page-0001.jpg?t=2024-09-08T10%3A03%3A15.657Z"
          alt="Example Image"
          width={300}
          height={300}
          className={`aspect-[2/3] object-cover hover:shadow-lg`}
        />
      </Link>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-lg font-semibold line-clamp-2">Series Name</p>
          </div>
        </div>
      </div>
    </div>
  )
}