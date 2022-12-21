<script setup>
// https://genshinlist.com/developer-api
// https://api.genshin.dev/nations/inazuma/icon
// https://api.genshin.dev/characters/albedo/portrait
import HelloWorld from '../components/HelloWorld.vue';
import CharaCard from '../components/CharaCard.vue';
import { onMounted, ref } from 'vue'


// Character details
const endpointCharacters = `https://api.genshin.dev/characters/`;
const characters = ref([]);
const charactersDetails = ref([]);
fetch(endpointCharacters)
.then(response => response.json())
.then(data => {
  characters.value = data
  console.log(characters.value)
  return characters.value;
})
.then(data => {
  data.forEach(function(chara) {
    fetch(`https://api.genshin.dev/characters/${chara}`)
    .then(response => response.json())
    .then(data => {
      charactersDetails.value.push(data);
    })
  });
  console.log(charactersDetails.value)
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
    <h1>Test</h1>
    <!-- Exemple de lien à utiliser pour lier vos cards à la page `Post` -->
    <!-- <pre>{{posts}}</pre> -->
    <!-- <VLoader v-if="posts.length === 0">Chargement du post...</VLoader> -->
    <section class="container">
      <CharaCard v-for="character in charactersDetails"
          :title="character.title"
          :name="character.name"
          :vision="character.vision"
      />
    </section>
    

    <!-- <div class="articles">
      <div class="articles__el" v-for="post in posts">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
        <ul class="articles__list" v-for="tag in post.tags">
          <li>{{tag}}</li>          
        </ul>
      </div>
    </div> -->
    
  </div>
</template>

<style scoped>

</style>
