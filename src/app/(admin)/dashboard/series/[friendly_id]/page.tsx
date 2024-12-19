"use client";
import Spinner from "@/components/Spinner";
import ProductForm from "@/components/admin/SeriesForm";
import { columns } from "@/components/admin/ProductTable/columns";
import { ProductDataTable } from "@/components/admin/ProductTable/data-table";
import { checkVolumeAvailability, getFullSeriesByFriendlyId, getSeriesByFriendlyUrl } from "@/utils/api";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";

const NewProductPage = () => {
  const friendly_id = usePathname().split("/").pop();
  const [series, setSeries] = useState<any>(null);
  const [fullSeries, setFullSeries] = useState<any[]>([]);
  const [seriesAvailable, setSeriesAvailable] = useState<any[]>([]);
  const hasInitialized = useRef(false);

  useEffect(() => {
    document.title = "Detail Series";
  
    if (friendly_id) {
      if (!hasInitialized.current) {
        hasInitialized.current = true;
  
        getSeriesByFriendlyUrl(friendly_id).then((data) => {
          setSeries(data);
        });
  
        getFullSeriesByFriendlyId(friendly_id).then((data) => {
          const seriesData = data.map((item: any) => ({
            friendly_id: item.series.friendly_id,
            seq_number: item.seq_number,
            price: item.price,
            author_name: item.series.series_authors[0].authors.name,
            publish_date: item.publish_date,
          }));
          setFullSeries(seriesData); // Set full data at once
        });

      }
    }
  }, [friendly_id]);

  const onSubmit: SubmitHandler<{
    friendly_id: string;
    name: string;
    rating: string;
    status: string;
    description: string;
    cover_url: string | null;
    thumbnail_url: string | null;
    tags: string[];
    cover_color: string;
    // seriesId: string;
  }> = (data) => {
    console.log("Add Product:", data);
  };

  return (
    <div className="flex w-full my-4 items-center justify-center">
      {series ? (
        <div className="w-full">
          <Head>
            <title>{series.name}</title>
          </Head>
          <ProductForm series={series[0]} onSubmit={onSubmit} />
          {fullSeries.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mt-8">Products</h2>
              <ProductDataTable columns={columns} data={fullSeries} />
            </>
          )}
          
        </div>
      ) : (
        <div className="flex">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default NewProductPage;
