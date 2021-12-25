<template>
    <nav>
        <ul>
            <!-- Se usa router-link del enrutador de vue para evitar refrescar la pagina al redireccionar -->
            <li>
                <router-link to="/">Tasks</router-link>
            </li>
            <li>
                <router-link to="/tasks/new">Create task</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//Se exporta el componente navbar
export default defineComponent({
    name: 'Navbar'    
})
</script>
