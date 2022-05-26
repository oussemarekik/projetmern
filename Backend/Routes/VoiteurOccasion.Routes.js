import {
  getAllVoiteurOcc,
  AddVoiteurOcc,
  getVoiteurOccById,
  DeleteVoiteurOcc,
  UpdateVoiteurOcc,
} from "../Controllers/Voiteuroccasion.controllers.js";
import express from "express";

const route = express.Router();
route.post("/", AddVoiteurOcc);
route.get("/", getAllVoiteurOcc);
route.get("/:id", getVoiteurOccById);
route.put("/:id", UpdateVoiteurOcc);
route.delete("/:id", DeleteVoiteurOcc);
export default route;
