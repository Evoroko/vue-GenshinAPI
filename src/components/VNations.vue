<template>
    <div class="horcard">
        <div class="horcard__txt">
            <img class="horcard__vision" :src="'https://api.genshin.dev/elements/' + vision + '/icon'" alt="">
            <h3 class="hordcard__title">{{name}}</h3>
        </div>
        
        <img class="horcard__bg" decoding="async" :src="'https://api.genshin.dev/nations/' + name_min + '/icon'" alt="">
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    name_min: {
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
.horcard{
    flex-grow: 1;
    height: 164px;
    border-radius: 8px;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 16px;

    &__title{
        font-size: 25px;
    }

    &__txt{
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__bg{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -10;
    }

    &__vision{
        width: 32px;
        height: 32px;
    }

    &::after{
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,0.06252923532694332) 0%, rgba(0,0,0,1) 100%);
        border-radius: 8px;
    }
}
</style>