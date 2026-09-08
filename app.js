import express from "express";
import { startDB } from "./config/db.js";

const app = express();
const PORT = 3000;

//para que entienda el formato json
app.use(express.json());


app.listen(PORT, async () => {
    await startDB();
    console.log(`Servidor listo en el puerto ${PORT}`)});
