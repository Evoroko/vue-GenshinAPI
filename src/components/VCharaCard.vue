<template>
        <div class="chara">
            <div class="chara__txt">
                <div class="chara__title">
                    <h3 class="name">{{name}}</h3>
                    <img class="chara__vision" :src="'https://api.genshin.dev/elements/' + vision + '/icon'">  
                </div>
                <div class="chara__rarity">
                    <font-awesome-icon v-if="rarity==4" v-for="index in 4" :key="index" icon="fa-solid fa-star" />
                    <font-awesome-icon v-if="rarity==5" v-for="index in 5" :key="index" icon="fa-solid fa-star" />
                </div>              
            </div>
            
            <img class="chara__card" :src="'https://api.genshin.dev/characters/' + min_name + '/card'">
        </div>
</template>

<script setup>

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    min_name: {
        type: String,
        required: false
    },
    vision: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    rarity: {
        type: Number,
        required: true
    }
})

</script>

<style lang="scss" scoped>
.chara{
    width: 160px;
    height: 300px;
    position: relative;
    border-radius: 8px;
    display: flex;
    align-items: flex-end;

    &__txt{
        width: 100%;
        padding: 16px;
        text-align: left;
    }

    &__title{
        display: flex;
        gap: 8px;
        align-items: center;
        margin-bottom: 4px;
    }

    &__vision{
        width: 20px;
        height: 20px;
    }

    &__card{
        width: 100%;
        height: 100%;
        height: 300px;
        position: absolute;
        z-index: -10;
        top: 0;
        left: 0;
        border-radius: 8px;
    }
    

    &::after{
            width: 100%;
            height: 100%;
            content: "";
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            background: rgb(0,0,0);
            background: linear-gradient(180deg, rgba(0,0,0,0.06252923532694332) 0%, rgba(0,0,0,1) 100%);
            border-radius: 8px;
        }
}
</style>