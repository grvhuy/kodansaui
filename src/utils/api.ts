// import axios from "./axios.customize"
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import axiosInstance from "./axios.customize";

const getSeries = async () => {
  const response = await axios.get("/api/series/get-series");
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
const signUp = async (email: string, password: string) => {
  const response = await axios.post("/api/Auth/sign-up", {
    email,
    password,
  });
  return response.data;
};

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

const createOrder = async (
  addressId: string,
  products: { volume_id: string; quantity: number }[]
) => {
  const response = await axiosInstance.post("/api/Order/create-order", {
    address_id : addressId,
    products,
  })
  return response.data;
};

export {
  getSeries,
  getCatFact,
  getSeriesByFriendlyUrl,
  getFullSeriesByFriendlyId,
  getVolume,
  searchByQuery,
  getAddresses,
  addAddress,
  createOrder
};
