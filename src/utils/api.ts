// import axios from "./axios.customize"
import axios from "axios";

const getSeries = async () => {
  const response = await axios.get("/api/series/get-series");
  return response.data;
}

const getSeriesByFriendlyUrl = async (friendlyUrl: string) => {
  const response = await axios.get(`/api/series/${friendlyUrl}`);
  return response.data;
}

const getCatFact = async () => {
  const response = await axios.get("https://catfact.ninja/fact");
  return response.data;
}


export { getSeries, getCatFact, getSeriesByFriendlyUrl }