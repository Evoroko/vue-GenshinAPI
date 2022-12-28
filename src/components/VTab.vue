<template>
    <div v-if="active">
        <slot/>
    </div>
    
</template>

<script setup>

import { ref } from 'vue';

const props = defineProps({
    active: {
        type: Boolean,
        status: false
    }
})

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