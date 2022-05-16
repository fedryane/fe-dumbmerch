import axios from "axios";

// creating base URL
export const API = axios.create({
  baseURL: process.env.SERVER_URL || "https://dumb-merch-fedryan.herokuapp.com/api/v1" || "https://localhost:8080/api/v1",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.commin["Authorization"];
  }
};
