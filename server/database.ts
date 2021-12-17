//Se importa connect para de mongoose para conectarse a la mongoDB
import { connect } from "mongoose";

//Está conexión es asíncrona
export const startConnection = async () => {
  try {
    //Se conecta al localhost, al crear la conexion y guardar un dato crea automáticamente la base de datos
    const db = await connect("mongodb://localhost/mevn-database");
    //Se muestra en pantalla la base de datos a la que se conecto
    console.log(db.connection.name);
  } catch (error) {
      //En caso de que aparezca un error se imprime este en consola
      console.error(error);
  }
};
