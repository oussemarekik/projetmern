import {
  getAllVoiteurNeuf,
  AddVoiteurNeuf,
  getVoiteurNeufById,
  DeleteVoiteurNeuf,
  UpdateVoiteurNeuf,
  GetAllVoiteurByMarque,
  GetAllVoiteurByCarroserie,
} from "../Controllers/Voiteurneuf.controllers.js";
import express from "express";

const route = express.Router();
route.post("/", AddVoiteurNeuf);
route.get("/", getAllVoiteurNeuf);
route.get("/:id", getVoiteurNeufById);
route.put("/:id", UpdateVoiteurNeuf);
route.get("/maq/:id", GetAllVoiteurByMarque);
route.get("/car/:id", GetAllVoiteurByCarroserie);

route.delete("/:id", DeleteVoiteurNeuf);
export default route;
