<template>
        <div class="post-card">
            <h2 class="name">{{name}}</h2>
            <h2 class="title">{{title}}</h2>
            <ul class="tags">
                <li
                class="tags-item"
                >
                    {{vision}}
                </li>
            </ul>
        </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    vision: {
        type: String,
        required: true
    }
})

</script>

<style lang="scss" scoped>

.post-card{
    padding: 1rem;
    background-color: white;
    border-radius: 3px;
    color: black;
    height: 100%;
}

.title{
    font-weight: bold;
    font-size: 1.125rem;
}

.tags{
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;

    &-item{
        color: white;
        background-color: teal;
        border-radius: 2px;
        padding: 0.2rem 0.4rem;
    }
}

</style>