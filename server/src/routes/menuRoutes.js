import express from "express";
import tryCatch from "../utils/tryCatch.js";
import { createMenu, getItems } from "../controllers/menuController.js";

const router = express.Router();

router
  .post("/create", tryCatch(createMenu))
  .get("/items", tryCatch(getItems));

  export default router;
    