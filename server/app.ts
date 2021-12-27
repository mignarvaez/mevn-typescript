//Se importa express
//En consola se ejecuta npx ts --init para que se cree un archivo tsconfig.json dentro del proyecto para permitir usar esta importación
//y otras caracteristicas en express
import express from "express";
//Se importa el middleware morgan como logger
import morgan from "morgan";
//Se importa cors para peticiones crossorigin
import cors from 'cors';
//Se importa el objeto router del archivo index.ts de la carpeta routes (si solo se hace referencia a la carpeta se asume que hay un index dentro)
//Al ser exportado por default al momento de importar se le puede poner un nombre personalizable como traskRoutes en este caso
import taskRoutes from "./routes";
//Modulo de node usado para ubicar archivos o carpetas
import path from 'path';

//Se crea el servidor en la variable app con el constructor de express
const app = express();
//Se indica que se use cors
app.use(cors());
//Se indica que el backend entienda que peticiones desde el frontend están en formato json.
app.use(express.json());
//Se indica que use el middleware morgan en su configuración dev 
app.use(morgan("dev"));
//Se indica que cuando se acceda a la ruta /api el handler de meticiones sea taskRoutes
app.use("/api", taskRoutes);
//Se indica que se va a servir como archivos estaticos aquello que viene de carpeta dist del frontend
//De esta manera al ejecutar el servidor ya sirve los archivos estaticos compilados del frontend, no debe ejecutarse el fronteend
//__dirname es el directorio actual
//Esto funciona en desarrollo (npm run dev)
//app.use(express.static(path.join(__dirname,'../dist')))
//Para que funcione en produccion npm start se usa lo siguiente para que detecte bien la ruta
app.use(express.static(path.join(__dirname, '..', '..', 'dist')))


//Se exporta la app
export default app;