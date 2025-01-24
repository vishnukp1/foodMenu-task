import express from "express";
import menuRoutes from "./src/routes/menuRoutes.js";
import cors from "cors";
import morgan from "morgan";
import db from "./src/services/db.js";


const app = express();

db();

app.use(express.json());

app.use(morgan("dev"));

app.use(cors());

app.use("/api", menuRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
