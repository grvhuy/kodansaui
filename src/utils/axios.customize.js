import axios from "axios";

const getAccessToken = () => {
  const value = `: ${document.cookie}`;
  const parts = value.split(`; accessToken=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token hết hạn hoặc không hợp lệ, có thể xử lý logout hoặc refresh token tại đây
      console.error("Unauthorized - Token có thể đã hết hạn.");
      // Xử lý khi token hết hạn ở đây (nếu có)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
