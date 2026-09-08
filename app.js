import express from "express";
import { startDB } from "./src/config/database.js";
//import { sequelize } from "./src/config/database.js";
//import { assistantModel } from "./src/models/asistentemodel.js";

const app = express();
const PORT = 3000;

//para que entienda el formato json
app.use(express.json());

// configuracion de rutas
app.use("/asistentes", require("./src/routes/asistente.routes.js"));

app.listen(PORT, async () => {
    await startDB();
    console.log(`Servidor listo en el puerto ${PORT}`)});
