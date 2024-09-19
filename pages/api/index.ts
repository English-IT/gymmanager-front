import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: "",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});
