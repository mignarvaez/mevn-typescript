//Se importa el módulo app
import app from './app';
//Se importa la conexión a la base de datos
import {startConnection} from "./database"

//Se pone a escuchar el servidor en el puerto 3000
startConnection();
app.listen(3000);
console.log('El servidor está corriendo en el puerto 3000');