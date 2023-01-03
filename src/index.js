// importacion del modulo app
import app from "./app";
import "./database/connection";

app.listen(app.get("port"));
console.log("Servidor corriendo por el puerto", app.get("port"));
