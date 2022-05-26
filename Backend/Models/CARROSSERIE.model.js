import mongoose from "mongoose";
const carrosserieSchema = mongoose.Schema({
  nom_carrosserie: String,
  image: String,
});
const carrosserie = mongoose.model("carrosserie", carrosserieSchema);
export default carrosserie;
