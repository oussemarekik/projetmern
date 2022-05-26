import mongoose from "mongoose";
import VoiteurOcc from "../Models/VoiteurOccasion.model.js";
export const getAllVoiteurOcc = async (req, res) => {
  try {
    const v = await VoiteurOcc.find()
      .populate("marqueId")
      .populate("carrosserieId");
    return res.json(v);
  } catch (err) {
    return res.json(err.message);
  }
};
export const getVoiteurOccById = async (req, res) => {
  try {
    const { id } = req.params;
    const c = await VoiteurOcc.findById(id)
      .populate("marqueId")
      .populate("carrosserieId");
    return res.json(c);
  } catch (error) {
    return res.json(error.message);
  }
};
export const DeleteVoiteurOcc = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.json("error id");
    } else {
      await VoiteurOcc.findByIdAndDelete(id);
      return res.json("voiteur est supprime!!!");
    }
  } catch (error) {}
};

export const UpdateVoiteurOcc = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.json("error id");
    } else {
      const {
        Nom_voiteur,
        Prix,
        Caracterstique,
        Energie,
        Boite,
        marqueId,
        image,
        carrosserieId,
        numtel,
      } = req.body;
      const v = VoiteurOcc({
        _id: id,
        image: image,
        Nom_voiteur: Nom_voiteur,
        Prix: Prix,
        Caracterstique: Caracterstique,
        Energie: Energie,
        Boite: Boite,
        marqueId: marqueId,
        numtel: numtel,
        carrosserieId: carrosserieId,
      });
      await VoiteurOcc.findByIdAndUpdate(id, v);
      return res.json(v);
    }
  } catch (error) {
    return res.json(error.message);
  }
};

export const AddVoiteurOcc = async (req, res) => {
  try {
    const {
      Nom_voiteur,
      Prix,
      Caracterstique,
      Energie,
      Boite,
      marqueId,
      carrosserieId,
      image,
      numtel,
    } = req.body;
    const v = VoiteurOcc({
      numtel: numtel,
      Nom_voiteur: Nom_voiteur,
      Prix: Prix,
      image: image,
      Caracterstique: Caracterstique,
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
export const GetAllVoiteurByMarque = async (req, res) => {
  try {
    const { id } = req.params;

    const v = await VoiteurOcc.find({ marqueId: id });
    return res.json(v);
  } catch (error) {
    return res.json(error.message);
  }
};
export const GetAllVoiteurByCarroserie = async (req, res) => {
  try {
    const { id } = req.params;

    const v = await VoiteurOcc.find({ carrosserieId: id });
    return res.json(v);
  } catch (error) {
    return res.json(error.message);
  }
};
