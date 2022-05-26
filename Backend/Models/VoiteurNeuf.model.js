import mongoose from "mongoose";
import marque from "./Marque.model.js";
import carrpsserie from "./CARROSSERIE.model.js";
const VoiteurneufSchema = mongoose.Schema({
  Nom_voiteur: String,
  Prix: String,
  Caracterstique: String,
  Garantie: String,
  Energie: String,
  Boite: String,
  image: String,
  marqueId: { type: mongoose.Schema.Types.ObjectId, ref: marque },
  carrosserieId: { type: mongoose.Schema.Types.ObjectId, ref: carrpsserie },
});
const Voiteurneuf = mongoose.model("Voiteur_neuf", VoiteurneufSchema);
export default Voiteurneuf;
