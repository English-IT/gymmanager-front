import axios from "axios";
import { getSession } from "next-auth/react";

export const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

http.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    if (session?.user?.accessToken) {
      config.headers.Authorization = `Bearer ${session.user.accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
