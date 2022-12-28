<template>

<div class="tabs">
    <ul class="tabs__nav">
        <li class="tabs__el" v-for="tab in tabs">
            <a href="#" class="tabs__link" :class="{active: tab === active}" @click.prevent="makeActive(tab)" >
                {{ tab }}
            </a>
        </li>
    </ul>

    <slot/>
</div>

</template>

<script setup>
import VTab from '../components/VTab.vue';
import { ref } from 'vue';

const props = defineProps({
    active: {
        type: String,
        required: false
    },
    tabs: {
        type: Array,
        required: false
    }
})

const emit = defineEmits(['select'])

const makeActive = (tab) => {
    emit('select', tab)
}


</script>

<style scoped lang="scss">
.tabs{
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__nav{
        display: flex;
        flex-direction: row;
        gap: 8px;
        margin-bottom: 16px;
    }
    &__link{
        display: block;
        padding: 16px;
        color: white;
    }
}

.active{
    border-bottom: 3px solid white;
}


</style>