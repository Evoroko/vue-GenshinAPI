<template>
    <section v-if="nation !== null">
      
      <div class="top__banner">
        <img class="top__art top__art--smaller" :src="endpointImg" alt="">
      </div>

      <div class="content">
        <section class="top__text">
            <div class="top__name-icon">
                <h1>{{nation.name}}</h1>
                <img class="top__vision" :src="'https://api.genshin.dev/elements/' + nation.element.toLowerCase().trim() + '/icon'">  
            </div>
            <!-- <p class="chara__title">{{character.title}}</p> -->
        </section>

        <section>
          <h2 class="profile__title">Characters from {{ nation.name }}</h2>
          <ul class="profile">
            <li v-for="(character, characterKey) in charactersDetails">
              <RouterLink :to="`/character/${charactersImgLink[characterKey]}`" class="profile__el">
                <img :src="'https://api.genshin.dev/characters/' + charactersImgLink[characterKey] + '/icon-big'" alt="" class="profile__img">
                <p>{{ character.name }}</p>
              </RouterLink>
            </li>
          </ul>
        </section>
      

        <RouterLink to="/">← Back to home page</RouterLink>
      </div>
    </section>

    <div v-else>
      <VLoader>Loading...</VLoader>
    </div>
</template>
  
<script setup>
import VLoader from '../components/VLoader.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const id = route.params.name_min

// Nations details
const nation = ref(null);
const endpoint = `https://api.genshin.dev/nations/${id}`;

const fetchNations = async () => {
const response = await fetch(endpoint)
return await response.json()
}

onMounted(async () => {
const response = await fetchNations()

nation.value = response;

console.log(nation)

})


// Character details
const endpointCharacters = `https://api.genshin.dev/characters/`;
const characters = ref([]);
const charactersDetails = ref([]);
const charactersImgLink = ref([]);
fetch(endpointCharacters)
.then(response => response.json())
.then(data => {
  characters.value = data
  return characters.value;
})
.then(data => {
  data.forEach(function(chara) {
    fetch(`https://api.genshin.dev/characters/${chara}`)
    .then(response => response.json())
    .then(data => {
      if(data.nation === (id.charAt(0).toUpperCase() + id.slice(1))){
        charactersDetails.value.push(data);
        charactersImgLink.value.push(chara);
      }
    })
  });
  console.log(charactersDetails.value)
  console.log(charactersImgLink.value)
  return charactersDetails.value;
});

let endpointImg = ref(endpoint + '/icon');






</script>
  
<style scoped lang="scss">

.top__art--smaller{
  max-width: 400px;
}

.profile{

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  text-align: center;
  justify-content: center;
  margin-bottom: 32px;

  @media(min-width: 513px){
    justify-content: flex-start;
    gap: 16px;
  }

  &__el{
    width: 130px;
    height: 180px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    padding: 8px;
    background-color: rgb(20, 20, 23);
    border-radius: 8px;
    color: white;

    @media(min-width: 513px){
      width: 150px;
      height: 200px;
    }

    &:hover{
      background-color: rgb(12, 12, 15);
    }


  }

  &__img{
    width: 130px;
    height: 130px;
    object-fit: contain;

    @media(min-width: 513px){
      width: 150px;
      height: 150px;
    }
  }

  &__title{
    margin-bottom: 32px;
  }
}

</style>
