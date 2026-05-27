import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://fullstack-chat-app-ev4k.onrender.com" : "/api",
  withCredentials: true,
});
