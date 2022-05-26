import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Marqueroute from "./Routes/Marque.Routes.js";
import carrosserieRoute from "./Routes/Carrosserie.Routes.js";
import VoiteurRoute from "./Routes/VoiteurNeuf.Routes.js";
import VoiteurOccRoute from "./Routes/VoiteurOccasion.Routes.js";
import UserRoute from "./Routes/User.Routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
app.use("/api/voiteuroccasion", VoiteurOccRoute);
app.use("/api/voiteur", VoiteurRoute);
app.use("/api/marque", Marqueroute);
app.use("/api/carrosserir", carrosserieRoute);
app.use("/api/users", UserRoute);
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connexion à la bese de données réussie");
  })
  .catch((err) => {
    console.log("impossible d'acces a la base de donnees", err);
    process.exit();
  });
app.listen(process.env.PORT, () => {
  console.log(`server est active on port ${process.env.PORT}`);
});
