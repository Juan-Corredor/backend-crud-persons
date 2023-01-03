// importacion de conexion a sql
import {createPool} from 'mysql2/promise'

// config de la conexion  a la Base de Datos
export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "Fluvip",
});
