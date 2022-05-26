import mongoose from "mongoose";
import Carrosserie from "../Models/CARROSSERIE.model.js";
export const getAllcarrosserie = async (req, res) => {
  try {
    const listc = await Carrosserie.find();
    return res.json(listc);
  } catch (err) {
    return res.json(err.message);
  }
};
export const getCarrosserieByid = async (req, res) => {
  try {
    const { id } = req.params;
    const c = await Carrosserie.findById(id);
    return res.json(c);
  } catch (err) {
    return res.json(err.message);
  }
};
export const UpdateCarrosserie = async (req, res) => {
  const { id } = req.params;
  const { nom_carrosserie, image } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json("Id errore");
  } else {
    if (nom_carrosserie != undefined && image != undefined) {
      try {
        const c = Carrosserie({
          nom_carrosserie: nom_carrosserie,
          image: image,
          _id: id,
        });
        await Carrosserie.findByIdAndUpdate(id, c);
        return res.json(c);
      } catch (err) {
        return res.json(err.message);
      }
    } else {
      return res.json("complet tous les champs ");
    }
  }
};
export const DeleteCarrosserieById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.json("err id");
    } else {
      await Carrosserie.findByIdAndDelete(id);
      return res.json("Carrosserie Supp !!");
    }
  } catch (error) {}
};

export const AddCarrosserie = async (req, res) => {
  const { nom_carrosserie, image } = req.body;
  if (nom_carrosserie != undefined && image != undefined) {
    try {
      const c = Carrosserie({ nom_carrosserie: nom_carrosserie, image: image });
      c.save();
      return res.json(c);
    } catch (err) {
      return res.json(err.message);
    }
  } else {
    return res.json("complet tous les champs ");
  }
};
