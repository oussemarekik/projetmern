import mongoose from "mongoose";
import marque from "../Models/Marque.model.js";
export const getallMarque = async (req, res) => {
  try {
    const allmarque = await marque.find();
    res.status(200).json(allmarque);
  } catch (err) {
    res.json(err);
  }
};
export const addMarque = async (req, res) => {
  try {
    const { nom_marque, image } = req.body;
    if ((nom_marque != undefined) & (image != undefined)) {
      const ma = marque({ nom_marque: nom_marque, image: image });
      ma.save();
      res.status(200).json(ma);
    } else res.json("complet tous les champs");
  } catch (err) {
    res.json(err.message);
  }
};
export const updateMarque = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.json("id errore");
    } else {
      const { nom_marque, image } = req.body;
      if ((nom_marque != undefined) & (image != undefined)) {
        const ma = marque({ nom_marque: nom_marque, image: image, _id: id });
        await marque.findByIdAndUpdate(id, ma);
        res.status(200).json(ma);
      } else res.json("complet tous les champs");
    }
  } catch (err) {
    return res.json(err.message);
  }
};
export const getMarqueByID = async (req, res) => {
  const { id } = req.params;
  try {
    const ma = await marque.findById(id);
    return res.json(ma);
  } catch (err) {
    res.json(err.message);
  }
};
export const deleteMarqueById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.json("id errore");
    } else {
      await marque.findByIdAndDelete(id);
      return res.json("marque supprime");
    }
  } catch (err) {
    return res.json(err.message);
  }
};
