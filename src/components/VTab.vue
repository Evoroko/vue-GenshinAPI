<template>
    <div @click="makeActive" class="tab">
        <slot />
    </div>
    
    </template>

<script setup>

import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        status: false
    }
})

const makeActive = (e) => {
    e.classList.add('test');
}

</script>

<style scoped lang="scss">
.test{
    background-color: red;
}

.tab{
    background-color: black;
    padding: 16px;
    display: block;
}
</style>