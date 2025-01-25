import axios from "axios";

const api = axios.create({
  baseURL: "https://foodmenu-task.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
