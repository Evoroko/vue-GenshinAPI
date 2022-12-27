<template>

<div class="tabs">
    <slot />
</div>

</template>

<script setup>
import VTab from '../components/VTab.vue';
import { ref } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: false
    },
    active: {
        type: Boolean,
        required: false
    }
})


</script>

<style scoped lang="scss">
.tabs{
    display: flex;
    gap: 8px;
}


</style>