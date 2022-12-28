<template>
    <VHeader/>
    
    <main class="space">
        <slot/>
    </main>

    <VFooter/>
</template>

<script setup>
import VHeader from './VHeader.vue';
import VFooter from './VFooter.vue';

</script>

<style lang="scss">
.content{
    max-width: 1280px;
    padding: 32px 16px;
    margin: auto;
}

.space{
    margin-top: 76px;

    @media (min-width: 370px){
        margin-top: 57px;
    }
}


</style>