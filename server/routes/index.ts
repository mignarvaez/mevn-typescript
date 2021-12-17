//Se importa la función router para gestionar las rutas en express
import { Router } from "express";

//El objeto router
const router = Router();

//Ruta asociada al método get y permite obtener un listado de las tareas  
router.get("/tasks", (req,res)=>{
    res.send("Obteniendo tareas");
});

//Ruta post para agregar una nueva tarea
router.post("/tasks", (req,res)=>{
    res.send("Agregando tareas");
});

//Ruta get para obtener una tarea según ID
router.get("/tasks/:id", (req,res)=>{
    res.send("Obtener tarea");
});

//Ruta delete para eliminar una tarea según su ID
router.delete("/tasks/:id", (req,res)=>{
    res.send("Eliminar tarea");
});

//Ruta para actualizar una tarea según su ID
router.put("/tasks/:id", (req,res)=>{
    res.send("Actualizar tarea");
});

export default router;