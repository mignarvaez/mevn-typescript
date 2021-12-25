//Interfaz de vuerouter4 que permite definir las rutas
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

//Arreglo que define las rutas
const routes:RouteRecordRaw[] = [
    {
        path: '/', //Ruta inicial
        alias: '/tasks',
        name: 'tasks',
        component:() => import('@/components/TaskList.vue'), //El componente asociado a la ruta inicial
    },
    {
        path: '/tasks/new', //Ruta para agregar tarea
        name: 'tasks-new',
        component:() => import('@/components/TaskForm.vue'), //El componente asociado a la ruta new
    },
    {
        path: '/tasks/:id', //Ruta para ver detalle de tarea segun id
        name: 'tasks-details',
        component:() => import('@/components/TaskDetail.vue'), //El componente asociado a la ruta detail
    },
]

//Crea un enrutador
const router = createRouter({
    history: createWebHistory(), //Crea una historia/historial de rutas
    routes,
})

export default router;