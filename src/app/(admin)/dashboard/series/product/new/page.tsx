"use client";
import ProductForm from "@/components/admin/ProductForm"; // Your ProductForm component
import { getSeries } from "@/utils/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import Modal from "react-modal"; // Ensure to install and configure Modal


type SelectedSeried = {
  id: string;
  name: string;
}

const NewProductPage = () => {
  const [selectedSeries, setSelectedSeries] = useState<SelectedSeried>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredSeriesData, setFilteredSeriesData] = useState<any[]>([]); 
  const [series, setSeries] = useState<any[]>([])

  useEffect(() => {
    getSeries().then((data) => {
      console.log(data)
      data.map((item: any) => {
        setSeries((prev) => [...prev, { id: item.id, name: item.name }]);
        setFilteredSeriesData((prev) => [...prev, { id: item.id, name: item.name }]);
      });
    })
  }, [])
  
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Add Product:", data);
  };

  const handleSeriesSelect = (series: any) => {
    setSelectedSeries(series);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full mx-auto p-10">
      {
        <Link
          className="mb-4 font-bold hover:underline text-blue-500"
          href={`/admin/dashboard/series/`}
        >
          <span className="text-blue-500">Go to Series</span>
        </Link>
      }
      <ProductForm
        selectedSeries={selectedSeries}
        onOpenSeriesModal={() => setIsModalOpen(true)}
        // isEdit={false} 
        onSubmit={() => onSubmit}
      />

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
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Darker overlay for better visibility
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
          {filteredSeriesData.length > 0 && filteredSeriesData.map((item,index) => (
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
          onClick={() => setIsModalOpen(false)}
          className="mt-4 bg-gray-300 px-4 py-2 rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default NewProductPage;
