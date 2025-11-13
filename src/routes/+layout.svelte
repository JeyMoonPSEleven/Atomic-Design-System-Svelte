<script lang="ts">
    // Importar los estilos globales
    import "../app.css";

    // Usando la sintaxis de Svelte 5 $props
    let { children } = $props();
</script>

{@render children()}
