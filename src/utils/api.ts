// import axios from "./axios.customize"
import axios from "axios";
import axiosInstance from "./axios.customize";

const getSeries = async (
  status?: number,
  ageRating?: number,
  type?: number,
  genre?: number[]
) => {
  const response = await axios.get("/api/series/get-series", {
    params: {
      status,
      ageRating,
      type,
      genre: genre?.map((g) => g.toString()).join(","),
    },
  });
  return response.data;
};

const getSeriesByStatus = async (status: number) => {
  const response = await axios.get(`/api/series/get-series?status=${status}`);
  return response.data;
};

const getSeriesByFriendlyUrl = async (friendlyUrl: string) => {
  const response = await axios.get(`/api/series/${friendlyUrl}`);
  return response.data;
};

const getCatFact = async () => {
  const response = await axios.get("https://catfact.ninja/fact");
  return response.data;
};

const getFullSeriesByFriendlyId = async (friendlyId: string) => {
  const response = await axios.get(`/api/volume/${friendlyId}`);
  return response.data;
};

const getVolume = async (friendlyId: string, vol: string) => {
  const response = await axios.get(`/api/volume/${friendlyId}?vol=${vol}`);
  return response.data;
};

const searchByQuery = async (query: string) => {
  const response = await axios.get(`/api/Series/search?query=${query}`);
  return response.data;
};

//  /api/Auth/sign-up
// const signUp = async (email: string, password: string) => {
//   const response = await axios.post("/api/Auth/sign-up", {
//     email,
//     password,
//   });
//   return response.data;
// };

//  /api/Auth/sign-in

const getAddresses = async () => {
  const response = await axiosInstance.get("/api/User/get-addresses");
  return response.data;
};

const addAddress = async ({
  street,
  city,
  country,
  postalCode,
  phoneNumber,
  fullName,
}: {
  street: string;
  city: string;
  country: string;
  postalCode: string;
  phoneNumber: string;
  fullName: string;
}) => {
  const response = await axiosInstance.post("/api/User/add-address", {
    street,
    city,
    country,
    postal_code: postalCode,
    phone_number: phoneNumber,
    full_name: fullName,
  });

  return {
    message: "Address added successfully",
    address: response.data,
  };
};

const checkVolumeAvailability = async (friendly_id: string, vol?: string) => {
  if (vol) {
    const response = await axiosInstance.get(
      `/api/Inventory/check-volume-availability/${friendly_id}?vol=${vol}`
    );
    return response.data;
  }
  const response = await axiosInstance.get(
    `/api/Inventory/check-volume-availability/${friendly_id}`
  );
  return response.data;
};

const createOrder = async (
  addressId: string,
  products: { volume_id: string; quantity: number }[],
  storeId: string
) => {
  const response = await axiosInstance.post("/api/User/create-order", {
    address_id: addressId,
    store_id: storeId,
    products: products,
  });
  return response.data;
};

const getOrders = async () => {
  const response = await axiosInstance.get("/api/User/get-orders");
  return response.data;
};

// const getNews = async () => {
//   const response = await axios.get("/api/News/get-news");
//   return response.data;
// }

// const getNewsByFriendlyUrl = async (friendlyUrl: string) => {
//   const response = await axios.get(`/api/News/${friendlyUrl}`);
//   return response.data;
// }

const getContainers = async () => {
  const response = await axios.get("/api/Homepage/get-containers");
  return response.data;
};

export {
  addAddress,
  createOrder,
  getAddresses,
  getCatFact,
  getContainers,
  getFullSeriesByFriendlyId,
  getOrders,
  getSeries,
  getSeriesByFriendlyUrl,
  getSeriesByStatus,
  getVolume,
  searchByQuery,
  checkVolumeAvailability,
};
