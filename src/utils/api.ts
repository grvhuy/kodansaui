// import axios from "./axios.customize"
import axios from "axios";

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

const searchByTerm = async (term: string) => {
  const response = await axios.get(`/api/series/search/${term}`);
  return response.data;
}

export {
  getSeries,
  getCatFact,
  getSeriesByFriendlyUrl,
  getFullSeriesByFriendlyId,
  getVolume,
};
