"use client";
import Spinner from "@/components/Spinner";
import { columns } from "@/components/admin/ProductTable/columns";
import { ProductDataTable } from "@/components/admin/ProductTable/data-table";
import StoreForm from "@/components/admin/StoreForm";
import { Button } from "@/components/ui/button";
import { getFullSeriesByFriendlyId, getSeries } from "@/utils/api";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import Modal from "react-modal";

type SelectedProduct = {
  friendly_id: string;
  name: string;
  seq_number: number;
};

const StorePage = () => {
  const [fullSeries, setFullSeries] = useState<any[]>([]);
  const hasInitialized = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState<SelectedProduct>();
  const [series, setSeries] = useState<any[]>([]);
  const [filteredSeriesData, setFilteredSeriesData] = useState<any[]>([]);

  useEffect(() => {
    getSeries().then((data) => {
      data.map((item: any) => {
        setSeries((prev) => [...prev, { id: item.id, name: item.name }]);
        setFilteredSeriesData((prev) => [
          ...prev,
          { id: item.id, name: item.name },
        ]);
      });
    });
  }, []);

  useEffect(() => {
    document.title = "Store";
    getFullSeriesByFriendlyId("bakemonogatari-manga").then((data) => {
      const seriesData = data.map((item: any) => ({
        friendly_id: item.series.friendly_id,
        seq_number: item.seq_number,
        price: item.price,
        author_name: item.series.series_authors[0].authors.name,
        publish_date: item.publish_date,
      }));
      setFullSeries(seriesData); 
    });
  }, []);

  const onSubmit: SubmitHandler<{
    store_id: string;
    name: string;
    address: string;
    // seriesId: string;
  }> = (data) => {
    console.log("Add Product:", data);
  };

  const handleSeriesSelect = (series: any) => {
    setSelectedSeries(series);
    setIsModalOpen(false);
    console.log("Selected product:", series);
  };

  const storeMock = {
    store_id: "1",
    name: "Store 1",
    address: "Address 1",
  };

  return (
    <div className="flex w-full my-4 items-center justify-center">
      {fullSeries ? (
        <div className="w-full">
          <Head>
            {/* <title>{series.name}</title> */}
            Store {storeMock.name}
          </Head>
          <StoreForm store={storeMock} onSubmit={onSubmit} />

          {/* Add product modal */}
          <Button className="mt-8" onClick={() => setIsModalOpen(true)}>Add Product</Button>
          <Modal
            ariaHideApp={false}
            style={{
              content: {
                top: "5%",
                left: "auto",
                right: "20px",
                bottom: "auto",
                marginRight: "auto",
                width: "70%",
                height: "80%",
                padding: "20px",
                borderRadius: "8px",
                overflow: "scroll",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
          >
            <h2 className="text-xl font-semibold mb-4">Select a Series</h2>
            <input
              type="text"
              placeholder="Filter series..."
              className="border rounded p-2 mb-4 w-full"
              onChange={(e) => {
                const filterText = e.target.value.toLowerCase();
                const filtered = series.filter((item) =>
                  item.name.toLowerCase().includes(filterText)
                );
                setFilteredSeriesData(filtered);
              }}
            />
            <ul>
              {filteredSeriesData.length > 0 &&
                filteredSeriesData.map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer p-2 hover:bg-gray-200"
                    onClick={() => handleSeriesSelect(item)}
                  >
                    {item.name}
                  </li>
                ))}
            </ul>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-gray-300 px-4 py-2 rounded"
            >
              Close
            </button>
          </Modal>

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

export default StorePage;
