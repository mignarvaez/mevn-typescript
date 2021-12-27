<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link to="/" class="navbar-brand">Vue Typescript</router-link>
      <div>
        <ul class="navbar-nav">
          <!-- Se usa router-link del enrutador de vue para evitar refrescar la pagina al redireccionar -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">Tasks</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tasks/new" class="nav-link">Create task</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//Se exporta el componente navbar
export default defineComponent({
  name: "Navbar",
});
</script>
