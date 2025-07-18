import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/",
  params: {
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    units: "metric",
    lang: "pt_br",
  },
  headers: {
    accept: "application/json",
  },
});

export default api;
