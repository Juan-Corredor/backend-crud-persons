// importacion de la conexion (database)
//import { connect } from "mysql";
import { querys, pool } from "../database";

// controladores, funciones que se encarga de pedir la info de cada ruta
export const getPersons = async (req, res) => {
  try {
    const result = await pool.query(querys.getAllPersons) //querys.getAllPersons;    
    res.json(result[0]);    
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getPersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(querys.getPersonById, [ id ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: `Ha ocurrido un error: ${error}` });
  }
};


export const createPerson = async (req, res) => {
  try {
    const { names, surnames, document, telephone } = req.body;
    const [rows] = await pool.query(
      querys.addNewPerson,
      [names, surnames, document, telephone]
    );
    res.status(201).json({ names, surnames, document, telephone });
  } catch (error) {
    return res.status(500).json({ message: `Ha ocurrido un error: ${error}`});
  }
};


// delete
export const deletePersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(querys.deletePersonById, [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Persona no encontrada" });
    }

    res.sendStatus(204); 
  } catch (error) {
    return res.status(500).json({ message: `Ha ocurrido un error: ${error}`});
  }
};


// update
export const updatePersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const { names, surnames, document, telephone } = req.body;

    const [result] = await pool.query(
      querys.updatePersonById,
      [names, surnames, document, telephone, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Persona no encontrada" });

    const [rows] = await pool.query(querys.getPersonById, [ id ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: `Ha ocurrido un error: ${error}`});
  }
};
