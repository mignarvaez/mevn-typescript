//Interfaz que representa una tarea. Las interfaces en typescript no se convierten en código sirven para guiar durante el desarrollo indicando el tipo de dato
export interface Task {
  title: string;
  description: string;
  done: boolean;
  _id: string;
}
