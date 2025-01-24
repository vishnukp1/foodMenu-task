import axios from "axios";

const api = axios.create({
  baseURL: "https://cafe-project-1-h8hj.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
