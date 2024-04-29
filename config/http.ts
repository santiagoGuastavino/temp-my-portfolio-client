import axios from "axios";

export const http = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BFF_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
