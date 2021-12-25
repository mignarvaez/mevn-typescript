//Se importa nuestra instancia de axios
import axios from "./axios";
//Se importa axios reponse para indicar que es el tipo de objeto que se retornara al hacer peticiones get
import { AxiosResponse } from "axios";
//Se importa la interfaz de tareas
import { Task } from "@/interfaces/Task";

//función para crear una tarea
export const createTask = async (task: Task): Promise<unknown> =>
  await axios.post("/tasks", task);

//función para obtener las tareas, se obtendra un objeto de tipo axiosresponse que tendra un arreglo de tareas
export const getTasks = async (): Promise<AxiosResponse<Task[]>> =>
  await axios.get("/tasks");

//función para obtener una tarea, recibe el id de la tarea y se obtendra un objeto de tipo axiosresponse que tendra una tarea
export const getTask = async (id: string): Promise<AxiosResponse<Task>> =>
  await axios.get("/tasks/" + id);

//Función para actualizar una tarea. Tiene el id que se desea actualizar y una tarea
export const updateTask = async (id: string, task: Task): Promise<unknown> =>
  await axios.put("/tasks/" + id, task);

//función para eliminar una tarea, recibe el id de la tarea y se obtendra un objeto de tipo axiosresponse que tendra una tarea
export const deleteTask = async (id: string): Promise<AxiosResponse<Task>> =>
await axios.delete("/tasks/" + id);
