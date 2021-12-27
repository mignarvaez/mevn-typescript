<template>
  <div class="col-md-4 offset-md-4">
    <!-- Se indica que al precionar el botón se ejecute el método saveTask. También se indica con prevent que
no se reinice el formulario al presionar el botón. -->
    <form @submit.prevent="saveTask()" class="card card-body">
      <h1 class="text-center h3 mb-3">CREATE TASK</h1>

      <!-- Con v-model se enlaza el input y el text area con el objeto que tiene los datos -->
      <input
        type="text"
        placeholder="Ingresa un título"
        v-model="task.title"
        class="form-control mb-3"
      />
      <textarea
        rows="3"
        placeholder="Ingresa una descripción"
        v-model="task.description"
        class="form-control mb-3"
      ></textarea>
      <!-- El botón permanece desactivado hasta que se ingresen valores en los dos campos-->
      <button
        class="btn btn-primary"
        :disabled="!task.title || !task.description"
      >
        Guardar
      </button>
    </form>
  </div>
</template>

<!-- Estructura para definir la lógica de un componente en Vue3 usando Typescript-->
<script lang="ts">
import { defineComponent } from "vue";
//Se importa la interfaz tarea
import { Task } from "@/interfaces/Task";
//Se importa los servicios que permitaran gestionar las operaciones con el backend
import { createTask } from "@/services/TaskService";

export default defineComponent({
  //La función data retorna un objeto donde se especifican los datos que quiero que el componente tenga inicialmente
  data() {
    return {
      task: {} as Task, //Al asignarse como tarea sabe que tiene las propiedades creadas en esa interfaz, a saber, titulo y descripción.
    };
  },
  //Objeto que almacena los métodos
  methods: {
    //Guarda la tarea
    async saveTask() {
      const respuesta = await createTask(this.task);
      console.log(respuesta);
      //Se redirecciona a la pagina de la lista de tareas
      this.$router.push({ name: "tasks" });
    },
  },
});
</script>
