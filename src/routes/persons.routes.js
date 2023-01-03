// importamos express para crear las rutas
import { Router } from "express";

// importacion de controllers
import {
  getPersons,
  createPerson,  
  getPersonById,
  deletePersonById,
  updatePersonById,  
} from "../controllers/persons.controller";

const router = Router();

//----- rutas persons -------------
router.get("/persons", getPersons); // get todas las personas
router.post("/persons", createPerson); //post agregar nueva persona
router.get("/persons/:id", getPersonById); // getById a una persona
router.delete("/persons/:id", deletePersonById); // delete eliminar persona
router.put("/persons/:id", updatePersonById); //put actualizar persona

export default router;