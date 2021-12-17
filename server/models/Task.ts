//Se importa Schema para definir lo que se quiere guardar y el model para poder consultar los datos desde el código
import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  //Las tareas tendran un titulo de tipo string requerido y una descripcion de igual caracteristicas. La propiedad done indica
  //si la tarea esta terminada o no con un valor por defecto de false
  //Con la propiedad trim se asegura  que se eliminen los espacios al inicio y final del titulo y descripcion
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trime: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

//Se exporta el modelo con el nombre task y basado en el taskScheam
export default model("Task", taskSchema);
