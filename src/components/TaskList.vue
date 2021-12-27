<template>
  <ul class="list-group">
    <!-- Se hace un recorrido de las tareas, usando como key el index-->
    <!-- Al hacer click en un item se redireccione a la vista detalle-->
    <!-- El estilo cursor:pointer hace que cuando se ponga sobre un enlace se muestra una "mano"-->
    <li
      class="list-group-item list-group-item-action"
      style="cursor: pointer"
      v-for="(task, index) in tasks"
      :key="index"
      @click="this.$router.push(`/tasks/${task._id}`)"
    >
      {{ index + 1 }}. {{ task.title }}:
      {{ task.description }}
    </li>
  </ul>
</template>

<script lang="ts">
//Se importa los servicios que permitaran gestionar las operaciones con el backend
import { Task } from "@/interfaces/Task";
import { getTasks } from "@/services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  //La función data retorna un objeto donde se especifican los datos que quiero que el componente tenga inicialmente
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  //Objeto que almacena los métodos
  methods: {
    //Obtiene las tareas del backend
    async loadTasks() {
      const res = await getTasks();
      //Se asigna al objeto tasks las tareas, que estan en el data, desde el backend
      this.tasks = res.data;
    },
  },
  //Mount es un método que se llama cuando se cargue o llame a este componente
  mounted() {
    this.loadTasks();
  },
});
</script>
