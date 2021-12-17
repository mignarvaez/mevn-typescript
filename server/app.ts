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

//Se exporta la app
export default app;