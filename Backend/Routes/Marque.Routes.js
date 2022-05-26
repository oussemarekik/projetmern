import {
  getallMarque,
  addMarque,
  updateMarque,
  getMarqueByID,
  deleteMarqueById,
} from "../Controllers/Marque.controllers.js";
import express from "express";
const route = express.Router();
route.get("/", getallMarque);
route.post("/", addMarque);
route.put("/:id", updateMarque);
route.get("/:id", getMarqueByID);
route.delete("/:id", deleteMarqueById);
export default route;
