<script setup>
// https://genshinlist.com/developer-api
// https://api.genshin.dev/nations/inazuma/icon
// https://api.genshin.dev/characters/albedo/portrait
import HelloWorld from '../components/HelloWorld.vue';
import CharaCard from '../components/CharaCard.vue';
import VLoader from '../components/VLoader.vue';
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
    <h2>Personnages</h2>
    <VLoader v-if="charactersDetails.length === 0">Chargement des personnages...</VLoader>
    <div class="chara__container">
      <CharaCard v-for="(character, characterKey) in charactersDetails"
          :rarity="character.rarity"
          :name="character.name"
          :min_name="charactersImgLink[characterKey]"
          :vision="character.vision_key.toLowerCase().trim()"
      />
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.chara__container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}
</style>
