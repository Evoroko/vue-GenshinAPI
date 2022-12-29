<template>
    <div class="content">
        <h1>Today — {{ dayOfWeek }}</h1>

        <small>This page is not complete due to the API not being up-to-date. Some images may be missing.</small>

        <div class="group">
            <h2>Available talent books</h2>
            <ul>
                <li v-for="book in books">
                    <div class="category">
                        <div class="farmable--item">
                            <div class="farmable">
                                <img v-for="item in book.items" :src="`https://api.genshin.dev/materials/talent-book/${item.id}`" alt="">
                            </div>
                            <h3>{{ book.items[2].name }}</h3>
                        </div>
                        <small>Used by :</small>
                        <div class="farmable">
                            <div v-for="character in book.characters">
                                <RouterLink :to="`/character/${character}`">
                                    <img v-if="!character.includes('traveler')" :src="`https://api.genshin.dev/characters/${character}/icon-big`" alt="" class="farmable__el">
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        
        <div class="group">
            <h2>Available weapon materials</h2>
            <ul>
                <li v-for="material in materials" class="category">
                    <div class="category">
                        <div class="farmable--item">
                            <div class="farmable">
                                <img v-for="item in material.items" :src="`https://api.genshin.dev/materials/weapon-ascension/${item.id}`" alt="">
                            </div>
                            <h3>{{ material.items[2].name }}</h3>
                        </div>
                        <small>For :</small>
                        <div class="farmable">
                            <div v-for="(weapon, key) in material.weapons">
                                <img :src="`https://api.genshin.dev/weapons/${weapon}/icon`" @error="this.src = unavailableImg()" alt="">
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'


const date = new Date();

const day = ref(date.getDate());
const daysOfWeek = ref(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
const dayOfWeek = ref(daysOfWeek.value[date.getDay()]);

const month = ref(date.getMonth() + 1);
const year = ref(date.getFullYear());

const fullDate  = ref(date.toDateString());

const imgURL = ref();

// Fetch books
const books = ref([]);
const endpoint = `https://api.genshin.dev/materials/talent-book`;

const fetchBooks = async () => {
    const response = await fetch(endpoint)
    return await response.json()
}

onMounted(async () => {
    const response = await fetchBooks()

    // books.value = response;
    for(let key of Object.keys(response)){
        for(let avDay of response[key].availability){
            if(avDay === dayOfWeek.value){
                console.log('test');
                books.value.push(response[key]);
            }
        }
    }

    console.log(books)
})

// Fetch materials
const materials = ref([]);
const endpointMaterials = `https://api.genshin.dev/materials/weapon-ascension`;
const materialsImgLink = ref([]);

const fetchMaterials = async () => {
    const response = await fetch(endpointMaterials)
    return await response.json()
}

onMounted(async () => {
    const response = await fetchMaterials()

    // books.value = response;
    for(let key of Object.keys(response)){
        for(let avDay of response[key].availability){
            if(avDay === dayOfWeek.value){
                console.log('test');
                materials.value.push(response[key]);

                for(let weapon of response[key].weapons){
                    materialsImgLink.value.push(`https://api.genshin.dev/weapons/${weapon}/icon`);
                }
            }
        }
        
    }

    console.log(materials)
    console.log(materialsImgLink);
})

const unavailableImg = () => {
    const img = 'https://via.placeholder.com/100.webp/?text=No+image';
    return img;
}




</script>

<style scoped lang="scss">

.category{
    padding: 16px;
    background-color: rgb(20, 20, 23);
    border-radius: 8px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
}

.farmable{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;

    &--item{
        background-color: rgb(10, 10, 11);
        border-radius: 16px;
        padding: 16px;

        @media(min-width: 380px){
            padding: 16px 32px;
        }
    }

    img{
        width: 100px;
        height: 100px;
        object-fit: contain;
    }

    &__el{
        padding: 8px;
        border-radius: 8px;

        &:hover{
        background-color: rgb(10, 10, 11);

        }

    }
}

.content{
    & > * {
        margin-bottom: 16px;
    }
}

.group{
    margin-bottom: 48px;
}

h2{
    margin: 32px 0 16px 0;
    
}

</style>