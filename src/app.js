// importacion del mudulo de express
import express from "express";
import config from "./config";
import personsRoutes from "./routes/persons.routes";
// iniciacion de express
const app = express();
//Habilitar los cors
const cors = require("cors");


// settings
app.set("port", config.port);
app.use(cors());

// middlewares
// lo que reciba lo convertira a json antes de usarlo
app.use(express.json());
// para que reciba datos desde formularios
app.use(express.urlencoded({extended: false}))

app.use('/api/', personsRoutes);
export default app;
