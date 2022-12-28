<template>

<section v-if="character !== null">
    <div class="top__banner">
        <img class="top__art" :src="endpointImg" alt="" @error="handleError">
    </div>

    <div class="content">
        <section class="top__text">
            <div class="top__name-icon">
                <h1>{{character.name}}</h1>
                <img class="top__vision" :src="'https://api.genshin.dev/elements/' + character.vision.toLowerCase().trim() + '/icon'">  
            </div>
            <p class="chara__title">{{character.title}}</p>
            <div class="chara__rarity">
                <font-awesome-icon v-if="character.rarity==4" v-for="index in 4" :key="index" icon="fa-solid fa-star" />
                <font-awesome-icon v-if="character.rarity==5" v-for="index in 5" :key="index" icon="fa-solid fa-star" />
            </div>
        </section>  

        <VTabs :tabs="['Description', 'Skills', 'Constellation']" :active="active" @select="makeActive" class="container">
        <VTab :active="active === 'Description'">
                <section class="section section__description">
                    <div class="section__el">
                        <h2>Description</h2>
                        <p>{{character.description}}</p>
                    </div>

                    <div class="section__el">
                        <h2>Weapon</h2>
                        <p>{{character.weapon}}</p>
                    </div>
                    
                    
                    <div v-if="character.birthday" class="section__el">
                        <h2>Birthday</h2>
                        <p>{{character.birthday.substring(5, 10)}}</p>
                    </div>

                    <div class="section__el">
                        <h2>Nation</h2>
                        <p>{{character.nation}}</p>
                    </div>
                    
                    <div class="section__el">
                        <h2>Constellation</h2>
                        <p>{{character.constellation}}</p>
                    </div>
                </section>
        </VTab>

        <VTab :active="active === 'Skills'">
                <section class="section section__skills">
                    <div class="section section--big">
                        <h2>Skill talents</h2>
                        <div v-for="skill in character.skillTalents" class="section__el">
                            <h3>{{ skill.unlock }} — {{ skill.name }}</h3>
                            <p>{{ skill.description }}</p>
                        </div>
                    </div>

                    <div class="section">
                        <h2>Passive talents</h2>
                        <div v-for="talent in character.passiveTalents" class="section__el">
                            <h3>{{ talent.name }}</h3>
                            <p>{{ talent.description }}</p>
                            <small>{{ talent.unlock }}</small>
                        </div>
                    </div>
                </section>
        </VTab>

        <VTab :active="active === 'Constellation'">
                <section class="section section__constellations">
                    <div v-for="constellation in character.constellations" class="section__el">
                        <h2>{{ constellation.unlock }} — {{ constellation.name }}</h2>
                        <p>{{ constellation.description }}</p>
                    </div>
                </section>
        </VTab>
        </VTabs>

        <RouterLink to="/">← Back to home page</RouterLink>
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

const active = ref('Description');

const makeActive = (tab) => {
    active.value = tab;
}

</script>

<style lang="scss">

.top{
    &__banner{
        max-width: 960px;
        margin: auto;
        z-index: -10;
        position: relative;
        text-align: center;
        

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

    &__art{
        object-fit: cover;
        height: 30vh;
        width: 100%;
        object-position: center 20%;

        @media(min-width: 960px){
            height: 40vh;
        }
    }

    &__name-icon{
        display: flex;
        align-items: center;
        gap: 12px;
        h1{
                font-size: 2em;
        }
        
        & > * {
            margin-bottom: 4px;
        }

        @media(min-width: 420px){
            h1{
                font-size: 3.2em;
            }
        }
    }

    &__vision{
        width: 40px;
        height: 40px;
    }

    &__text{
        margin-bottom: 16px;
    }
}
</style>
  
<style scoped lang="scss">

.chara{

    &__title{
        margin-bottom: 8px;
    }
}

.section{
    & > * {
        margin-bottom: 16px;
    }

    &__el{
        & > * {
        margin-bottom: 4px;
        }

    padding: 16px;
    background-color: rgb(20, 20, 23);
    border-radius: 8px;
    }

    &--big{
        margin-bottom: 32px;
    }
}

p{
    max-width: 90ch;
}

</style>
  