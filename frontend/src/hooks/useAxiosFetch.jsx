import axios from "axios";
import { useEffect } from "react";

export const useAxiosFetch = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
  });
  // Request interceptors
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        return config;
      },
      (error) => {
        // Do something with request error
        return Promise.reject(error);
      }
    );
    // Responce interceptors
    const responceInterceptor = axios.interceptors.response.use(
      (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.request.eject(responceInterceptor);
    };
  }, [axiosInstance]);

  return axiosInstance;
};
