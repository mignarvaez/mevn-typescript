//Se importa la función router para gestionar las rutas en express
import { Router } from "express";
//Se importa el modelo
import Task from "../models/Task";

//El objeto router
const router = Router();

//Ruta asociada al método get y permite obtener un listado de las tareas
router.get("/tasks", async (req, res) => {
  //Realiza la consulta de manera asincrona de todas las tareas y las retorna
  const tasks = await Task.find();
  console.log(tasks);
  res.send(tasks);
});

//Ruta post para agregar una nueva tarea
router.post("/tasks", async (req, res) => {
  //Se obtiene el titulo y la descripción desde el request body
  const { title, description } = req.body;
  //Crea y guarda una nueva tarea con el titulo y descripción obtenidos
  const task = new Task({ title, description });
  await task.save();
  //Retorna la tarea creada
  res.json(task);
});

//Ruta get para obtener una tarea según ID
router.get("/tasks/:id", async (req, res) => {
  try {
    //Se realiza la busqueda de la tarea según ID
    const task = await Task.findById(req.params.id);
    res.send(task);
  } catch (error) {
    //Se retorna el error (500 error interno del servidor)
    res.status(500).send(error);
  }
});

//Ruta delete para eliminar una tarea según su ID
router.delete("/tasks/:id", async (req, res) => {
  try {
    //Se elimina una tarea según id
    const task = await Task.findByIdAndDelete(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Ruta para actualizar una tarea según su ID
router.put("/tasks/:id", async (req, res) => {
  try {
    //Se actualiza la tarea según id con lo que llega por el req.body
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
