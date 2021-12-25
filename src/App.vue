<template>
<Navbar/> <!-- El componente Navbar personalizado--> 
<router-view /> <!-- El componente del enrutador que permite renderizar las rutas -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//Se importa el componente navbar que tiene la navegacion de la app
import Navbar from '@/components/Navbar.vue'


export default defineComponent({
  name: 'App',
  components: {
    //Se indica que se usara el navbar como componente general
    Navbar,
  }
});
</script>

<style>
</style>
