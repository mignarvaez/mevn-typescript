<template>
  <div class="col-md-4 offset-md-4">
    <h1 class="text-center h3 mb-3">Task detail</h1>
    <!-- Para actualizar se requiere que se ejecute el formulario por eso el botón va dentro-->
    <!-- El método handleUpdate ejecuta el llamado a la funcion encargada de actualizar la tarea. También se indica con prevent que
    no se reinice el formulario al presionar el botón-->
    <form @submit.prevent="handleUpdate()" class="card card-body">
      <!-- Con el v-model se enlaza el componente con el objeto tarea actual -->
      <input type="text" v-model="currentTask.title" class="form-control mb-3"/>
      <textarea rows="3" v-model="currentTask.description" class="form-control mb-3"></textarea>
      <button class="btn btn-primary">Actualizar</button>
    </form>
    <!-- El delete puede ser llamado fuera del formulario -->
    <div class="text-center">
      <button @click="handleDelete()" class="btn btn-danger">Borrar</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Task } from "@/interfaces/Task";
import { deleteTask, getTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  //La función data retorna un objeto donde se especifican los datos que quiero que el componente tenga inicialmente
  data() {
    return {
      currentTask: {} as Task,
    };
  },
  //Objeto con métodos
  methods: {
    //Se recibe un id de tipo string para obtener la tarea
    async loadTask(id: string) {
      const res = await getTask(id);
      //Se asigna la información de la tarea al objeto current task
      this.currentTask = res.data;
    },
    //Método para actualizar la tarea actual
    async handleUpdate() {
      //Si es un objeto de tipo string (generalmente params.id puede ser un arreglo de strings) se envia la id y la tarea asociada al método actualizar tarea
      if (typeof this.$route.params.id == "string") {
        await updateTask(this.$route.params.id, this.currentTask);
        //Redirecciona a la ruta inicial
        this.$router.push("/");
      }
    },
    //Método para eliminar la tarea actual
    async handleDelete() {
      //Si es un objeto de tipo string (generalmente params.id puede ser un arreglo de strings) se envia la id y la tarea asociada al método eliminar tarea
      if (typeof this.$route.params.id == "string") {
        await deleteTask(this.$route.params.id);
        //Redirecciona a la ruta inicial
        this.$router.push("/");
      }
    },
  },
  //Mount es un método que se llama cuando se cargue o llame a este componente
  mounted() {
    //Al montarse se carga el id de la ruta
    //Si es un objeto de tipo string (generalmente params.id puede ser un arreglo de strings) se envia la id al método ue carga la tarea
    if (typeof this.$route.params.id == "string")
      this.loadTask(this.$route.params.id);
  },
});
</script>
