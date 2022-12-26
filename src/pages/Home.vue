<script setup>
// https://genshinlist.com/developer-api
// https://api.genshin.dev/nations/inazuma/icon
// https://api.genshin.dev/characters/albedo/portrait
import VCharaCard from '../components/VCharaCard.vue';
import VLoader from '../components/VLoader.vue';
import VNations from '../components/VNations.vue';
import { onMounted, ref } from 'vue'


// Character details
const endpointCharacters = `https://api.genshin.dev/characters/`;
const characters = ref([]);
const charactersDetails = ref([]);
const charactersImgLink = ref([]);
fetch(endpointCharacters)
.then(response => response.json())
.then(data => {
  characters.value = data
  // console.log(characters.value)
  return characters.value;
})
.then(data => {
  data.forEach(function(chara) {
    fetch(`https://api.genshin.dev/characters/${chara}`)
    .then(response => response.json())
    .then(data => {
      charactersDetails.value.push(data);
      charactersImgLink.value.push(chara);
    })
  });
  console.log(charactersDetails.value)
  console.log(charactersImgLink.value)
  return charactersDetails.value;
});


// Nations list
const endpointNations = `https://api.genshin.dev/nations/`;
const nations = ref([]);
const nationsDetails = ref([]);
const nationsImgLink = ref([]);

fetch(endpointNations)
.then(response => response.json())
.then(data => {
  nations.value = data
  return nations.value;
})
.then(data => {
  data.forEach(function(nation) {
    fetch(`https://api.genshin.dev/nations/${nation}`)
    .then(response => response.json())
    .then(data => {
      nationsDetails.value.push(data);
      nationsImgLink.value.push(nation);
    })
  });
  return nationsDetails.value;
});








const fetchNations = async () => {
  const nationfetchResponse = await fetch(endpointNations)
  return await nationfetchResponse.json()
}

onMounted(async () => {
  const nationsResponse = await fetchNations()

  nations.value = nationsResponse
  console.log(nationsResponse)
})

</script>

<template>
  <div class="home">
    <h2 class="title title--big">Nations</h2>
      <div class="container container__nations">
        <VNations v-for="(nationDetails, key) in nationsDetails"
          :name="nationDetails.name"
          :vision="nationDetails.element.toLowerCase().trim()"
          :name_min="nationsImgLink[key]"
        ></VNations>
      </div>
    
    
    <h2 class="title title--big">Personnages</h2>
    <VLoader v-if="charactersDetails.length === 0">Chargement des personnages...</VLoader>
    <div class="container container__chara">
      <VCharaCard v-for="(character, characterKey) in charactersDetails"
          :rarity="character.rarity"
          :name="character.name"
          :min_name="charactersImgLink[characterKey]"
          :vision="character.vision_key.toLowerCase().trim()"
      />
    </div>
    
  </div>
</template>

<style lang="scss">
.container{
  
  margin-bottom: 32px;

  &__chara{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  &__nations{
    display: flex;
    gap: 16px;
    flex-direction: row;
    flex-wrap: wrap;
  }
}


.title{
  margin-bottom: 16px;
  &--big{
    font-size: 31px;
    margin-bottom: 32px;
  }
}
</style>
