<template>
    <VHeader/>
    
    <main>
        <slot/>
    </main>

    <VFooter/>
</template>

<script setup>
import VHeader from './VHeader.vue';
import VFooter from './VFooter.vue';

</script>