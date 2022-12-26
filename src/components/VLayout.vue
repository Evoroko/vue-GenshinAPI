<template>
    <VHeader/>
    
    <main class="content">
        <slot/>
    </main>

    <VFooter/>
</template>

<script setup>
import VHeader from './VHeader.vue';
import VFooter from './VFooter.vue';

</script>

<style scoped lang="scss">
.content{
    max-width: 1280px;
    padding: 32px 16px;
}


</style>