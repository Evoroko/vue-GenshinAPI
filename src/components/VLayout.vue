<template>
    <TheHeader/>
    
    <main>
        <slot/>
    </main>

    <footer>
        THE FOOTER
    </footer>
</template>

<script setup>
import TheHeader from './TheHeader.vue';

</script>