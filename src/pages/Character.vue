<template>

<section v-if="character !== null">
    <div class="chara__banner">
        <img class="chara__splash" :src="endpointImg" alt="" @error="handleError">
    </div>
    <h1>{{character.name}}</h1>
    <img class="chara__vision" :src="'https://api.genshin.dev/elements/' + character.vision.toLowerCase().trim() + '/icon'">  
    <p>{{character.title}}</p>
    <div class="chara__rarity">
        <font-awesome-icon v-if="character.rarity==4" v-for="index in 4" :key="index" icon="fa-solid fa-star" />
        <font-awesome-icon v-if="character.rarity==5" v-for="index in 5" :key="index" icon="fa-solid fa-star" />
    </div>

    <VTabs>
        <VTab title="tab1" :name="'test'" :active="false">Description</VTab>
        <VTab title="tab2" :name="'test'" :active="false">Skills</VTab>
        <VTab title="tab3" :name="'test'" :active="false">Constellation</VTab>
    </VTabs>



    <section class="description">
        <h2>Description</h2>
        <h3>Description</h3>
        <p>{{character.description}}</p>
        <h3>Weapon</h3>
        <p>{{character.weapon}}</p>
        <h3>Birthday</h3>
        <p>{{character.birthday.substring(5, 10)}}</p>
        <h3>Nation</h3>
        <p>{{character.nation}}</p>
        <h3>Constellation</h3>
        <p>{{character.constellation}}</p>
    </section>
    <section class="skills">
        <h2>Skills</h2>
        <h3>Skill talents</h3>
        <div v-for="skill in character.skillTalents">
            <h4>{{ skill.unlock }} — {{ skill.name }}</h4>
            <p>{{ skill.description }}</p>
        </div>
        <h3>Passive talents</h3>
        <div v-for="talent in character.passiveTalents">
            <h4>{{ talent.name }}</h4>
            <p>{{ talent.description }}</p>
            <small>{{ talent.unlock }}</small>
        </div>
    </section>
    <section class="constellations">
        <h2>Skills</h2>
        <h3>Skill talents</h3>
        <div v-for="skill in character.skillTalents">
            <h4>{{ skill.unlock }} — {{ skill.name }}</h4>
            <p>{{ skill.description }}</p>
        </div>
        <h3>Passive talents</h3>
        <div v-for="talent in character.passiveTalents">
            <h4>{{ talent.name }}</h4>
            <p>{{ talent.description }}</p>
            <small>{{ talent.unlock }}</small>
        </div>
    </section>
        <h2>Constellations</h2>
        <div v-for="constellation in character.constellations">
            <h4>{{ constellation.unlock }} —{{ constellation.name }}</h4>
            <p>{{ constellation.description }}</p>
        </div>

    </section>

</template>

<script setup>
import VLoader from '../components/VLoader.vue'
import VTabs from '../components/VTabs.vue'
import VTab from '../components/VTab.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const id = route.params.min_name

// Character details
const character = ref(null);
const endpoint = `https://api.genshin.dev/characters/${id}`;

const fetchCharacter = async () => {
  const response = await fetch(endpoint)
  return await response.json()
}

onMounted(async () => {
  const response = await fetchCharacter()

  character.value = response;

    console.log(character)
})

let endpointImg = ref(endpoint + '/gacha-splash');
const handleError = () => {
    endpointImg.value = endpoint + '/card'
}

</script>
  
<style scoped lang="scss">
.chara{

    &__banner{
        max-width: 960px;
        margin: auto;
        z-index: -10;
        position: relative;
        

        &::after{
            width: 100%;
            height: 100%;
            content: "";
            z-index: 10;
            position: absolute;
            top: 0;
            left: 0;
            background: rgb(0,0,0);
            background: linear-gradient(180deg, rgb(26, 28, 33, 0) 0%, rgb(26, 28, 33, 1) 95%, rgb(26, 28, 33) 100%);
        }
    }

    &__splash{
        object-fit: cover;
        height: 30vh;
        width: 100%;
        object-position: center 20%;

        @media(min-width: 960px){
            height: 40vh;
        }
    }
}

</style>
  