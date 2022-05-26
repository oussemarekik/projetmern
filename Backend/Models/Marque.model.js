import mongoose from "mongoose";
const marqueSchema = mongoose.Schema({
  nom_marque: String,
  image: String,
});
const marque = mongoose.model("Marque", marqueSchema);
export default marque;
