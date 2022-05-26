import mongoose from "mongoose";
import marque from "./Marque.model.js";
import carrpsserie from "./CARROSSERIE.model.js";
const voiteurOccSchema = mongoose.Schema({
  Nom_voiteur: String,
  Prix: String,
  Caracterstique: String,
  Energie: String,
  Boite: String,
  image: String,
  numtel: String,

  marqueId: { type: mongoose.Schema.Types.ObjectId, ref: marque },
  carrosserieId: { type: mongoose.Schema.Types.ObjectId, ref: carrpsserie },
});
const VoiteurOcc = mongoose.model("Voiteur_occ", voiteurOccSchema);
export default VoiteurOcc;
