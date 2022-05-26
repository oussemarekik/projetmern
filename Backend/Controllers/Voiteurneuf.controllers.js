import mongoose from "mongoose";
import Voiteurneuf from "../Models/VoiteurNeuf.model.js";
export const getAllVoiteurNeuf = async (req, res) => {
  try {
    const v = await Voiteurneuf.find()
      .populate("marqueId")
      .populate("carrosserieId");
    return res.json(v);
  } catch (err) {
    return res.json(err.message);
  }
};
export const getVoiteurNeufById = async (req, res) => {
  try {
    const { id } = req.params;
    const c = await Voiteurneuf.findById(id)
      .populate("marqueId")
      .populate("carrosserieId");
    return res.json(c);
  } catch (error) {
    return res.json(error.message);
  }
};
export const DeleteVoiteurNeuf = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.json("error id");
    } else {
      await Voiteurneuf.findByIdAndDelete(id);
      return res.json("voiteur est supprime!!!");
    }
  } catch (error) {}
};

export const UpdateVoiteurNeuf = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.json("error id");
    } else {
      const {
        Nom_voiteur,
        Prix,
        Caracterstique,
        Garantie,
        Energie,
        Boite,
        marqueId,
        carrosserieId,
        image,
      } = req.body;
      const v = Voiteurneuf({
        _id: id,
        image: image,
        Nom_voiteur: Nom_voiteur,
        Prix: Prix,
        Caracterstique: Caracterstique,
        Garantie: Garantie,
        Energie: Energie,
        Boite: Boite,
        marqueId: marqueId,
        carrosserieId: carrosserieId,
      });
      await Voiteurneuf.findByIdAndUpdate(id, v);
      return res.json(v);
    }
  } catch (error) {
    return res.json(error.message);
  }
};
export const GetAllVoiteurByMarque = async (req, res) => {
  try {
    const { id } = req.params;

    const v = await Voiteurneuf.find({ marqueId: id });
    return res.json(v);
  } catch (error) {
    return res.json(error.message);
  }
};
export const GetAllVoiteurByCarroserie = async (req, res) => {
  try {
    const { id } = req.params;

    const v = await Voiteurneuf.find({ carrosserieId: id });
    return res.json(v);
  } catch (error) {
    return res.json(error.message);
  }
};
export const AddVoiteurNeuf = async (req, res) => {
  try {
    const {
      Nom_voiteur,
      Prix,
      Caracterstique,
      Garantie,
      Energie,
      Boite,
      marqueId,
      image,
      carrosserieId,
    } = req.body;
    const v = Voiteurneuf({
      Nom_voiteur: Nom_voiteur,
      Prix: Prix,
      image: image,
      Caracterstique: Caracterstique,
      Garantie: Garantie,
      Energie: Energie,
      Boite: Boite,
      marqueId: marqueId,
      carrosserieId: carrosserieId,
    });
    await v.save();
    return res.json(v);
  } catch (error) {
    return res.json(error.message);
  }
};
