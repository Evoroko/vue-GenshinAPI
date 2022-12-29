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
          <VLoader v-if="charactersDetails.length === 0">Loading characters...</VLoader>

          <VCharaNation
            :data="charactersDetails"
            :imgLink="charactersImgLink"
          >
          </VCharaNation>
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
import VCharaNation from '../components/VCharaNation.vue'
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

.profile__title{
    margin-bottom: 32px;
}

</style>
