import express from "express";
import {
  getAllcarrosserie,
  AddCarrosserie,
  getCarrosserieByid,
  UpdateCarrosserie,
  DeleteCarrosserieById,
} from "../Controllers/Carrosserie.controllers.js";
const route = express.Router();

route.delete("/:id", DeleteCarrosserieById);
route.put("/:id", UpdateCarrosserie);
route.post("/:id", UpdateCarrosserie);

route.get("/:id", getCarrosserieByid);
route.get("/", getAllcarrosserie);
route.post("/", AddCarrosserie);
export default route;
